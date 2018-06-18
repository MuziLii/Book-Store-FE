<template>
    <div class="view">
        <el-card>
            <el-form :model="ruleForm2" status-icon label-width="100px" class="demo-ruleForm">
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model.number="ruleForm2.age"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                    <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'BookList',
	data() {
        return {
            ruleForm2: {
                pass: '',
                checkPass: '',
                age: ''
            }
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