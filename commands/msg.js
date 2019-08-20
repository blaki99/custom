const Discord = require("discord.js");

module.exports.run = async (custom, message, args) => {

    let msg = (args[0]);
    let msg2 = args.slice(1).join(' ')
    const ramka = "```"
   
    if(!message.member.roles.some(r => r.name === "Host Customy")) return message.reply("Ooops, nie posiadasz roli ``Host Customy``");
    if(!args[0]) return message.channel.send("❌ _Wprowadź prawidłowe wartości, **-msg <wiadomość>**_ ❌")
    message.delete();
    let msgEmbed = new Discord.RichEmbed()
    .setColor("#6B7074")
    .addField("__**INFORMACJA:**__", `${ramka}
${msg} ${msg2}${ramka}`)
    .addField("__**OD:**__", `${message.author}`)
    .setTimestamp(message.createdAt)
    .setFooter("Nowa Informacja", "https://i.imgur.com/9A72yKJ_d.jpg");
    message.channel.send(msgEmbed)
}

module.exports.help = {
    name: "msg"
}
