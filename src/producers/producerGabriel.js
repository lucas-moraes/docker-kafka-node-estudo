const {Kafka} = require("kafkajs")
const ITopicList = require("../interface/ITopicList")


const clientId = "Elegibilidade"
const brokers = ["localhost:9092"]


const kafka = new Kafka({clientId, brokers})

const producer = kafka.producer()

const produceGabriel = async () => {
    await producer.connect()
    let i=1

    setInterval(async () => {
        try {
            await producer.send({
                topic: ITopicList.test,
                messages: [{
                    key: String(i),
                    value: "E-mail do Gabriel nº " + i
                }]
            })
            console.log("Gabriel mandou o e-mail nº: ", i)
            i++
        } catch (error) {
            console.error("Deu erro no Gabriel" + error)
        }
    }, 7000);
}

module.exports = produceGabriel