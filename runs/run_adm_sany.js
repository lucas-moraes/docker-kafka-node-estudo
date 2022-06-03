const adminSany = require("../src/admSany.js")

adminSany().catch((err) => {
    console.error("error in consumer: ", err)
})