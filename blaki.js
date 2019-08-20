const CustomConfig = require("./blakiprefix.json");
const Fortnite = require("fortnite-publicapi");
const Discord = require('discord.js');
const custom = new Discord.Client({disableEveryone: false});
require('dotenv-flow').config();

const fs = require("fs");
custom.commands = new Discord.Collection();

const config = {
    token: process.env.TOKEN
};

const aktywnosc = [
    "CUSTOMY 🖤", 
    "BOT CREATED BY BLAKI 🍁", 
    "USE -HELP 💚"
];

let date = require('date-and-time');

custom.on('ready', async () => 
{
  console.log(`${custom.user.username} jest online!`);
  setInterval(function() {
        var actID = Math.floor(Math.random() * Math.floor(aktywnosc.length));
        custom.user.setActivity(aktywnosc[actID]);
    }, 10000);
});

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`Poprawnie załadowano ${f}!`);
    custom.commands.set(props.help.name, props);
  });

});

custom.on("message", async message => {
    
    if(message.author.custom) return;
    if(message.channel.type === "dm") return;
  
    let prefix = CustomConfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    let commandfile = custom.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(custom,message,args);
});

custom.login(config.token);
