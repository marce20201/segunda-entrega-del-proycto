import mongoose from 'mongoose'
import config from '../config.js'

const { protocol, user, pass, host, database, params } = config.mongo
const URI = `${protocol}://${user}:${pass}@${host}/${database}?${params}`
await mongoose.connect(URI)

class MongoContainer {
  constructor(collection, schema) {
    this.model = mongoose.model(collection, new mongoose.Schema(schema))
  }

  async getAll() {
    const items = await this.model.find({})
    return items
  }

  async getById(id) {
    const item = await this.model.findById(id)
    if (!item) throw new Error('Item not found')
    return item
  }

  async save(data) {
    const { _id } = await this.model.create(data)
    return _id
  }

  async update(id, data) {
    const item = await this.model.findByIdAndUpdate(id, data)
    if (!item) throw new Error('Item not found')
  }

  async delete(id) {
    const item = await this.model.findByIdAndDelete(id)
    if (!item) throw new Error('Item not found')
  }

  async deleteAll() {
    await this.model.deleteMany({})
  }
}

export default MongoContainer