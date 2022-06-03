const {Kafka} = require("kafkajs")
const ITopicList = require("../interface/ITopicList")


const clientId = "Elegibilidade"
const brokers = ["localhost:9092"]


const kafka = new Kafka({clientId, brokers})

const producer = kafka.producer()

const produceSany = async () => {
    await producer.connect()
    let i=1

    setInterval(async () => {
        try {
            await producer.sendBatch({
                topicMessages: [
                    {
                        topic: ITopicList.pr,
                        messages: [{
                            key: String(i),
                            value: "E-mail do Sany nº " + i
                        }]
                    },
                    {
                        topic: ITopicList.card,
                        messages: [{
                            key: String(i),
                            value: "E-mail do Sany nº " + i
                        }]
                    },
                    {
                        topic: ITopicList.test,
                        messages: [{
                            key: String(i),
                            value: "E-mail do Sany nº " + i
                        }]
                    },
                    {
                        topic: ITopicList.deploy,
                        messages: [{
                            key: String(i),
                            value: "E-mail do Sany nº " + i
                        }]
                    }
                ]
            })
            console.log("Sany mandou o e-mail nº: ", i)
            i++
        } catch (error) {
            console.error("Deu erro no Sany" + error)
        }
    }, 7000);
}

module.exports = produceSany