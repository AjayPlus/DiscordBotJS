module.exports = {
    name: 'hello',
    description: "greeting command",
    execute(message, args,){

        message.channel.send('hello');
    }
}