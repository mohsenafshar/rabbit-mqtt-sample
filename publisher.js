var mqtt = require('mqtt');
// var client  = mqtt.connect('tcp://192.168.1.190:1883');
var client  = mqtt.connect("tcp://mqtt.eclipse.org",{clientId: 'bgtestnodejs', protocolId: 'MQIsdp', protocolVersion: 3, connectTimeout:1000, debug:true});

client.on('connect', function () {
    setInterval(function() {
        client.publish('exampleAndroidTopic', 'Hello mqtt 1');
        console.log('Message Sent');
    }, 5000);
});