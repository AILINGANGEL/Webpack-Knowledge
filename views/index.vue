<template>
    <div>
    <div>首页</div>
    <!-- replace属性开启不记录历史记录的功能，浏览器的返回按钮不能回到上一个页面 -->
    <router-link to="/about" tag="li" replace>跳转到about</router-link>
</div>
</template>
<script>
    export default {

    }
</script>