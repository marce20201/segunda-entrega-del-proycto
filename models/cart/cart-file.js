import DB from '../../containers/file.js'

export default class CartFile extends DB {
  constructor() {
    super('carts')
  }
}