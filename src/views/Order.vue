<template>
	<div class="home">
		<el-container class="main-container">
			<el-aside width="200px">
				<menu-tab></menu-tab>
			</el-aside>
			<el-main>
				<order-list></order-list>
			</el-main>
		</el-container>
	</div>
</template>

<script>
import MenuTab from '@/components/MenuTab'
import OrderList from '@/components/OrderList'

export default {
	name: 'home',
	components: {MenuTab, OrderList}
}
</script>