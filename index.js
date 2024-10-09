import Express from "express";
import cors from "cors";
import productsRoutes from "./src/views/products.js"

const app = Express()

const port = process.env.port ?? 3000
app.use(cors())
app.use("/", (req, res) => res.send("Hello World"))
app.use("/products", productsRoutes)

app.listen(port, ()=> console.log("server in port " + port))