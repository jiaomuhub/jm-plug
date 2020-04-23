/*
 * @Author: jm 
 * @Email: jiaomuyx@163.com 
 * @Date: 2020-04-01 15:49:13 
 * @Last Modified by:  jiaomu
 * @Last Modified time: 2020-04-01 15:49:13 
 * @Description: File desctiption 
 */

import MoorHelloWorld from './moor-hello-world'

MoorHelloWorld.install = Vue => Vue.component(MoorHelloWorld.name, MoorHelloWorld);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MoorHelloWorld);
}

export default MoorHelloWorld