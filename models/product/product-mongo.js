import DB from '../../containers/mongodb.js'

export default class ProductMongo extends DB {
  constructor() {
    super('products', {
      name: String,
      description: String,
      code: String,
      image: String,
      price: Number,
      stock: { type: Number, default: 0 },
      timestamp: { type: Number, default: Date.now() }
    })
  }
}