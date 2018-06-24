<template>
    <div class="view">
        <el-card>
            <el-form :model="bookForm" status-icon label-width="100px">
                <el-form-item label="书名">
                    <el-input type="text" v-model="bookForm.name"></el-input>
                </el-form-item>
                <el-form-item label="出版社">
                    <div class="inline-form">
                        <el-select default-first-option v-model="bookForm.pub_id">
                            <el-option v-for="item in pubs" :key="item.id" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                        <el-button plain class="item" @click="addPublish">添加出版社</el-button>
                    </div>
                </el-form-item>
                <el-form-item label="价格">
                    <el-input type="number" v-model="bookForm.price"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm">添加</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import api from '@/api'

export default {
    name: 'BookList',
	data() {
        return {
            pubs: [],
            bookForm: {
                name: '',
                pub_id: '',
                price: 0
            }
        }
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            let that = this
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
        addPublish() {
            let that = this
            that.$prompt("请输入出版社名称", '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            }).then(({ value }) => {
                api.publish.add(value).then(function(resp) {
                    if(resp.data.code == 200) {
                        that.$message.success("添加成功")    
                        that.fetchData();
                    } else if(resp.data.code == 401) {
                        that.$message.warning("无权访问")
                    } else {
                        that.$message.error("获取失败")        
                    }
                }).catch(function (err) {
                    that.$message.error("网络错误")    
                })
            }).catch(() => {})
        },
        submitForm() {
            let that = this
            api.book.add(that.bookForm).then(function(resp) {
                if(resp.data.code == 200) {
                    that.$message.success("添加成功")    
                    that.fetchData();
                } else if(resp.data.code == 401) {
                    that.$message.warning("无权访问")
                } else {
                    that.$message.error("获取失败")        
                }
            }).catch(function (err) {
                that.$message.error("网络错误")    
            })
        }
    }
}
</script>


<style lang="less" scoped>
.view {
    margin: 40px;
}
.inline-form {
    display: flex;
    .item {
        margin-left: 40px;
    }
}
</style>