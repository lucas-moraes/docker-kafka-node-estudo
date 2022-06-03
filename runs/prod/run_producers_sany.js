const produceSany = require("../../src/producers/producerSany")

produceSany().catch((err) => {
    console.error("error in consumer: ", err)
})

