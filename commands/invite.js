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
        name: "Bot Invite Command",
        value: "Our Another Bot Invite Link Also Available"
      },
      {
        name: "Music Beast Invite Link",
        value:" [Click Me To Invite Me](https://discordapp.com/api/oauth2/authorize?client_id=479143648668155905&permissions=0&scope=bot)"
      },
       {
        name: "JBS Invite Link",
        value:" [Click Me To Invite Me](https://discordapp.com/api/oauth2/authorize?client_id=475146750617976832&permissions=0&scope=bot)"
      },
       {
        name: "Lithium Invite Link",
        value:" [Click Me To Invite Me](https://goo.gl/54uoNf)"
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
  name: "invite"
}


//[JBS DEVELOPER](https://discordapp.com/api/oauth2/authorize?client_id=479143648668155905&permissions=0&scope=bot)