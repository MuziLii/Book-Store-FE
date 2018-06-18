<template>
	<div class="home">
		<el-container class="main-container">
			<el-aside width="200px">
				<menu-tab></menu-tab>
			</el-aside>
			<el-main>
				<add-book></add-book>
			</el-main>
		</el-container>
	</div>
</template>

<script>
import MenuTab from '@/components/MenuTab'
import AddBook from '@/components/AddBook'

export default {
	name: 'home',
	components: {MenuTab, AddBook}
}
</script>