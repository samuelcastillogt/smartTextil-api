import { dataService } from "../models/localData.js"

class ProductsController{
    async getAll(){
    
        const response = await dataService.getData()
        console.log(response)
        return response
    }
    async sendProduct(data){
        return data
    }
}
export const productsController = new ProductsController()
