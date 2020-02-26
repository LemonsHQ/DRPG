const { Client, Attachment, RichEmbed } = require('discord.js');
global.Discord = require('discord.js');
global.client = new Discord.Client();
const xp = require('./code/xpl.js');
const fs = require("fs");
let db = JSON.parse(fs.readFileSync("./code/storage/xp.json", "utf8"));


client.setMaxListeners(0)



if(xp && Client){
   		 xp.code();
    		console.log('Xp system loaded');
}

//BOT_TOKEN is the Client Secret

client.once('ready', () => {
	console.log('Bot intitialized');
});

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'Summons, Type .help',
	    type: "Listening"
        }
});

//xp system
	
client.on('message', (message, user) => {
if (message.author.bot) return;
let xpAdd= Math.floor(Math.random() * 7)+8;

});
	

client.login(process.env.BOT_TOKEN);
