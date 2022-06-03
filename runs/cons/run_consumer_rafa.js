const consumerRafa = require("../../src/consumers/consumerRafa")

consumerRafa().catch((err)=> {
    console.error("error in consumer: ", err)
})
