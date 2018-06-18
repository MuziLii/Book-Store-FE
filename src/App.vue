<template>
    <div id="app">
        <el-header class="header">
            <el-row>
                <el-col :offset="6" :span="12" class="title">
                    <span>Book Store</span>
                </el-col>
                <el-col :span="6">
					<el-row type="flex" justify="end" class="user">
						<div><span>Alex, Welcome!</span></div>
						<div><el-button type="text" @click="$router.push('/login')">登陆</el-button></div>
						<div><el-button type="text" @click="$router.push('/regist')">注册</el-button></div>
					</el-row>
                </el-col>
            </el-row>
        </el-header>
		<router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
      submitForm(formName) {
        
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style lang="less">
body {
	margin: 0;
	padding: 0;
	background-image: url(./assets/bg.jpg);
	background-size: cover;
}
.header {
	border-bottom: 1px;
	.title {
		font-style: italic;
		font-size: 18px;
		line-height: 60px;
		text-align: center;
		color: #000;
	}
	.user {
		line-height: 60px;
		div {
			margin-left: 20px;
		}
	}
}
.main-container {
	padding: 0 100px;
}
</style>