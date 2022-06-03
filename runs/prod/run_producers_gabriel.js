const producerGabriel = require("../../src/producers/producerGabriel")

producerGabriel().catch((err) => {
    console.error("error in consumer: ", err)
})
