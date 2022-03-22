import DB from '../../containers/sql.js'

export default class CartMySQL extends DB {
  constructor() {
    super('carts')
  }

  async getById(id) {
    const item = await super.getById(id)
    item.products = JSON.parse(item.products)
    return item
  }

  async save(data) {
    const id = await super.save({ products: JSON.stringify(data.products) })
    return id
  }

  async update(id, data) {
    await super.update(id, { products: JSON.stringify(data.products) })
  }
}