<template>
    <div class="view">
        <div class="extra">
            <el-alert
                :title="user.nickname + '，余额: ' + user.balance"
                type="success">
            </el-alert>
        </div>
        <el-card>
            <el-table :data="cart" stripe style="text-align: left;">
                <el-table-column label="书名">
                    <template slot-scope="scope">
                        <span>{{ scope.row.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="价格(￥)">
                    <template slot-scope="scope">
                        <span>{{ scope.row.price }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="数量">
                    <template slot-scope="scope">
                        <el-input type="number" @change="changeNum($event, scope.row.id)" :value="scope.row.number" class="num"></el-input>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <div class="extra">
            <el-alert
                :closable="false"
                :title="'总价: ' + totalPay"
                type="error">
            </el-alert>
        </div>
        <br>
        <el-row type="flex" justify="center">
            <el-button type="danger">提交订单</el-button>
        </el-row>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    name: 'Cart',
    data() {
        return {
            totalPay: 0
        }
    },
    mounted() {
        this.setTotalPay()
    },
    methods: {
        ...mapActions(['setCartAction']),
        changeNum(value, id) {
            let cart_data = this.cart
            for (let index = 0; index < cart_data.length; index++) {
                if(cart_data[index]['id'] == id ) {
                    cart_data[index]['number'] = value
                    if(value <= 0) {
                        cart_data.splice(index, 1)
                    }
                    break
                }
            }
            this.setCartAction(cart_data)
            this.setTotalPay()
        },
        setTotalPay() {
            let total = 0
            for (let index = 0; index < this.cart.length; index++) {
                const element = this.cart[index];
                total += element['price'] * element['number']
            }
            this.totalPay = total
        }
    },
    computed: {
        ...mapState(['user','cart'])
    }
}
</script>


<style lang="less" scoped>
.view {
    margin: 40px;
}
.extra {
    padding: 10px 0;
}
.num {
    width: 80px;
}
</style>