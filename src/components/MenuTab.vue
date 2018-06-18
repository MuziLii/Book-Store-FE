<template>
    <div>
        <el-menu :default-active="$route.path" router  class="tab">
            <el-menu-item index="/">
                <i class="el-icon-tickets"></i>
                <span slot="title">查看图书</span>
            </el-menu-item>
            <el-menu-item index="/order">
                <i class="el-icon-goods"></i>
                <span slot="title">查看订单</span>
            </el-menu-item>
            <el-menu-item index="/add">
                <i class="el-icon-circle-plus-outline"></i>
                <span slot="title">添加图书</span>
            </el-menu-item>
            <el-menu-item index="/order_manage">
                <i class="el-icon-edit-outline"></i>
                <span slot="title">订单管理</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.tab {
    margin-top: 40px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
</style>
