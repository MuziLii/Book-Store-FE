<template>
	<div class="home">
		<el-container class="main-container">
			<el-aside width="200px">
				<menu-tab></menu-tab>
			</el-aside>
			<el-main>
				<order-manage></order-manage>
			</el-main>
		</el-container>
	</div>
</template>

<script>
import MenuTab from '@/components/MenuTab'
import OrderManage from '@/components/OrderManage'

export default {
	name: 'home',
	components: {MenuTab, OrderManage}
}
</script>