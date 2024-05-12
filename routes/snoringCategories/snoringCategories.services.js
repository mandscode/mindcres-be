const http = require('http');
const fs = require('fs');
const path = require('path');


module.exports = {
    snoringCategoriesFetch: function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        
        // Load the products.json file
        fs.readFile(path.join(__dirname, '..','json', 'snoringCategories.json'), (err, data) => {
            if (err) {
                // If there's an error reading the file, return an error response
                res.writeHead(500);
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
                return;
            }

            // If successful, return the JSON data
            res.writeHead(200);
            res.end(data);
        });
    }
}