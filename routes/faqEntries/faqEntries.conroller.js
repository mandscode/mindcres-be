const { faqEntriesFetch } = require("./faqEntries.services")

module.exports = {
    faqEntriesConroller: (req, res) => {
        faqEntriesFetch(req, res)    
    }
}