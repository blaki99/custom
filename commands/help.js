const Discord = require("discord.js");

module.exports.run = async (custom, message, args) => {
    
    message.delete().catch(O_o=>{});

    let HelpEmbed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .addField("__**KOMENDY:**__", `>>> //game` + `\n` + `//msg`)
    .setTimestamp(message.createdAt)
    .setFooter("Dostępne Komendy", "https://i.imgur.com/6Ew0Bza.png");
    message.channel.send(HelpEmbed);
}

module.exports.help = {
  name:"help"
}
