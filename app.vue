<template>
    <div>
    <div> hello {{name}}</div>
    <v-title title="vue组件化"></v-title>
    <v-button @click="handleClick">点击按钮</v-button>
    <img src="./images/flower.jpeg">
</div>
</template>
<script>
    import vTitle from './title.vue';
    import vButton from './Button.vue';
    export default {
        components: {
            vTitle,
            vButton
        },
        data() {
            return {
                name: 'vue.js'
            }
        },
        methods: {
            handleClick(e) {
                console.log(e);
            }
        }
    }   
</script>

<style scoped>
div {
    color: red;
    font-size: 24px;
}  
</style>