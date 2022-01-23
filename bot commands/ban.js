module.exports = {
    name: 'ban',
    description: "bans the user",
    execute(message, args, Discord){
        
        // makes sure member has role to run the command
        if(message.member.roles.cache.has('934650030936166430')){
            message.channel.send('hello');
        
        } else {
            message.channel.send('You dont have the role to use this command.').catch(console.error);
            // gives member specified role
            
        }
    }
}