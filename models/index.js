const { default: CartModel } = await import(`../models/cart/cart-${process.env.DB}.js`)
const { default: ProductModel } = await import(`../models/product/product-${process.env.DB}.js`)

export const cart = new CartModel()
export const product = new ProductModel()

export default {
  cart,
  product
}