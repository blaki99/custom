const Discord = require("discord.js");

module.exports.run = async (blaki, message, args) => {
    
    message.delete().catch(O_o=>{});
    
    let HelpEmbed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .addField("__**KOMENDY:**__", "-solo" + `\n` + "-duo" + `\n` + "-trio" + `\n` + "-msg, -msgr, -msgb, -msgo")
    .setTimestamp(message.createdAt)
    .setFooter("Dostępne Komendy", "https://i.imgur.com/3Q7TQyy.png");
    message.channel.send(HelpEmbed);
}

module.exports.help = {
  name:"help"
}
