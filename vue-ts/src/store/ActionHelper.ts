import DataHelper from './DataHelper'
import ItemData from '../model/ItemData'
import Category from '@/model/CateEnum'

class ActionHelper {
  // 数据处理
  dataHelper: DataHelper = new DataHelper('memoData', 'id')
  memoList: Array<ItemData>

  constructor () {
    this.memoList = this.readData()
  }
  // 读现有数据
  readData(): Array<ItemData> {
    let arrObj = this.dataHelper.readData()
    // obj转ItemData格式
    let arrItem = arrObj.map((ele: any) => {

      let item = new ItemData()

      item.id = ele.id
      item.categoryId = ele.categoryId
      item.title = ele.title
      item.content = ele.content
      item.createTime = ele.createTime

      return item
    })

    return arrItem
  }
  // 新增笔记
  add(item: ItemData): number {

    item.id = this.dataHelper.addData(item)
    this.memoList.push(item)
    this.dataHelper.saveData(this.memoList)

    return item.id
  }
  // 修改笔记
  edit(item: ItemData): void {
    let editItem: ItemData | undefined = this.memoList.find((ele: any) => {
      return ele.id === item.id
    })

    if(editItem) {

      editItem.categoryId = item.categoryId
      editItem.title = item.title
      editItem.content = item.content

      this.dataHelper.saveData(this.memoList)
    }
  }
  // 删除笔记
  remove(id: number): void {
    let removeIndex: number = this.memoList.findIndex((ele: any) => {
      return ele.id === id
    })

    if(removeIndex > -1) {
      this.memoList.splice(removeIndex, 1)
      
      this.dataHelper.saveData(this.memoList)
    }
  }
  // 获取分类名
  getCategoryName(cateId: Category): string {
    const arrName = ['工作', '生活', '学习']
    return arrName[cateId]
  }
}

export default ActionHelper