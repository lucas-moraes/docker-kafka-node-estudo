const consumerSid = require("../../src/consumers/consumerSid")

consumerSid().catch((err)=> {
    console.error("error in consumer: ", err)
})
