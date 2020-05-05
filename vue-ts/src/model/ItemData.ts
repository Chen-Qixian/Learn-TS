import Category from './CateEnum'
/**
 * 保存一篇笔记的数据
 */
class ItemData {
  id: number
  categoryId: Category
  title: string
  content: string
  createTime: string


  constructor (
    id: number = -1,
    categoryId: Category = Category.Work,
    title: string = '',
    content: string = ''
  ) {
    this.id = id
    this.categoryId = categoryId
    this.title = title
    this.content = content
    this.createTime = this.toSelfDataStr(Date.now())
  }
  // 获取格式化日期字符串
  toSelfDataStr(timeSpan: number): string {
    let date = new Date(timeSpan)
    let str = date.getFullYear()
            + '-' + (date.getMonth()+1) 
            + '-' + date.getDate() 
            + ' ' + date.getHours() 
            + ':' + date.getMinutes()
    return str
  }
}

export default ItemData