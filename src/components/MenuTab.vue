<template>
    <div>
        <el-menu :default-active="$route.path" router  class="tab">
            <el-menu-item index="/">
                <i class="el-icon-tickets"></i>
                <span slot="title">查看图书</span>
            </el-menu-item>
            <el-menu-item index="/order" v-show="user.role && user.role.name == 'NORMAL'">
                <i class="el-icon-date"></i>
                <span slot="title">查看订单</span>
            </el-menu-item>
            <el-menu-item index="/add" v-show="user.role && user.role.name == 'ADMIN'">
                <i class="el-icon-circle-plus-outline"></i>
                <span slot="title">添加图书</span>
            </el-menu-item>
            <el-menu-item index="/order_manage" v-show="user.role && user.role.name == 'ADMIN'">
                <i class="el-icon-edit-outline"></i>
                <span slot="title">订单管理</span>
            </el-menu-item>
            <el-menu-item index="/cart" v-show="user.role && user.role.name == 'NORMAL'">
                <i class="el-icon-goods"></i>
                <span slot="title">购物车</span>
                <el-badge is-dot class="tip" v-show="cart[0]"></el-badge>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    computed: {
        ...mapState(['user','cart'])
    }
}
</script>

<style lang="less" scoped>
.tab {
    margin-top: 40px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.tip {
    float: right;
    right: 70px;
}
</style>
