<template>
  <div class="moor-select"
    @click.stop="handleToggleMenu()">
    <span @click.stop="handleToggleMenu()"
      :class="{active: isShow}">{{(currentOption[label]?currentOption[label]:curOption[label]) || '请选择'}}
        <i class="caret"></i>
    </span>

    <input
      :value="value"
      v-on:input="changeValue">
    <ul v-show="isShow">
      <li v-for="option in options"
        :key="option[valueKey]"
        @click="handleSelect(option)">{{option[label]}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'JmSelect',
  props: {
    label: [String, Number],
    valueKey: [String, Number],
    value: [String, Number],
    currentOption: {
      type: Object,
      default: function () {
        return {}
      }
    },
    options: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {
      isShow: false,
      curOption: '',
    }
  },
  methods: {
    handleToggleMenu(flag) {
      this.isShow = flag === false ? false : !this.isShow;
    },
    hideMenu() {
      if (this.isShow === false) return;
      this.handleToggleMenu(false);
    },
    handleSelect(opts) {
      this.changeValue(opts[this.valueKey]);
      this.curOption = opts;
    },
    changeValue(value) {
      this.$emit('search', value);
      this.$emit('change', value);
    },
    handleBlur() {

    }
  },
  mounted() {
    document.addEventListener('click', this.hideMenu);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideMenu);
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/common.scss";
.moor-select {
  width: 200px;
  position: relative;
  font-size: 14px;
  display: inline-block;

  span {
    display: flex;
    align-items: center;
    width: 100%;
    height: 34px;
    line-height: 34px;
    border-radius: 4px;
    border: 1px solid #999;
    padding-left: 10px;
    box-sizing: border-box;
    color: #666;
    position: relative;

    .caret {
      width: 0;
      height: 0;
      border-left: 8px solid rgba(0, 0, 0, 0);
      border-right: 8px solid rgba(0, 0, 0, 0);
      border-top: 6px solid #999; 
      display: inline-block;
      position: absolute;
      right: 10px;
      transition: 200ms linear;
      transform: rotate(0);
    }

    &.active {
      // border-color: #409EFF;
      @include border_primary($color-primary);
      .caret {
        transform: rotate(-180deg);
      }
    }
  }

  input {
    outline: none;
    display: none;
  }
}
ul {
  border: 1px solid #eee;
  cursor: pointer;
  margin: 10px 0 0; 
  padding: 0px;
  border-radius: 4px;
  color: #666;
  position: absolute;
  top: 36px;
  left: 0;
  width: 100%;
  background-color: #fff; 
  z-index: 9999;

  &::before {
    width: 0;
    height: 0;
    content: '';
    display: inline-block;
    position: absolute;
    top: -9px;
    left: 10px;
    border-left: 10px solid rgba(0, 0, 0, 0);
    border-right: 10px solid rgba(0, 0, 0, 0);
    border-bottom: 8px solid #eee;
  }
}
li {
  list-style: none;
  line-height: 30px;
  padding-left: 10px;

  &:hover {
    background-color: #eee;
  }
}
</style>


