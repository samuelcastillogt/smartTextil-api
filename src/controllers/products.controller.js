import { dataService } from "../models/localData.js"

class ProductsController{
    async getAll(){
        console.log("kskkks")
        const response = await dataService.getData()
        console.log(response)
        return response
    }
}
export const productsController = new ProductsController()
