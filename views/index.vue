<template>
    <div>
    <div>首页</div>
    {{count}}
    {{list}}
    <button @click="handleClick">+2</button>
    <button @click="handleD">+1</button>
    <br/>
    <button @click="handleActionAdd">action +1</button>
    <!-- replace属性开启不记录历史记录的功能，浏览器的返回按钮不能回到上一个页面 -->
    <!-- <router-link to="/about" tag="li" replace>跳转到about</router-link> -->
</div>
</template>
<script>
    export default {
        computed: {
            count() {
                // return this.$store.state.a.count;
                return this.$store.state.count;
            },
            // list() {
            //     return this.$store.state.list.filter(item=> item<10);
            // }
            list() {
                return this.$store.getters.filterList;
            }
        },
        methods: {
            handleClick() {
                this.$store.commit('increment', 2);
            },
            handleD() {
                this.$store.commit('decrease');
            },
            handleActionAdd() {
                this.$store.dispatch('increment').then((data)=>{
                    console.log(data);
                });
            }
        }

    }
</script>