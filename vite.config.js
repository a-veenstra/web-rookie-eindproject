import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
        orders: resolve(__dirname, 'orders.html'),
        addProduct: resolve(__dirname, 'add-product.html'),
        editProduct: resolve(__dirname, 'edit-product.html'),
        shoppingCart: resolve(__dirname, 'shopping-cart.html'),
        orderConfirmation: resolve(__dirname, 'order-confirmation.html'),
      },
    },
  },
})