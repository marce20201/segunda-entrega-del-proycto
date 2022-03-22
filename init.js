import fs from 'fs'

const dirs = ['./_db/', './_db/file/', './_db/sqlite/']

for (const dir of dirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}

fs.appendFileSync('./_db/file/products.json', JSON.stringify([]))
fs.appendFileSync('./_db/file/carts.json', JSON.stringify([]))
fs.appendFileSync('./_db/sqlite/ecommerce.sqlite', '')