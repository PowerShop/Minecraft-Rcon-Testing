const Rcon = require('rcon');

async function testRcon() {
  const conn = new Rcon('your_ip', 25575, 'your_password');
  
  try {
    await conn.connect();

    // Wait until authed before sending any commands
    console.log("Authenticated"); // Authenticated successfully

    console.log("Sending command: help");
    const response = await conn.send("help"); // Send test command help
    console.log(`Response: ${response}`);
  } catch(err) {
    console.log(`Error: ${err}`);
  } finally {
    console.log("Connection closed");
    process.exit();
  }
}

testRcon(); // Call the function
