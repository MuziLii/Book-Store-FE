<template>
    <div class="view">
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
                <el-table-column label="价格" width="70">
                    <template slot-scope="scope">
                        <span>{{ scope.row.price }}</span>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
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
        fetchData() {
            let that = this
            api.book.fetchAll().then(function(resp) {
                that.books = resp.data
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
</style>