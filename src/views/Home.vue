<template>
	<div class="home">
		<el-container class="main-container">
			<el-aside width="200px">
				<menu-tab></menu-tab>
			</el-aside>
			<el-main>
				<book-list></book-list>
			</el-main>
		</el-container>
	</div>
</template>

<script>
import MenuTab from '@/components/MenuTab'
import BookList from '@/components/BookList'

export default {
	name: 'home',
	components: {MenuTab, BookList}
}
</script>