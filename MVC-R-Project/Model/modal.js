// 3. Create a Schema
let userEnquireSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
})

// 4. Create a Model
const enquiryModal = mongoose.model('user', userEnquireSchema)


module.exports = {enquiryModal}