<template>
    <div>
        关于我们
        <button @click="handleClick">跳转到user</button>
    </div>
</template>
<script>
    export default {
        methods: {
            handleClick() {
                this.$router.push('/user/123');//会写入历史记录，如果使用replace就不会写入历史记录
                this.$router.go(-1);//前进后退多步
            }
        }
    }
</script>