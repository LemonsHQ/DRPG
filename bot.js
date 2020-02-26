const { Client, Attachment, RichEmbed } = require('discord.js');
global.Discord = require('discord.js');
global.client = new Discord.Client();


const xp = require('./coders/xpsystem.js');
client.setMaxListeners(0)
if(xp && Client){
   		 xp.code();
    		console.log('Timer loaded');
}
client.login(process.env.BOT_TOKEN);
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
