const {Kafka} = require("kafkajs")
const ITopicList = require("../interface/ITopicList")


const clientId = "Elegibilidade"
const brokers = ["localhost:9092"]


const kafka = new Kafka({clientId, brokers})

const producer = kafka.producer()

const produceKarina = async () => {
    await producer.connect()
    let i=1

    setInterval(async () => {
        try {
            await producer.send({
                topic: ITopicList.card,
                messages: [{
                    key: String(i),
                    value: "E-mail da karina nº " + i
                }]
            })
            console.log("Karina mandou o e-mail nº: ", i)
            i++
        } catch (error) {
            console.error("Deu erro na Karina " + error)
        }
    }, 7000);
}

module.exports = produceKarina