<template>
    <button @click="handleClick" :style="styles">
        <slot></slot>
    </button>
</template>
<script>
    export default {
        props: {
            color: {
                type: String,
                default: '##oocc66'
            }
        },
        methods: {
            handleClick(e) {
                this.$emit('click', e)
            }
        },
        computed: {
            styles() {
                return {
                    background: this.color
                }
            }
        }
    }
</script>