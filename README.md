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

## 用法：
### main.js
`import JmPlug from 'jm-plug'`
`Vue.use(JmPlug)`

### 页面引入comfirm组件
`this.$refs.myConfirm.showModel();  
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
}`  
`<Jm-comfirm :confirmModalOptions="confirmOptions" ref="myConfirm"></Jm-comfirm>`
