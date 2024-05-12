const { productsFetch } = require("./products.services")

module.exports = {
    productsConroller: (req, res) => {
        productsFetch(req, res)    
    }
}