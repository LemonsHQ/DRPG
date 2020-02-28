const { Client, Attachment, RichEmbed } = require('discord.js');
global.Discord = require('discord.js');
global.client = new Discord.Client();
const config = require('./config.json');

	
const fs = require("fs");
const db = JSON.parse(fs.readFileSync("./code/storage/xp.json", "utf8"));


client.setMaxListeners(0)

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


//xp system
client.on('message', (message, user) => {
if (message.author.bot) return; // ignore bots
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const cmd = args.shift().toLowerCase();	
const memberInfo = db[member.id]
const userInfo = db[message.author.id];
const member = message.mentions.members.first();

const embed2 = new Discord.RichEmbed()
        .setColor(0x4286f4)
        .addField("Level", memberInfo.level)
        .addField("XP", memberInfo.xp+"/100")	

const embed = new Discord.RichEmbed()
        .setColor(0x4286f4)
        .addField("Level", userInfo.level)
        .addField("XP", userInfo.xp+"/100");	
	

		
    db[message.author.id].xp++
	
	
    // if the user is not on db add the user and change his values to 0
    if (!db[message.author.id]) db[message.author.id] = {
        xp: 0,
        level: 0
    }
	
    //xp level up

    if(userInfo.xp > 100) {
        userInfo.level++
        userInfo.xp = 0
        message.reply("Congratulations, you leveled up");
    }
	
    //commands
	
    if(cmd === "info") {
     if(!member) return message.channel.sendEmbed(embed)
     message.channel.sendEmbed(embed2);
    }

    fs.writeFile("./code/storage/xp.json", JSON.stringify(db), (x) => {
        if (x) console.error(x)
    	})
    });
});


