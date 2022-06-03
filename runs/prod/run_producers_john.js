const produceJohn = require("../../src/producers/producerJohn")

produceJohn().catch((err) => {
    console.error("error in consumer: ", err)
})



