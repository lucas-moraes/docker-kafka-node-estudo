const {Kafka} = require("kafkajs")
const ITopicList = require("../interface/ITopicList")


const clientId = "Elegibilidade"
const brokers = ["localhost:9092"]


const kafka = new Kafka({clientId, brokers})

const producer = kafka.producer()

const produceGreg = async () => {
    await producer.connect()
    let i=1

    setInterval(async () => {
        try {
            await producer.send({
                topic: ITopicList.pr,
                messages: [{
                    key: String(i),
                    value: "E-mail do Greg nº " + i,
                    partition: 0
                }]
            })
            console.log("Greg mandou o e-mail nº: ", i)
            i++
        } catch (error) {
            console.error("Deu erro no Greg" + error)
        }
    }, 7000);
}

module.exports = produceGreg