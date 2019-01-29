const Discord = require('discord.js');


exports.run = function(client, message, args) {
  const sayı = args.slice(0).join(' ');


  if(sayı.length < 1) { 
    return message.reply("silmem için bir miktar belirt")
   } else { 
      message.channel.bulkDelete(sayı);
  message.channel.send("**" + sayı +"** Adet mesajı sildim").then(msg => {
    msg.delete("5000")
  }); 
 }

};





exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 1 
};

exports.help = {
  name: 'temizle', 
  description: 'Belitilen miktarda mesaj siler',
  usage: 'temizle <miktar>'
};