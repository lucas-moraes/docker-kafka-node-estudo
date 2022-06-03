const {Kafka} = require("kafkajs")
const ITopicList = require( "./interface/ITopicList" )


const clientId = "Elegibilidade"
const brokers = ["localhost:9092"]

const kafka = new Kafka({clientId, brokers})

const admin = kafka.admin()

const adminSany = async () => {
    await admin.connect()
    
    //await admin.deleteTopics({topics: [ ITopicList.pr, ITopicList.card, ITopicList.test, ITopicList.deploy ]})

    await admin.createTopics({
        topics: [
            {
                topic: ITopicList.pr,
                numPartitions: 2, // Part 0 - Greg, Part 1 - John
            },{
                topic: ITopicList.card,
                numPartitions: 1
            }, {
                topic: ITopicList.test,
                numPartitions:1
            }, {
                topic: ITopicList.deploy,
                numPartitions: 1
            }
        ]
    })

    setInterval(async () => {
        try {
            await admin.listTopics().then((res) => console.log({"Topic List": res}))
            await admin.listGroups().then((res) => console.log({"Groups List": res.groups}))
        } catch (error) {
            console.error("ADM erro" + error)
        }
    }, 5000);


}

module.exports = adminSany
