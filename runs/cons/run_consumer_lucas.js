const consumerLucas = require("../../src/consumers/consumerLucas")


consumerLucas().catch((err)=> {
    console.error("error in consumer: ", err)
})
