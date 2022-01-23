module.exports = {
    name: 'rules',
    description: "shows the rules of the server",
    execute(message, args, Discord){
        
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#AAD7EF')
        .setTitle('Rules')
        .setDescription('Shows the rules of the server')
        .addFields(
            {name: "Rule 1", value: 'do not spam anywhere on the server'},
            {name: "Rule 2", value: 'be respectful to other server members'}

        )
        .setImage("https://cdn.discordapp.com/attachments/896873462575022162/931071135100063774/519-5192856_animated-rules-gif-transparent-hd-png-download.png")
        .setFooter('https://www.youtube.com/giftful');


        message.channel.send({embeds: [newEmbed]})
        
    }
}