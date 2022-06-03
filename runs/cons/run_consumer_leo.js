const consumerLeo = require("../../src/consumers/consumerLeo")


consumerLeo().catch((err)=> {
    console.error("error in consumer: ", err)
})
