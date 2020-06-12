<template>
  <button
    class="jm-button"
    @click="handleClick"
    :disabled="buttonDisabled"
    :autofocus="autofocus"
    :style="{backgroundColor: bgcolor, borderColor: bgcolor, color: color}">
    <img :src="icon" v-if="icon">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'JmButton',
  props: {
    buttonDisabled: Boolean,
    autofocus: Boolean,
    icon: String,
    bgcolor: String,
    color: String
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes mymove
{
  0%   {box-shadow: 0 0 0 2px #ccc;}
  100% {box-shadow: 0 0 0 2px #fff;}
}
.jm-button {
  padding: 6px 20px;
  font-size: 14px;
  border-radius: 4px;
  outline: none;
  color: #666;
  cursor: pointer;
  border: 0;
}
.jm-button:active {
  animation: mymove 1s 1;
}
</style>

