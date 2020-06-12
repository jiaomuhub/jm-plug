<template>
  <div>
    <span v-for="(item,index) in dataList">
      <input type="radio"
            class="radio"
            name="n"
            :id="index+1"
            :disabled="disabled"
            :checked="item[valueKey] === value"
            @change="handleChange"
            :value="item[valueKey]"
            hidden>
      <label :for="index+1">{{item[label]}}</label>
    </span>
  </div>
</template>

<script>
export default {
    name: 'JmRadio',
    data() {
        return {}
    },
    props: {
        label: [String, Number],
        valueKey: [String, Number],
        value: [Boolean, String, Number],
        disabled: {
            type: Boolean,
            default: false
        },
        dataList: {
            type: Array
        },
    },
    methods: {
        handleChange(evt) {
            this.$emit('search', evt.target.value)
            this.$emit('searchName', evt.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/common.scss";
.radio + label {
    position: relative;
    display: inline-block;
    z-index: 999;
    width: auto;
    height: 25px;
    padding: 3px 29px;
}

.radio + label:before {
    content: '';
    color: #fff;
    width: 18px;
    height: 18px;
    background: #999;
    border-radius: 15px;
    position: absolute;
    top: 5px;
    left: 4px;
    display: block;
    box-shadow: 0px 0px 3px #c9baba;
}
.radio:checked + label:before {
    content: '';
    @include bc_primary($color-primary);
}
.radio + label:after {
    content: attr(title);
    width: 6px;
    height: 6px;
    display: block;
    border: 3px solid #f7f9f9;
    position: absolute;
    top: 8px;
    left: 7px;
    border-radius: 7px;
    background: #999;
    box-shadow: 0px 0px 3px #f2ebeb;
}
.radio:checked + label:after {
    @include bc_primary($color-primary);
}
</style>


