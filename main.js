const Discord = require('discord.js');

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = '/';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./bot commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./bot commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Bot online!');

});

client.on('message', message => {
    // makes sure command starts with '/', and makes sure command isn't written by the bot
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    // lets command have subcommands
    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();

    if (command === 'rules'){
        client.commands.get('rules').execute(message, args, Discord);
    
    } else if (command === 'hello'){
        client.commands.get('hello').execute(message, args);
   
    } else if (command === 'prefix'){
        client.commands.get('prefix').execute(message, args);
    
    } else if (command === 'ping'){
        client.commands.get('ping').execute(message, args);
    
    }

});

client.login('OTMzODkwMzU0MzQyNjg2NzYw.YeoHKw.u8h3_Htldur06tjlSRuF-UWFPec');