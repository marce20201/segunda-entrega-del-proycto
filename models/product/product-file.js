import DB from '../../containers/file.js'

export default class ProductFile extends DB {
  constructor() {
    super('products')
  }
}