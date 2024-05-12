const { tabInfoFetch } = require("./tabInfo.services")

module.exports = {
    tabInfoConroller: (req, res) => {
        tabInfoFetch(req, res)    
    }
}