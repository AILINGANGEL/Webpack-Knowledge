<template>
    <div>
        {{num}}
    </div>
</template>
<script type="text/javascript">
    export default {
        data() {
            return {
                num: 0
            }
        },
        created() {
            this.$bus.on('add', (value)=>{
                this.num = value
            })
        }
    }
</script>>