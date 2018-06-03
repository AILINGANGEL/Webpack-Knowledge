// 图片组件选项
var ImgItem = {
    props: ['data'],
    render: function(createElement) {
        return createElement('div', [
            createElement('p', '图片组件'),
            createElement('img', {
                attrs: {
                    src: this.data.url
                }
            })
        ]);
    }
};

//视频组件选项
var VideoItem = {
    props: ['data'],
    render: function(createElement) {
        return createElement('div', [
            createElement('p', '视频组件'),
            createElement('video', {
                attrs: {
                    src: this.data.url,
                    controls: 'controls',
                    autoplay: 'autoplay'
                }
            })
        ]);
    }
};

//纯文本组件
var TextItem = {
	props: ['data'],
	render: function(createElement) {
		return createElement('div', [
			createElement('p', '纯文本组件'),
			createElement('p', this.data.content)
		]);
	}
};

export default {
	functional: true,
	props: {
		data: {
			type: Object,
			required: true
		}
	},
	render: function(createElement, context) {
		function getComponent() {
			var data = context.props.data;
			if (data.type === 'img') {
				return ImgItem;
			} else if (data.type === 'video') {
				return VideoItem;
			} else {
				return TextItem;
			}
		}
		return createElement(getComponent(), {
			props: {
				data: context.props.data
			}
		}, context.children);
	}
}