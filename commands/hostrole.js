const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (custom, message, args) => {

  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Nie posiadasz uprawnień.");
  if(!args[0] || args[0 == "help"]) return message.reply("Użycie: -host <nazwa roli bez @>");

  let roles = JSON.parse(fs.readFileSync("./roles.json", "utf8"));

  roles[message.guild.id] = {
    host: args[0]
  };

  fs.writeFile("./roles.json", JSON.stringify(roles), (err) => {
  });
  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF0000")
  .setTitle("Rola została ustawiona!")
  .setDescription(`Ustawiono Hosta na ${args[0]}`);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "role"
}
