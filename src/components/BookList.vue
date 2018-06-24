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
                            <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                            <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
                        </div>
                        <div v-show="user.role && user.role.name == 'NORMAL'">
                            <el-button size="mini" @click="addToCart(scope.row)"
                                type="success" icon="el-icon-plus" plain circle></el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <el-dialog title="修改图书" :visible.sync="dialogFormVisible">
            <el-form :model="editForm">
                <el-form-item label="书名">
                    <el-input type="text" v-model="editForm.name"></el-input>
                </el-form-item>
                <el-form-item label="出版社">
                    <div class="inline-form">
                        <el-select default-first-option v-model="editForm.publish.id">
                            <el-option v-for="item in pubs" :key="item.id" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                        <el-button plain class="item" @click="addPublish">添加出版社</el-button>
                    </div>
                </el-form-item>
                <el-form-item label="价格">
                    <el-input type="number" v-model="editForm.price"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitEdit">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import api from '@/api'

export default {
    name: 'BookList',
    data() {
        return {
            books: [],
            editForm: {
                id: '',
                name: '',
                publish: {
                    id: ''
                },
                price: 0
            },
            pubs: [],
            dialogFormVisible: false
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
                if(resp.data.code == 200) {
                    that.books = resp.data.data
                } else if(resp.data.code == 401) {
                    that.$message.warning("无权访问")
                } else {
                    that.$message.error("获取失败")        
                }
            }).catch(function (err) {
                console.log(err)
                that.$message.error("网络错误")    
            })
            
            api.publish.fetchAll().then(function(resp) {
                if(resp.data.code == 200) {
                    that.pubs = resp.data.data
                } else if(resp.data.code == 401) {
                    that.$message.warning("无权访问")
                } else {
                    that.$message.error("获取失败")        
                }
            }).catch(function (err) {
                that.$message.error("网络错误")    
            })
        },
        handleEdit(row) {
            let that = this
            that.dialogFormVisible = true
            that.editForm.id = row.id
            that.editForm.name = row.name
            that.editForm.price = row.price
            that.editForm.publish = row.publish
        },
        handleDelete(id) {
            let that = this
            api.book.delete(id).then(function(resp) {
                if(resp.data.code == 200) {
                    that.$message.success("删除成功")
                    that.fetchData()
                } else if(resp.data.code == 401) {
                    that.$message.warning("无权访问")
                } else {
                    that.$message.error("删除失败")        
                }
            }).catch(function (err) {
                that.$message.error("网络错误")    
            })
        },
        submitEdit() {
            let that = this
            api.book.update(that.editForm).then(function(resp) {
                if(resp.data.code == 200) {
                    that.$message.success("修改成功")
                    that.fetchData()
                    dialogFormVisible = false   
                } else if(resp.data.code == 401) {
                    that.$message.warning("无权访问")
                } else {
                    that.$message.error("获取失败")        
                }
            }).catch(function (err) {
                console.log(err)
                that.$message.error("网络错误")    
            })
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
        },
        addPublish() {
            let that = this
            that.$prompt("请输入出版社名称", '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            }).then(({ value }) => {
                api.publish.add(value).then(function(resp) {
                    if(resp.data.code == 200) {
                        that.$message.success("添加成功")   
                        that.fetchData()
                    } else if(resp.data.code == 401) {
                        that.$message.warning("无权访问")
                    } else {
                        that.$message.error("获取失败")        
                    }
                }).catch(function (err) {
                    that.$message.error("网络错误")    
                })
            }).catch(() => {})
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
.inline-form {
    display: flex;
    .item {
        margin-left: 40px;
    }
}
</style>