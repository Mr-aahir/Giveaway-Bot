const Discord = require("discord.js")
module.exports = {
  async execute(giveaway, winners) {
    winners.forEach((member) => {
      member.send({
        embeds: [new Discord.MessageEmbed()
          .setTitle(`> 🎁 Let's goo!, We Have A New Winner.`)
          .setThumbnail('https://media.istockphoto.com/vectors/congratulations-card-with-light-rays-vector-id960999328?k=20&m=960999328&s=170667a&w=0&h=q_oDICGCRNAhScQenTHM0nFCd7oo-zeVdnOk3MbP1NM=')
          .setColor("#2F3136")
          .setDescription(`Hello there ${member.user},\n> I heard that the host rerolled and you have won **[[This Giveaway]](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId})**\n Good Job On Winning **${giveaway.prize}!**\nDirect Message the host to claim your prize!!`)
          .setTimestamp()
          .setFooter(member.user.username, member.user.displayAvatarURL())
        ]
      }).catch(e => { })
    });
  }
}