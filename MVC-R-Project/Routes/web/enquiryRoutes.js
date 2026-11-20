const express = require("express")
let enquiryRoutes = express.Router();
const { EnquryInsert, EnquiryList, EnquiryDelete, EnquiryUpdate } = require("./MVC-R-Project/Controller/web/userEnquiryController");


// 5. Post API
enquiryRoutes.post('/user-insert', EnquryInsert)

// 6. GET API
enquiryRoutes.get('/user-list', EnquiryList)

// 7. DELETE API
enquiryRoutes.delete('/user-delete/:id', EnquiryDelete)

// 8. UPDATE API
enquiryRoutes.put('/user-update/:id', EnquiryUpdate)

module.exports = { enquiryRoutes }