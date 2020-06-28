# jm-ui

> An ui project base on Vue.js

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 用法

`npm install jm-plug --save`

### main.js

`import JmPlug from 'jm-plug'`
`Vue.use(JmPlug)`

### 页面引入comfirm组件

``` this.$refs.myConfirm.showModel();  
    this.confirmOptions = {  
        type: "warning",//warning  
        title: "提示",//提示  
        message: "are you ok?",//""  
        color: '#66b1ff',  
        btnCancelText: "取消",//取消  
        btnSubmitText: "确定",//确定  
        btnSubmitFunction: function () {
            console.log('ok')
        },  
        btnCancelFunction: function () {  
            console.log('no')  
        }  
    }
    <Jm-comfirm :confirmModalOptions="confirmOptions" ref="myConfirm"></Jm-comfirm>
```

### 页面引入scoll组件

``` bash
<jm-scoll
    :on-refresh="onRefresh"
    :on-infinite="onInfinite"
    :dataList="scrollData"
    :marginTop="marginTop">
    <ul
    ref="scoll">
    <li v-for="(item,index) in listdata">{{item.name}}</li>
    </ul>
</jm-scoll>
    data() {
      return {
        marginTop:'margin-top:50px;',
        pageStart: 0, // 开始页数
        pageEnd: 0, // 结束页数
        listdata: [], // 数据列表
        scrollData:{
          noFlag: false //暂无更多数据显示
        },
        data:[
            {name: '23424'},
            {name: '23424'},
            {name: '23424'},
            {name: '23424'},
            {name: '23424'},
            {name: '23424'},
            {name: '23424'},
            {name: '23424'},
            {name: '23424'},
            {name: '23424'},
        ],
        data1:[
            {name: '23424'},
            {name: '23424'},
            {name: '23424'},
            {name: '23424'},
            {name: '23424'},
            {name: '23424'},
            {name: '23424'},
            {name: '23424'},
            {name: '23424'},
            {name: '23424'},
        ],
      }
    },
    mounted: function() {
      // 首次请求数据
      this.fetchData();
    },
    methods: {
      fetchData() {
        let that = this
        // this.axios.get('/api/testData').then((response) => {
        //   this.listdata = response.data.data.list;
        //   this.pageEnd = response.data.data.totalPage;
          this.listdata = this.data;
          // 获取总页数
          this.pageEnd = 2;
          // 还原
          this.pageStart = 0;
        // })
      },
      // 下拉刷新
      onRefresh(done) {
        this.fetchData();
        done(); // call done
      },
      // 上拉加载更多
      onInfinite(done) {
        this.pageStart++;
        // 加载条
        let more = this.$el.querySelector('.load-more');
        // 判断是否显示加载条
        if(this.pageStart > this.pageEnd){
          //走完数据调用方法
          this.scrollData.noFlag = true;
        }else{
          let _this = this;
          //   this.axios.get('/api/testData').then((response) => {
              // _this.listdata = _this.listdata.concat(response.data.data.list);
              // 获取总页数
              // _this.pageEnd = response.data.data.totalPage;
          //   })
          setTimeout(() => {
            _this.listdata = _this.listdata.concat(this.data1);
            // 获取总页数
            _this.pageEnd = 2;
            // 隐藏加载条
            more.style.display = 'none';
            done();
          },3000)
        }
      }
    }
```

### 消息滚动组件

``` bash
<Jm-marquee :marqueeList="marqueeList">消息滚动</Jm-marquee>
data() {
  return {
    marqueeList: [  //消息滚动
        {
            name: '军电视剧烦恼是的空间开发'
        },

        {
            name: '军水电费了羧甲淀粉钠盛开'
        },

        {
            name: '军第三方库收到货否'
        },

        {
            name: '军杜师傅iOS'
        }
    ]
  }
}
```

### 仿百度搜索组件

``` bash
<Jm-Auto-Search class="Jm-btn"
    label="name"
    valueKey="color"
    @click="openComfirm"
    :searchWidth="250"
    :searchHeight="34"
    v-model="searchVal"
    :searchList="themeList"
    :isSimpleArray="false"
    @select="v=>searchVal=v"
    @selectName="v=>searchName=v">
</Jm-Auto-Search>

searchVal: '',
searchName: '',
searchList: ['选项1', '选项2', '选项3', 'jm'],
searchList1: [
    {
        value: '选项1',
        label: '黄金糕'
    },
    {
        value: '选项2',
        label: '双皮奶'
    },
    {
        value: '选项3',
        label: '蚵仔煎'
    },
    {
        value: 'jm',
        label: '龙须面'
    }
],
#  :isSimpleArray="true"    简单数组          :isSimpleArray="false"  //json数组
```
