var mqtt = require('mqtt')
var client  = mqtt.connect('tcp://192.168.43.4')

client.on('connect', function () {
    console.log("connected")
    client.subscribe('myTopic')
})
client.on('message', function (topic, message) {
    context = message.toString();
    console.log(context)
})