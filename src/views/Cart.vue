<template>
	<div class="cart">
		<el-container class="main-container">
			<el-aside width="200px">
				<menu-tab></menu-tab>
			</el-aside>
			<el-main>
				<cart></cart>
			</el-main>
		</el-container>
	</div>
</template>

<script>
import MenuTab from '@/components/MenuTab'
import Cart from '@/components/Cart'

export default {
    components: {MenuTab, Cart}
}
</script>