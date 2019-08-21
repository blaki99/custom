const Discord = require("discord.js");
const CustomConfig = require("../blakiprefix.json");

module.exports.run = async (custom, message, args) => {
    
    message.delete().catch(O_o=>{});

    let prefixes = JSON.parse(fs.readFileSync("../prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: CustomConfig.prefix
      };
    }

    let prefix = prefixes[message.guild.id].prefixes;

    let HelpEmbed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .addField("__**KOMENDY:**__", `> ${prefix}solo` + `\n` + `> ${prefix}duo` + `\n` + `> ${prefix}trio` + `\n` + `> ${prefix}msg`)
    .setTimestamp(message.createdAt)
    .setFooter("Dostępne Komendy", "https://i.imgur.com/9A72yKJ_d.jpg");
    message.channel.send(HelpEmbed);
}

module.exports.help = {
  name:"help"
}
