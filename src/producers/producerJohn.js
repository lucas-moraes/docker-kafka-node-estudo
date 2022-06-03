const {Kafka} = require("kafkajs")
const ITopicList = require("../interface/ITopicList")


const clientId = "Elegibilidade"
const brokers = ["localhost:9092"]


const kafka = new Kafka({clientId, brokers})

const producer = kafka.producer()

const produceJohn = async () => {
    await producer.connect()
    let i=1

    setInterval(async () => {
        try {
            await producer.send({
                topic: ITopicList.pr,
                messages: [{
                    key: String(i),
                    value: "E-mail do John nº " + i,
                    partition: 1
                }]
            })
            console.log("John mandou o e-mail nº: ", i)
            i++
        } catch (error) {
            console.error("Deu erro no John " + error)
        }
    }, 7000);
}

module.exports = produceJohn