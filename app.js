import 'dotenv/config'
import express from 'express'
import methodNotImplemented from './middlewares/methodNotImplemented.js'
import productRoutes from './routes/product.routes.js'
import cartRoutes from './routes/cart.routes.js'

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/productos', productRoutes)
app.use('/api/carrito', cartRoutes)

app.use(methodNotImplemented)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
