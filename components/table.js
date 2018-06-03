export default {
    props: {
        columns: {
            type: Array,
            default () {
                return [];
            }
        },
        data: {
            type: Array,
            default () {
                return [];
            }
        }
    },
    data() {
        return {
            currentColumns: [],
            currentData: []
        }
    },
    methods: {
        makeColumns() {
            this.currentColumns = this.columns.map((col, index) => {
                col._sortType = 'normal';
                col._index = index;
                return col;
            });
        },
        makeData() {
            this.currentData = this.data.map((row, index) => {
                row._index = index;
                return row;
            });
        },
        handSortByAsc(index) {
        	const key = this.currentColumns[index].key;
        	this.currentColumns.forEach((col) => {
        		col._sortType = 'normal';
        	});
        	this.currentColumns[index]._sortType = 'asc';
        	this.currentData.sort((a, b)=>{
        		return a[key] > b[key] ? 1: -1;
        	});
        },
        handSortByDesc(index) {
        	const key = this.currentColumns[index].key;
        	this.currentColumns.forEach((col) => {
        		col._sortType = 'normal';
        	});
        	this.currentColumns[index]._sortType = 'desc';
        	this.currentData.sort((a, b)=>{
        		return a[key] < b[key] ? 1: -1;
        	});
        }
    },
    mounted() {
        this.makeColumns();
        this.makeData();
    },
    render(h) {
        const ths = [];
        const trs = [];
        const cols = [];
        this.currentColumns.forEach((col, index) => {
            if (col.sortable) {
                ths.push(h('th', [
                    h('span', col.title),
                    h('a', {
                        class: {
                            on: col._sortType === 'asc'
                        },
                        on: {
                            click: () => {
                                this.handSortByAsc(index);
                            }
                        }
                    }, 'asc'),
                    h('a', {
                        class: {
                            on: col._sortType === 'desc'
                        },
                        on: {
                            click: () => {
                                this.handSortByDesc(index);
                            }
                        }
                    }, 'desc')
                ]));
            } else {
                ths.push(h('th', col.title));
            }
            cols.push(h('col',{
            	attrs: {
            		width: col.width ? col.width: 'auto'
            	}
            }));
        });
        this.currentData.forEach((row) => {
            const tds = [];
            this.currentColumns.forEach((cell) => {
                tds.push(h('td', row[cell.key]))
            });
            trs.push(h('tr', tds));
        });
        return h('table', [h('colgroup', cols),h('thead', [
                h('tr', ths)
            ]),
            h('tbody', trs)
        ]);
    },
    watch: {
    	data() {
    		this.makeData();
    		const sortedColumn = this.currentColumns.filter((col)=>col._sortType !== 'normal');
    		if (sortedColumn.length > 0) {
    			if (sortedColumn[0]._sortType === 'asc') {
    				this.handSortByAsc(sortedColumn[0]._index);
    			} else {
    				this.handSortByDesc(sortedColumn[0]._index);
    			}
    		}
    	}
    }
}