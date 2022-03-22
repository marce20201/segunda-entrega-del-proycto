import DB from '../../containers/sql.js'

export default class ProductMySQL extends DB {
  constructor() {
    super('products')
  }
}