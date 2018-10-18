var Discord = require(`discord.js`)

module.exports.run = async (client, message, args) => {

let inviteemb = new Discord.RichEmbed()
.setAuthor(client.user.username)
.setColor("#fffff")
.setTitle("A Bot Build By R4A W RAJAT#4037")
.setURL("https://discord.gg/W6tM9eu")
.addField("Bot Server Link","A Bot For Your Server Please Support The Bot By Joining The Server")
.addField(`${client.user.username} Server Link`," [Click Me](https://discord.gg/QEtT4X3)")
.setFooter("©R4A")
return message.channel.send(inviteemb);

}
exports.help = {
  name: "server"
}
//

//[JBS DEVELOPER](https://discordapp.com/api/oauth2/authorize?client_id=479143648668155905&permissions=0&scope=bot)