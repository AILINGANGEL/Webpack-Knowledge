<template>
    <div>

        <h1 v-if="level === 1">
            <a :href="'#'+title">
                <slot></slot>
            </a>
        </h1>
        <h2 v-if="level === 2">
            <a :href="'#'+title">
                <slot></slot>
            </a>
        </h2>
    </div>
</template>
<script>
    export default {
        props: {
            level: {
                type: Number,
                required: true
            },
            title: {
                type: String,
                default: ''
            }
        },
        data() {
            return {

            };
        },
        computed:{

        },
        mounted() {
            console.log(this.level);
        },
        methods: {

        }
    }
</script>