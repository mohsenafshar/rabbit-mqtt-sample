var amqp = require('amqplib/callback_api');

// amqp.connect('amqp://admin:44114231@mohsenafshar.ir:5672', function(error0, connection) {
// amqp.connect('amqp://mobile:4DMaqPqrs8r6y4S3@192.168.254.211:5672/mobile', function(error0, connection) {
amqp.connect('amqp://mobile:44114231@192.168.1.190:5672/mobile', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'hello';
        var msg = 'Hello world';
        var msg = process.argv.slice(2).join(' ') || "Hello World!";

        channel.assertQueue(queue, {
            durable: false
        });
        channel.sendToQueue(queue, Buffer.from(msg));
        console.log(" [x] Sent %s", msg);
    });
});