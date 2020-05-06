<template>
  <div id="memos" class="container">
    <memo-item v-for="item in filterMemo()" :key="item.id" :memo="item">
      {{ item.title }} - 
    </memo-item>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ItemData from '../model/ItemData'
import MemoItem from './MemoItem.vue'

@Component({
  components: {
    MemoItem
  }
})


export default class ItemList extends Vue {
  memoArr: Array<ItemData> = this.$store.state.aHelper.memoList

  filterMemo () {
    if(this.$store.state.filterCateId === -1) {
      return this.memoArr
    }
    else {
      return this.memoArr.filter((ele: any) => {
        return ele.categoryId === this.$store.state.filterCateId
      })
    }
  }
}

</script>