<template>
    <div id="app">
        <!-- <div class="Jm-item">
      <label>Title:</label>
      <jm :color="color" :msg="msg"></jm-hello-world>
    </div> -->

        <div class="Jm-item">
            <label>Button:</label>
            <Jm-button class="Jm-btn"
                       @click="onClick">确定</Jm-button>
            <Jm-button class="Jm-btn"
                       @click="onClick"
                       bgcolor="#409eff"
                       color="#fff">确定</Jm-button>
            <Jm-button class="Jm-btn"
                       @click="onClick"
                       bgcolor="#67c23a"
                       color="#fff">成功</Jm-button>
            <Jm-button class="Jm-btn"
                       @click="onClick"
                       bgcolor="#e6a23c"
                       color="#fff">警告</Jm-button>
            <Jm-button class="Jm-btn"
                       @click="onClick"
                       bgcolor="#f56c6c"
                       color="#fff">危险</Jm-button>
        </div>

        <div class="Jm-item">
            <label>Select: </label>
            <Jm-select class="Jm-select"
                       label="label"
                       value="value"
                       v-model="selectValue"
                       :options="options">
            </Jm-select>
        </div>

        <div class="Jm-item">
            <label>Input: </label>
            <Jm-input v-model="input1"
                      placeholder="请输入信息">
            </Jm-input>

            <Jm-input v-model="input2"
                      placeholder="请输入信息">
            </Jm-input>

            <Jm-input placeholder="输入框禁用"
                      :disabled="inputDisabled">
            </Jm-input>
        </div>

        <div class="Jm-item">
            <label>Switch: </label>

            <Jm-switch v-model="lightSwitch">开关(开):</Jm-switch>

            <Jm-switch v-model="switchLight">开关(关):</Jm-switch>
        </div>

        <div class="Jm-item">
            <label>autoSearch: </label>
            <Jm-Auto-Search class="Jm-btn"
                            @click="openComfirm"
                            :searchWidth="250"
                            :searchHeight="34"
                            v-model="searchVal"
                            :searchList="searchList1"
                            :isSimpleArray="false"
                            @select="v=>searchVal=v"
                            @selectName="v=>searchVal=v">
            </Jm-Auto-Search>
            <!-- :isSimpleArray="true"    简单数组          :isSimpleArray="false"  //json数组-->
        </div>

        <div class="Jm-item">
            <Jm-button class="Jm-btn"
                       @click="openComfirm">comfirm弹出框</Jm-button>
        </div>
        <Jm-button class="Jm-btn"
                   @click="handlePrint">打印选项值</Jm-button>
        <Jm-comfirm :confirmModalOptions="confirmOptions"
                    ref="myConfirm"></Jm-comfirm>
                    
        <Jm-button class="Jm-btn"
                   @click="getList">滚动</Jm-button>
        <!-- <jm-scoll :on-refresh="onRefresh"
                  :on-infinite="onInfinite">
            <ul>
                <li v-for="(item,index) in listdata">{{item.name}}</li>
                <li v-for="(item,index) in downdata">{{item.name}}</li>
            </ul>
        </jm-scoll> -->
        <Jm-marquee :marqueeList="marqueeList">消息滚动</Jm-marquee>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            // HelloWorld
            msg: 'Welcome to Jm UI!',
            color: 'red',
            // Select
            selectValue: '',
            options: [
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
                    value: '选项4',
                    label: '龙须面'
                }
            ],
            // input
            input1: '',
            input2: '这是默认值',
            inputDisabled: true,
            // switch
            lightSwitch: false,
            switchLight: true,
            // comfirm
            confirmOptions: {},
            // autosearch
            searchVal: '',
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
            // 加载
            counter: 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
            num: 15, // 一次显示多少条
            pageStart: 0, // 开始页数
            pageEnd: 0, // 结束页数
            listdata: [], // 下拉更新数据存放数组
            downdata: [], // 上拉更多的数据存放数组
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
    },
    methods: {
        // getList() {
        //     let vm = this
        //     vm.$http
        //         .get(
        //             'https://api.github.com/repos/typecho-fans/plugins/contents/'
        //         )
        //         .then(
        //             response => {
        //                 vm.listdata = response.data.slice(0, 15)
        //             },
        //             response => {
        //                 console.log('error')
        //             }
        //         )
        // },
        // onRefresh(done) {
        //     this.getList()

        //     done() // call done
        // },
        // onInfinite(done) {
        //     let vm = this
        //     vm.$http
        //         .get(
        //             'https://api.github.com/repos/typecho-fans/plugins/contents/'
        //         )
        //         .then(
        //             response => {
        //                 vm.counter++
        //                 vm.pageEnd = vm.num * vm.counter
        //                 vm.pageStart = vm.pageEnd - vm.num
        //                 let arr = response.data
        //                 let i = vm.pageStart
        //                 let end = vm.pageEnd
        //                 for (; i < end; i++) {
        //                     let obj = {}
        //                     obj['name'] = arr[i].name
        //                     vm.downdata.push(obj)
        //                     if (i + 1 >= response.data.length) {
        //                         this.$el.querySelector(
        //                             '.load-more'
        //                         ).style.display = 'none'
        //                         return
        //                     }
        //                 }
        //                 done() // call done
        //             },
        //             response => {
        //                 console.log('error')
        //             }
        //         )
        // },
        openComfirm(val) {
            this.$refs.myConfirm.showModel()
            this.confirmOptions = {
                type: 'warning', //warning
                title: '提示', //提示
                message: 'are you ok?', //""
                color: '#66b1ff',
                btnCancelText: '取消', //取消
                btnSubmitText: '确定', //确定
                btnSubmitFunction: function() {
                    console.log('ok')
                },
                btnCancelFunction: function() {
                    console.log('no')
                }
            }
        },
        onClick: function(e) {
            console.log('click', e)
        },
        handlePrint() {
            console.log('selectValue', this.selectValue)
            console.log('input1:', this.input1)
            console.log('input2:', this.input2)
            console.log('autoSelect:', this.searchVal)
        }
    },
    watch: {
        lightSwitch: newValue => console.log('开关：', newValue)
    }
}
</script>

<style lang="scss">
.Jm-select,
.Jm-btn,
.Jm-switch,
.Jm-input {
    margin: 10px 6px;
}
.Jm-item {
    display: flex;
    align-items: center;
    height: 50px;
    label {
        width: 100px;
        display: inline-block;
    }
}
</style>
