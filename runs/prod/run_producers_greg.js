const producerGreg = require("../../src/producers/producerGreg")

producerGreg().catch((err) => {
    console.error("error in consumer: ", err)
})

