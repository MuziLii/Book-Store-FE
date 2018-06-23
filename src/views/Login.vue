<template>
    <div class="register">
        <h2 class="title">登陆</h2>
        <el-form :model="loginForm" :rules="rules" status-icon label-width="100px" ref="loginForm">
            <el-form-item label="账号" prop="username">
                <el-input type="text" v-model="loginForm.username" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">登陆</el-button>
                <el-button @click="resetForm('loginForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import api from '@/api'
import {mapActions, mapState} from 'vuex'

export default {
	data() {
        var validateUsername = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入账号'))
            } else {
                callback()
            }
        };
        var validatePassword = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'))
            } else {
                callback()
            }
        };
        return {
            loginForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [{validator: validateUsername, trigger: 'blur'}],
                password: [{validator: validatePassword, trigger: 'blur'}]
            }
        }
    },
    methods: {
        ...mapActions(['loginAction']),
        submitForm(formName) {
            let that = this
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    api.user.auth(that.loginForm).then(function(resp) {
                        if(resp.data.data) {
                            that.$message.success('登录成功')
                            that.loginAction(resp.data.data)
                            sessionStorage.setItem("$token", resp.data.msg)
                            that.$router.push('/')
                        } else {
                            that.$message.error('登录失败')
                        }
                    }).catch(function (err) {
                        console.log(err)
                        that.$message.error('网络错误')
                    })
                } else {
                    console.log('error submit!!')
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