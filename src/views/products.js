import { Router } from "express";
import { productsController } from "../controllers/products.controller.js";
const router = new Router()

router.get("/all", async(req, res)=>{
    const response = await productsController.getAll()
    res.send(response)
})
router.post("/all", async(req, res)=>{
    const {data} = req.body
    const response = await productsController.sendProduct(data)
    res.send(response)
})
export default router