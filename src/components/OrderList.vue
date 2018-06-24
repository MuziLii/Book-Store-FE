<template>
    <div class="view">
        <el-card>
            <el-table :data="orders" style="text-align: left;">
                <el-table-column type="expand">
                    <template slot-scope="scope">
                        <el-table border :data="scope.row.orderBooks" style="text-align: left;">
                            <el-table-column label="书名">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.book.name }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="出版社">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.book.publish.name }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="价格(￥)">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.book.price }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="数量">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.bookNumber }}</span>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </el-table-column>
                <el-table-column label="编号" width="150">
                    <template slot-scope="scope">
                        <span>{{ scope.row.orderNo }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="用户">
                    <template slot-scope="scope">
                        <span>{{ scope.row.user.username }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="总支付">
                    <template slot-scope="scope">
                        <el-tag type="danger" size="medium">{{ totalFee(scope.row.orderBooks) }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="状态">
                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.finish" type="info" size="medium">已完成</el-tag>
                        <el-tag v-else size="medium">已支付</el-tag>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import api from '@/api'

export default {
    name: 'BookList',
    data() {
        return {
            orders: []
        }
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            let that = this
            api.order.fetchMy(that.user.id).then(function(resp) {
                if(resp.data.code == 200) {
                    that.orders = resp.data.data
                } else if(resp.data.code == 401) {
                    that.$message.warning("无权访问")
                } else {
                    that.$message.error("获取失败")        
                }
            }).catch(function (err) {
                that.$message.error("网络错误")    
            })
        },
        totalFee(books) {
            let total = 0
            books.forEach(element => {
                total += element.bookNumber * element.book.price
            })
            return total
        }
    },
    computed: {
        ...mapState(['user'])
    }
}
</script>


<style lang="less" scoped>
.view {
    margin: 40px;
}
</style>