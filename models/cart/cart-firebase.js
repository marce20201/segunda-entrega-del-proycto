import DB from '../../containers/firebase.js'

export default class CartFirebase extends DB {
  constructor() {
    super('carts')
  }
}