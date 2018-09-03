const Discord = require('discord.js')

exports.run = async(client, message, args) => {
   let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return; 

let dh = new Discord.RichEmbed()

.setTitle('Developer Commands')
.addField('<prefix>eval','Developer')
.addField('<prefix>code','Developer')
.setFooter(`Requested By ${message.author}`)

message.channel.send(dh);
}

exports.help = {
  name: "dhelp"
}