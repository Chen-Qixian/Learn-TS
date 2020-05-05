import Vue from 'vue'
import App from './App.vue'
import Category from './model/CateEnum'
import ItemData from './model/ItemData'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

let item1 = new ItemData(1, Category.Study, 'title', 'this is content')
console.log(item1)
