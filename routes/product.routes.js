import { Router } from "express"
import controller from '../controllers/product.controller.js'
import onlyAdmin from "../middlewares/onlyAdmin.js"

const router = new Router()

router.get('/', controller.index)
router.get('/:id', controller.show)
router.post('/', onlyAdmin, controller.create)
router.put('/:id', onlyAdmin, controller.update)
router.delete('/:id', onlyAdmin, controller.delete)

export default router