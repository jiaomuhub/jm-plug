<template>
    <div class="search-box" :style="{'width': (searchWidth)+'px','height':searchHeight+'px'}">
      <input
        ref="searchGoods"
        type="text"
        size="40"
        maxlength="40"
        @keyup="keyupSearch"
        v-model="inputval"
        :style="{'width': searchWidth+'px','height':searchHeight+'px'}"
        class="input-style"
        :disabled="disabled">
      <span :class="isshow?'input-icon-up':'input-icon-down'"
            :style="{'top': ((searchHeight/2)-4)+'px'}"></span>
      <div id='foraspcn'
           v-if="isshow"
           :style="{'width': (searchWidth)+'px'}">
        <ul>
          <li :style="{ background: fouce_li_num-1 == index?li_color_:li_color }"
              v-for="(item,index) in data_array"
              @click="clickItem(item,index)">
            {{item}}
          </li>
        </ul>
      </div>
    </div>

</template>
<script>
export default {
  name: 'JmAutoSearch',
  props: {
    searchList: {
      type: Array
    },
    isSimpleArray: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    searchWidth: null,
    searchHeight: null
  },
  data() {
    return {
      fouce_li_num: 0, //默认没有选择任何下拉内容
      width_: 300, //这里设置的是搜索框的宽度，目的为了与下面的列表宽度相同
      li_color: '#fff', //默认的下拉背景颜色
      li_color_: '#f5f7fa', //当下拉选项获取焦点后背景颜色
      isshow: false,
      inputval: null,
      data_array: []
    }
  },
  methods: {
    keyupSearch: function(event) {
      var keycode = event.keyCode;
      if(this.delkeycode(keycode))return;
      var key_ = event.key;//获取搜索值
      this.inputval = event.currentTarget.value
      var top_ = event.target.offsetTop;//获搜索框的顶部位移
      var left_ = event.target.offsetLeft;//获取搜索框的左边位移
      if(keycode==13){//enter search
        if(!this.isshow) {
          this.fouce_li_num = 0;
          this.$emit('select', this.inputval)
        }else{
          if(this.fouce_li_num>=0){
            this.inputval = this.data_array[this.fouce_li_num-1]
            this.fouce_li_num = 0;
            this.emitHandle()
            // this.$emit('select', this.inputval)
          }
        }
        this.isshow = false;
      }else if(keycode==40){//单击键盘向下按键
        this.fouce_li_num++;
        var li_allnum = this.data_array.length;
        if(this.fouce_li_num > li_allnum&&li_allnum!=0){//当下拉选择不为空时
          this.fouce_li_num=1;
          this.inputval = this.data_array[0]
        }else if(li_allnum==0){
          this.fouce_li_num--;return;
        }else{
          this.inputval = this.data_array[this.fouce_li_num-1]
        }
        console.log(this.fouce_li_num)
      }else if(keycode==38){//点击键盘向上按键
        this.fouce_li_num--;
        var li_allnum = this.data_array.length;
        if(this.fouce_li_num < 1 && li_allnum!=0){//当下拉选择不为空时
          this.fouce_li_num = li_allnum;
        }else if(li_allnum==0){
          this.fouce_li_num++;
          return;
        }
        this.inputval = this.data_array[this.fouce_li_num-1]
      }else{
        this.fouce_li_num = 1;
        this.data_array = []
        ///ajax调用 这里使用的是 测试内容
        this.ajax_demo(this.inputval);
      }
    },
    ajax_demo(val){
      var data_array = []
      if(this.isSimpleArray) { //一维数组
        var array = JSON.parse(JSON.stringify(this.searchList));
        data_array = array.filter((item) => {
          return item.indexOf(val)>-1
        })
        if(this.inputval) {
          data_array.unshift(this.inputval)
          this.isshow = true
        }else{
          this.isshow = false
        }
        this.data_array = data_array
      }else{ //json数组
        var array = JSON.parse(JSON.stringify(this.searchList));
        data_array = array.filter((item) => {
          return item.value.indexOf(val)>-1
        })
        data_array = data_array.map((item) => {
          return item.value
        })
        if(data_array.length>0) {
          this.isshow = true
        }else{
          this.isshow = false
        }
        this.data_array = data_array
      }
    },
    delkeycode(keycode){//去除了不必要的按键反应，当比如删除，f1 f2等按键时，则返回
      var array = new Array();
      array =[16,19,20,27,33,34,35,36,45,46,91,112,113,114,115,116,117,118,119,120,121,122,123,145,192];
      for(var i=0;i<array.length;i++){
        if(keycode==array[i]){return true;break;}
      }
      return false;
    },
    clickItem(data,index) {
      this.fouce_li_num = index + 1
      this.inputval = data
      this.emitHandle()
      // this.$emit('select', this.inputval)
      this.isshow = false
    },
    emitHandle() {
      if(this.isSimpleArray) {
        this.$emit('select', this.inputval)
      }else{
        for (var i=0;i<this.searchList.length;i++) {
          if(this.inputval == this.searchList[i].value) {
            this.$emit('select', this.searchList[i].value)
            this.$emit('selectName', this.searchList[i].label)
          }
        }
      }
    }
  },

  mounted() {

  },
  watch: {
  }
}
</script>
<style scoped>
  .search-box {
    display: inline-block;
    position: relative;
    vertical-align: middle;
  }
  .input-style {
    outline-style: none ;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 0 10px;
    vertical-align: top;
    box-sizing: border-box;
  }
  #foraspcn {
    background-color: #fff;
    border: 1px solid #e7eef1;
    position: relative;
    margin-top: 10px;
  }
  #foraspcn:before{
    box-sizing: content-box;
    width: 0px;
    height: 0px;
    position: absolute;
    top: -16px;;
    left:41px;
    padding:0;
    border-bottom:8px solid #FFFFFF;
    border-top:8px solid transparent;
    border-left:8px solid transparent;
    border-right:8px solid transparent;
    display: block;
    content:'';
    z-index: 12;
  }
  #foraspcn:after{
    box-sizing: content-box;
    width: 0px;
    height: 0px;
    position: absolute;
    top: -18px;;
    left:40px;
    padding:0;
    border-bottom:9px solid #e7eef1;
    border-top:9px solid transparent;
    border-left:9px solid transparent;
    border-right:9px solid transparent;
    display: block;
    content:'';
    z-index:10
  }
  #foraspcn ul {
    padding: 0;
    margin: 0;
  }
  #foraspcn li {
    list-style-type: none;
    padding: 8px 10px;
    line-height: 40px;
    height: 40px;
    cursor: pointer;
  }
  .input-icon-down {
    width: 0;
    height: 0;
    border-top: 8px solid #ccc;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    position: absolute;
    right: 10px;
  }
  .input-icon-up {
    width: 0;
    height: 0;
    border-bottom: 8px solid #ccc;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    position: absolute;
    right: 10px;
  }
</style>
