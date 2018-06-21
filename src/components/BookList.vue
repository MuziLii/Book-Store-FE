<template>
    <div class="view">
        <div class="extra" v-show="user.role && user.role.name == 'NORMAL'">
            <el-alert
                show-icon
                title="点击 + 添加至购物车"
                type="info">
            </el-alert>
        </div>
        <el-card>
            <el-table :data="books" style="text-align: left;">
                <el-table-column label="编号" width="100">
                    <template slot-scope="scope">
                        <span>{{ scope.row.id }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="书名">
                    <template slot-scope="scope">
                        <span>{{ scope.row.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="出版社">
                    <template slot-scope="scope">
                        <span>{{ scope.row.publish.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="价格(￥)">
                    <template slot-scope="scope">
                        <span>{{ scope.row.price }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="200" v-if="user.role">
                    <template slot-scope="scope">
                        <div v-show="user.role &&　user.role.name == 'ADMIN'">
                            <el-button size="mini" @click="handleEdit(scope.$index)">编辑</el-button>
                            <el-button size="mini" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
                        </div>
                        <div v-show="user.role && user.role.name == 'NORMAL'">
                            <el-button size="mini" @click="addToCart(scope.row)"
                                type="success" icon="el-icon-plus" plain circle></el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import api from '@/api'

export default {
    name: 'BookList',
    data() {
        return {
            books: []
        }
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        ...mapActions(['setCartAction']),
        fetchData() {
            let that = this
            api.book.fetchAll().then(function(resp) {
                that.books = resp.data
            }).catch(function (err) {
                that.$message.error("网络错误")    
            })
        },
        handleEdit(index) {

        },
        handleDelete(index) {

        },
        addToCart(book) {
            let id = book['id']
            let cart_data = this.cart
            let had = false
            for (let index = 0; index < cart_data.length; index++) {
                if(cart_data[index]['id'] == id) {
                    had = true
                    cart_data[index]['number']++
                    break
                }
            }
            if(!had) {
                book['number'] = 1
                cart_data.push(book)
            }
            this.setCartAction(cart_data)
        }
    },
    computed: {
        ...mapState(['user', 'cart'])
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
</style>