import JmButton from './packages/button/index.js';
import JmSelect from './packages/select/index.js';
import JmInput from './packages/input/index.js';
import JmSwitch from './packages/switch/index.js';
import JmComfirm from './packages/comfirm/index.js';
import JmAutoSearch from './packages/autoSearch/index.js';

const components = [
  JmButton,
  JmSelect,
  JmInput,
  JmSwitch,
  JmComfirm,
  JmAutoSearch
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  JmButton,
  JmSelect,
  JmInput,
  JmSwitch,
  JmComfirm,
  JmAutoSearch
}
