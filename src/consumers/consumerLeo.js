const { Kafka } = require("kafkajs")
const ITopicList = require("../interface/ITopicList")


const clientId = "Elegibilidade"
const brokers = ["localhost:9092"]


const kafka = new Kafka({clientId, brokers})


const consumer = kafka.consumer({groupId: clientId})

const consumeLeo = async () => {
    await consumer.connect()
    await consumer.subscribe({topics: [ITopicList.pr, ITopicList.card, ITopicList.test, ITopicList.deploy], fromBeginning: true})
    await consumer.run({
        eachMessage: ({topic, partition, message}) => {
            const prefix = `${topic} - ${partition}`
            console.log(`${prefix} recebemos a mensagem: ${message.value}`)
        }
    })
}

module.exports = consumeLeo