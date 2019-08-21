const Discord = require("discord.js");
 
module.exports.run = async (custom, message, args) => {
 
    let pass = (args[0]);
    let everyone = message.guild.defaultRole;
    const zasady0 = "> **» NIE** UŻYWAJ ROBOTÓW PODCZAS GRY !"
    const zasady1 = "> **» NIE** UDOSTĘPNIAJ NIKOMU HASŁA DO GRY !"
    const zasady2 = "> **» NIE** STREAMSNIPUJ INNYCH GRACZY !"
    const zasady3 = "> **» NIE** UŻYWAJ TRYBU ANONIMOWEGO PODCZAS GRY !"
    const zasady4 = "> **» NIE** BIJEMY SIĘ NA PIERWSZYCH MIEJSCÓWKACH !"
    const zasady5 = "> **» NIE** WALCZ DOPÓKI NIE ZAMKNIE SIĘ 2 STREFA!"
    const zasady6 = "**NIESTOSOWANIE SIĘ DO POWYŻSZYCH ZASAD BĘDZIE KARANE !**"
    const react = '✅'
  
    if(!message.member.roles.some(r => r.name === "Host Customy")) return message.reply("Ooops, nie posiadasz roli ``Host Customy``");
    if(!args[0]) return message.channel.send("❌ _Wprowadź prawidłowe wartości, **-duo hasło **_ ❌").then(() =>
    {
        message.channel.send("❌ _**Utwórz hasło, które nie będzie za krótkie!**_ ❌");
    })
    message.delete();
    let customEmbed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setThumbnail('https://i.imgur.com/rmxBcdK.png')
    .setTitle(`**DUO CUSTOM**`)
    .setURL('https://discord.gg/u9W8euF')
    .addField("**HASŁO:**", `**${pass}**`, true)
    .addField("**HOST:**", `${message.author}`, true)
    .addField("**ZASADY:**", zasady0 + `\n` +zasady1 + `\n`+ zasady2 + `\n`+ zasady3 + `\n`+ zasady4 + `\n`+ zasady5 + `\n`+`\n`+ zasady6)
    .setTimestamp(message.createdAt)
    .setFooter("Kliknij reakcje jeśli grasz", `${message.custom.avatarURL}`);
    message.channel.send(everyone.toString());
    message.channel.send(customEmbed).then(function (message) {
        message.react(react)
    })
}
 
module.exports.help = {
    name: "duo"
}
