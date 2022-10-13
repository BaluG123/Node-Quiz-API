const mongoose=require('mongoose')
const CaScheme = new mongoose.Schema(
    {
        question:String,
        option1:String,
        option2:String,
        option3:String,
        option4:String,
        answer:String
    }
)

module.exports = mongoose.model("current affairs",CaScheme)