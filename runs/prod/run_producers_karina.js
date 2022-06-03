const produceKarina = require("../../src/producers/producerKarina")

produceKarina().catch((err) => {
    console.error("error in consumer: ", err)
})

