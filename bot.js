const { Client, Attachment, RichEmbed } = require('discord.js');
global.Discord = require('discord.js');
global.client = new Discord.Client();
const config = require('./config.json');
//const xp = require('./code/xpl.js');
const fs = require("fs");
let db = JSON.parse(fs.readFileSync("./code/storage/xp.json", "utf8"));


client.setMaxListeners(0)

client.login(process.env.BOT_TOKEN);

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
if (message.author.bot) return; // ignore bots

    // if the user is not on db add the user and change his values to 0
    if (!db[message.author.id]) db[message.author.id] = {
        xp: 0,
        level: 0
      };
    db[message.author.id].xp++;
    let userInfo = db[message.author.id];
    if(userInfo.xp > 100) {
        userInfo.level++
        userInfo.xp = 0
        message.reply("Congratulations, you leveled up")
    }
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd === "info") {
        let userInfo = db[message.author.id];
        let member = message.mentions.members.first();
        let embed = new Discord.RichEmbed()
        .setColor(0x4286f4)
        .addField("Level", userInfo.level)
        .addField("XP", userInfo.xp+"/100");
        if(!member) return message.channel.sendEmbed(embed)
        let memberInfo = db[member.id]
        let embed2 = new Discord.RichEmbed()
        .setColor(0x4286f4)
        .addField("Level", memberInfo.level)
        .addField("XP", memberInfo.xp+"/100")
        message.channel.sendEmbed(embed2)
    }
    fs.writeFile("./code/storage/xp.json", JSON.stringify(db), (x) => {
        if (x) console.error(x)
      });
});
	


