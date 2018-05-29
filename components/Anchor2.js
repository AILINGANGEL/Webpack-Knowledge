export default {
    props: {
        level: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            default:''
        }
    },
    render: function(createElement) {
        return createElement('h'+this.level,[
            createElement('a',{
                domProps: {
                    href: '#' + this.title
                }
            },
            this.$slots.default
            )])
    }
}