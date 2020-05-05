import Vue from 'vue'
import App from './App.vue'

import Category from './model/CateEnum'
import ItemData from './model/ItemData'
import ActionHelper from './store/ActionHelper'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

// 测试创建笔记项
let item1 = new ItemData(-1, Category.Study, 'title', 'this is content')
console.log(item1)

let ah = new ActionHelper()
// 测试新增笔记
// item1.id = ah.add(item1)
// console.log(ah.memoList)

// 测试修改笔记
// let item = new ItemData(2, Category.Life, 'life', 'new life')
// ah.edit(item)
// console.log(ah.memoList)

// 测试删除笔记
// ah.remove(1)
// console.log(ah.memoList)