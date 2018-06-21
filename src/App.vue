<template>
    <div id="app">
        <el-header class="header">
            <el-row>
                <el-col :offset="6" :span="12" class="title">
                    <span>Book Store</span>
                </el-col>
                <el-col :span="6">
					<el-row type="flex" justify="end" class="user">
						<div v-if="user.id">
							<span class="item">{{user.nickname}}, welcome!</span>
							<el-button type="info" size="mini" plain class="item" @click="logout">注销</el-button>
						</div>
						<div v-else class="inline">
							<div class="item"><el-button type="text" @click="$router.push('/login')">登陆</el-button></div>
							<div class="item"><el-button type="text" @click="$router.push('/register')">注册</el-button></div>
						</div>
					</el-row>
                </el-col>
            </el-row>
        </el-header>
		<router-view></router-view>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
	methods: {
		...mapActions(['logoutAction']),
		logout() {
			this.logoutAction()
			this.$router.push('/')
		}
	},
    computed: {
		...mapState(['user'])
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
		.item {
			margin-left: 20px;
		}
		.inline {
			display: flex;
		}
	}
}
.main-container {
	padding: 0 100px;
}
</style>