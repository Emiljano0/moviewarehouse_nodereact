const JOI = require("joi")

const arrayString = ["banana", "bacon", "kiwi"]
const arrayObjects = [{example: "example1"}, {example: "example2"}]
const userInput = { personalInfo: {
                        streetAddress: "IrfanTomini",
                        city: "Tirana",
                        state: "Al"
                        },
                    preferences: arrayObjects }

const personalInfoSchema = JOI.object().keys({
    streetAddress: JOI.string().trim().required(),
    city: JOI.string().trim().required(),
    state: JOI.string().trim().length(2).required()
})

const preferencesSchema = JOI.array().items(JOI.object().keys({
    example: JOI.string().required()
}))

const schema = JOI.object().keys({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema
})

JOI.validate(userInput, schema, (error, result)=>{
        if(error){
            console.log(error)
        } else {
            console.log(result)
        }
})






















