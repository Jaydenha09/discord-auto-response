const webpanel = require('./webpanel.js');
const Discord = require('discord.js-selfbot-v13');

//connect mysql database
mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'HOST',
    port: 'PORT',
    user: 'USER',
    password: 'PASSWORD'
});

connection.connect(function(err){
    if(err) throw err;
    console.log('database connected succeed!');
});
//end

//discord auto respone 
const client = new Discord.Client({
  checkUpdate: false,
  syncStatus: false
});
const token = process.env['token']
const replyMessage = process.env['replyMessage']

let isEnabled = true

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
  if (isEnabled) {
    if (msg.author.bot) return;
    if (msg.mentions.has(client.user.id)) {
      msg.reply(`${replyMessage}`);
    }
  }

});

client.login(token);

//end of discord auto respond code
