const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 client.user.setPresence({ game: { name: 'd#help :: DynaBot 1.2', type: 0 } });
 });

client.on('message', msg => {
    if(msg.content === 'd#staff'){
      msg.channel.sendMessage("aakare#4977 - Owner :: Cleyvi#6616 - Dev / Trusted Reseller :: Sigge#2146 - Dev :: Apply for staff (wE nEEd dOES) dm aakare#4977");
      console.log('executed "staff"');
    }
    if (msg.content === 'd#ping') {
    msg.reply('ping! :ping_pong:');
    console.log('executed "ping"');
    }
    if(msg.content === 'd#price'){
    msg.reply('7€ - PayPal / Litecoin / Ethereum :: d#giftcards for giftcard prices');
    console.log('executed "price"');
    }
    if(msg.content === 'd#giftcards'){
    msg.reply('10€ - Steam');
    console.log('executed "giftcards"');
    }
    if(msg.content === 'd#help'){
      console.log('executed "help"');
        msg.channel.send({embed: {
            color: 3447003,
            fields: [{
                name: "d#help",
                value: "Help message."
              },
              {
                name: "d#ping",
                value: "ping! :ping_pong:"
              },
              {
                name: "d#price :: d#giftcards",
                value: "DynaSploit pricing (d#price - rocketr prices :: d#giftcards - giftcard prices)"
              },
              {
                name: "d#staff",
                value: "Shows staff"
              }
            ],
          }
        });
    }
 });

client.login('youthot');
