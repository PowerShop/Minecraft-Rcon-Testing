// Rcon for testing via minimal app

var Rcon = require('rcon');

var conn = new Rcon('your_ip', 25575, 'your_password');

conn.on('auth', function () {
    // Wait until authed before sending any commands

    console.log("Authenticated"); // Authenticated successfully
    console.log("Sending command: help") 
    conn.send("help"); // Send test command help
}).on('response', function (str) {
    console.log("Response: " + str);
}).on('error', function (err) {
    console.log("Error: " + err);
}).on('end', function () {
    console.log("Connection closed");
    process.exit();
});

conn.connect();

// connect() will return immediately... maybe na kub
