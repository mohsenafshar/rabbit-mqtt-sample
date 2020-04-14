var mqtt = require('mqtt');
// var client  = mqtt.connect('tcp://mqtt.eclipse.org:1883');
var client  = mqtt.connect("tcp://mqtt.mohsenafshar.ir",{clientId: 'bgtestnodejs', protocolId: 'MQIsdp', protocolVersion: 3, connectTimeout:1000, debug:true});


console.log("Start");

client.on('connect', function () {
    console.log("connected");
    client.subscribe('exampleAndroidTopic', function (err) {
        if (!err) {
            client.publish('exampleAndroidTopic', 'Hello mqtt')
            console.log("published");
        } else {
            console.log(err);
        }
    })
});

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString());
    // client.end()
});