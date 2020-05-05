<template>
  <div id="app">
    <menu-bar></menu-bar>
    <item-list></item-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MenuBar from './components/MenuBar.vue'
import ItemList from './components/ItemList.vue'

@Component({
  components: {
    MenuBar,
    ItemList
  },
})
export default class App extends Vue {}
</script>

<style>
</style>
