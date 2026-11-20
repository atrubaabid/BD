const { enquiryModal } = require("../../Model/modal");



// EnquryInsert
let EnquryInsert = (req, res) => {
    let { name, email, phone, message } = req.body;
    let user = new enquiryModal({
        name,
        email,
        phone,
        message
    })

    user.save().then(() => {
        res.send({ status: 1, msg: "Enquiry saved successfully" })
    }).catch((err) => {
        res.send({ status: 0, msg: "Error while saving enquiry", error: err })
    })
}

// EnquiryList
let EnquiryList = async (req, res) => {
    let enquiryData = await enquiryModal.find()
    res.send({ status: 1, msg: "Enquiry List", data: enquiryData })
}


// EnquiryDelete
let EnquiryDelete = async (req, res) => {
    let { id } = req.params;
    let deleteData = await enquiryModal.deleteOne({ _id: id })
    res.send({ status: 1, msg: "deleted", res: deleteData })
}

// EnquiryUpdate
let EnquiryUpdate = async (req, res) => {
    let { id } = req.params;
    let { name, email, phone, message } = req.body;
    let user = {
        name,
        email,
        phone,
        message
    }

    let updateData = await enquiryModal.updateOne({ _id: id }, user)

    res.send({ status: 1, msg: "Updated", res: updateData })


}


module.exports = { EnquryInsert, EnquiryList, EnquiryDelete, EnquiryUpdate }



