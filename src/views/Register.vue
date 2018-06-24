<template>
    <div class="register">
        <h2 class="title">注册</h2>
        <el-form :model="registerForm" :rules="rules" status-icon label-width="100px" ref="registerForm">
            <el-form-item label="账号" prop="username">
                <el-input type="text" v-model="registerForm.username"></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="nickname">
                <el-input type="text" v-model="registerForm.nickname"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="registerForm.pass"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="registerForm.checkPass"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
                <el-button @click="resetForm('registerForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import api from '@/api'

export default {
	data() {
        var validateUsername = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入账号'))
            } else {
                callback()
            }
        };
        var validateNickname = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入昵称'))
            } else {
                callback()
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.registerForm.checkPass !== '') {
                    this.$refs.registerForm.validateField('checkPass')
                }
                callback()
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'))
            } else if (value !== this.registerForm.pass) {
                callback(new Error('两次输入密码不一致!'))
            } else {
                callback()
            }
        };
        return {
            registerForm: {
                username: '',
                nickname: '',
                pass: '',
                checkPass: ''
            },
            rules: {
                username: [{validator: validateUsername, trigger: 'blur'}],
                nickname: [{validator: validateNickname, trigger: 'blur'}],
                pass: [{validator: validatePass, trigger: 'blur'}],
                checkPass: [{validator: validatePass2, trigger: 'blur'}]
            }
        }
    },
    methods: { 
        submitForm(formName) {
            var that = this
            that.$refs[formName].validate((valid) => {
                if (valid) {
                    api.user.register(that.registerForm).then(function(resp) {
                        if(resp.data.code == 200) {
                            that.$message.success("注册成功")  
                            that.$router.push("/login")
                        } else if(resp.data.code == 401) {
                            that.$message.warning("无权访问")
                        } else {
                            that.$message.error("注册失败")         
                        }
                    }).catch(function (err) {
                        that.$message.error("网络错误")    
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields()
        }
    }
}
</script>

<style lang="less" scoped>
.register {
    margin: 100px auto;
    width: 600px;
    .title {
        color: #666;
        text-align: center;
        margin: 40px 0;
    }
}
</style>
