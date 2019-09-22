const Discord = require("discord.js");
const config = require("../blakiconfig.json");

module.exports.run = async (custom, message, args) => {
    
    message.delete().catch(O_o=>{});

    let HelpEmbed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .addField("__**KOMENDY:**__", `>>> //game` + `\n` + `//msg`)
    .setTimestamp(message.createdAt)
    .setFooter("Dostępne Komendy", `${config.avatar}`);
    message.channel.send(HelpEmbed);
}

module.exports.help = {
  name:"help"
}
