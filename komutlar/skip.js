const { MessageEmbed } = require("discord.js");

module.exports.config = { 
    name: 'skip',
    aliases: ['geç','gec']
}

module.exports.sex = async(client, message, args, config) => {

if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Botla aynı kanalda olmalısın!**").setTimestamp().setFooter(`${config.EmbedFooter}`));
    
if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor("RANDOM").setDescription("**❗️ - Lütfen bir sesli kanala girin!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

if (!client.player.getQueue(message)) return message.channel.send( new MessageEmbed().setColor("RANDOM").setDescription("**❗️ - Şu anda oynatma listesinde şarkı yok!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

client.player.skip(message).then(() => message.channel.send(new MessageEmbed().setColor("RANDOM").setAuthor(`✔️ - Oynatılan şarkı başarıyla geçildi.`).setTimestamp().setFooter(`${config.EmbedFooter}`)));

};
