import DB from '../../containers/firebase.js'

export default class ProductFirebase extends DB {
  constructor() {
    super('products')
  }
}