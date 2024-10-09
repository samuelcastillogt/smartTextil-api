class DataService {
    async getData(){
        return([{
            id: 123,
            name: "Camisa",
            desc: "Camisa blanca",
            stock: 20,
            limit: 30,
            categorie: "Ropa"
        }])
    }
}
export const dataService = new DataService()