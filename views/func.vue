<template>
	<div>
		<smartItem :data="data"></smartItem>
		<button @click="change('img')">切换为图片组件</button>
		<button @click="change('video')">切换为视频组件</button>
		<button @click="change('text')">切换为文本组件</button>
	</div>
</template>
<script>
	import smartItem from '../components/smart';
	export default {
		components: {
			smartItem
		},
		props:{},
		data(){
			return {
				data: {}
			}
		},
		methods: {
			change(type) {
				if (type == 'img') {
					this.data = {
						type: 'img',
						url: 'http://www.baidu.com'
					}
				} else if (type == 'video') {
					this.data = {
						type: 'video',
						url: 'http://www.baidu.com'
					}
				} else {
					this.data = {
						type: 'text',
						content: '这是一段文本'
					}
				}
			}
		},
		created() {
			this.change('img');
		}
	}
</script>