<template>
	<div>
		<vTable :columns="columns" :data="data"></vTable>
		<button @click="addData">添加数据</button>
	</div>
</template>
<script>
	import vTable from '../components/table';
	export default {
		components: {
			vTable
		},
		data() {
			return {
				columns: [{
				title: '姓名',
				key: 'name'
			}, {
				title: '年龄',
				key: 'age',
				sortable: true
			}, {
				title: '出生日期',
				key: 'birthday',
				sortable: true
			}, {
				title: '地址',
				key: 'address'
			}],
			data: [{
				name: '王小草',
				age: 20,
				birthday: '1990-10-18',
				address: '五道口'
			},{
				name: '王小明',
				age: 21,
				birthday: '1990-10-18',
				address: '五道口'
			}]
			}
		},
		methods: {
			addData() {
				this.data.push({
					name: 'abc',
					age: 17,
					birthday: '1990-10-18',
					address: '五道口'
				});
			}
		}
	}
</script>