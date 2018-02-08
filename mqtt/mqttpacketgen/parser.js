var mqtt = require('mqtt-packet')
var parser = mqtt.parser()

// Synchronously emits all the parsed packets
parser.on('packet', function(packet) {
    console.log(packet)

})

parser.parse(new Buffer([
            0x10, 0x18, 0x0, 0x4, 0x4d, 0x51, 0x54, 0x54, 0x4, 0x2, 0x0, 0xf, 0x0, 0xc, 0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x5f, 0x74, 0x65, 0x73, 0x74, 0x31
        ])