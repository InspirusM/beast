var Discord = require(`discord.js`)
let client = new Discord.Client();

exports.run = async (bot, message) => {

let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return;
  

message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username
    },
    title: "A Bot Build By RGxHYDRA SHOCK",
    url: "https://discord.gg/QEtT4X3",
    fields: [{
        name: "Bot Support Server Command",
        value: "Our Bit Support Of Our Bo"
      },
      {
        name: "Support Server",
        value:" [Click Me To Join](https://discord.gg/QEtT4X3)"
      },
    ],
    timestamp: new Date(),
    footer: {
      text: "© A PART OF JBS"
    }
  }
});

}
exports.help = {
  name: "server"
}


//[JBS DEVELOPER](https://discordapp.com/api/oauth2/authorize?client_id=479143648668155905&permissions=0&scope=bot)