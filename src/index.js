import JmButton from './packages/button/index.js';
import JmSelect from './packages/select/index.js';
import JmInput from './packages/input/index.js';
import JmSwitch from './packages/switch/index.js';
import JmComfirm from './packages/comfirm/index.js';
import JmAutoSearch from './packages/autoSearch/index.js';
import JmScoll from './packages/scoll/index.js';
import JmMarquee from './packages/marquee/index.js';
import JmRadio from './packages/radio/index.js';
// 指令
import jmClickoutside from './packages/directives/clickoutside.js';
import jmDebounce from './packages/directives/debounce.js';

const components = [
  JmButton,
  JmSelect,
  JmInput,
  JmSwitch,
  JmComfirm,
  JmAutoSearch,
  JmScoll,
  JmMarquee,
  JmRadio
]

const directives = [
  jmClickoutside,jmDebounce
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
  directives.map(directive => {
    Vue.directive(directive.name, directive);
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
  JmAutoSearch,
  JmScoll,
  JmMarquee,
  JmRadio,
  // 指令
  jmClickoutside,
  jmDebounce
}
