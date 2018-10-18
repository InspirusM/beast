const Discord = require("discord.js");
 const db = require('quick.db');
module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('You don\'t have permission to set server prefix.');
  if (!args.join(' ')) return message.channel.send('Please provide a prefix to set server prefix.');
  
  db.set(`serverPrefix_${message.guild.id}`, args.join(' ')).then(serverPrefix => {
    message.channel.send(`Server Prefix has been set to ${serverPrefix}`);
  });
}
module.exports.help = {
  name: "prefix"
}
