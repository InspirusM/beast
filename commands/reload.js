exports.run = (client, message, args) => {

 if (message.author.id !== '437525938582847489' && message.author.id !== '365644930556755969') return message.channel.send(`Hey Kid This Command Is Not For You`);
    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {

        return message.channel.send(`Unable to reload: ${args[0]}.js`);
    }

    message.channel.send(`**Successfully reloaded:** ${args[0]}.js`);


}
exports.help = {
 name: "reload"
}