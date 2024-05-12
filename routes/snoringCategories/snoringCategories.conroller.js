const { snoringCategoriesFetch } = require("./snoringCategories.services")

module.exports = {
    snoringCategoriesConroller: (req, res) => {
        snoringCategoriesFetch(req, res)    
    }
}