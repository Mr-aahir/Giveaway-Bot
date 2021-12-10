const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: 'help',
  description: 'View the help menu!',
  run: async (client, interaction) => {
    const embed = new MessageEmbed()
      .setAuthor(`Help menu for ${client.user.username}`, 'https://emoji.gg/assets/emoji/3461-giveaway.gif')
      .setColor('#2F3136')
      .setDescription('> **Please Select a category to view all its commands**')
      .addField(`ℹ About Me`, `\`-\` Create advanced giveaways with requirements\n\`-\` Advanced Features like slash commands\n\`-\` [Credits](https://github.com/Mr-aahir/Giveaway-Bot-)`, true)
      .setTimestamp()
      .setThumbnail('https://images.discordapp.net/avatars/396464677032427530/ead32b6b34db5f4e15540f02435459f6.png?size=512')
      .setFooter(`Requested by ${interaction.user.username}`, interaction.user.displayAvatarURL());

    const giveaway = new MessageEmbed()
      .setAuthor("Categories » Giveaway", 'https://i.pinimg.com/originals/9d/79/f1/9d79f11547a0edd240cf6178e9a5a871.gif')
      .setColor('#2F3136')
      .setDescription("```yaml\nHere are the giveaway commands:```")
      .addFields(
        { name: 'Create / Start', value: `Start a giveaway in your guild!\n > **Types: __\`slash\` / \`message\`__**`, inline: true },
        { name: 'Edit', value: `Edit an already running giveaway!\n > **Types: __\`slash\` / \`message\`__**`, inline: true },
        { name: 'End', value: `End an already running giveaway!\n > **Types: __\`slash\` / \`message\`__**`, inline: true },
        { name: 'List', value: `List all the giveaways running within this guild!\n > **Types: __\`slash\` / \`message\`__**`, inline: true },
        { name: 'Pause', value: `Pause an already running giveaway!\n > **Type: __\`slash\`__**`, inline: true },
        { name: 'Reroll', value: `Reroll an ended giveaway!\n > **Types: __\`slash\` / \`message\`__**`, inline: true },
        { name: 'Resume', value: `Resume a paused giveaway!\n > **Type: __\`slash\`__**`, inline: true },
      )
      .setTimestamp()
      .setFooter(`Requested by ${interaction.user.username}`, interaction.user.displayAvatarURL());


    const general = new MessageEmbed()
      .setAuthor("Categories » General", 'https://thumbs.gfycat.com/DistortedHideousAllensbigearedbat-size_restricted.gif')
      .setColor('#2F3136')
      .setDescription("```yaml\nHere are the general bot commands:```")
      .addFields(
        { name: 'Help', value: `Shows all available commands to this bot!\n > **Types: __\`slash\` / \`message\`__**`, inline: true },
        { name: 'Invite', value: `Get the bot's invite link!\n > **Types: __\`slash\` / \`message\`__**`, inline: true },
        { name: 'Ping', value: `Check the bot's websocket latency!\n > **Types: __\`slash\` / \`message\`__**`, inline: true },
      )
      .setTimestamp()
      .setFooter(`Requested by ${interaction.user.username}`, interaction.user.displayAvatarURL());

    const components = (state) => [
      new MessageActionRow().addComponents(
        new MessageSelectMenu()
          .setCustomId("help-menu")
          .setPlaceholder("Please Select a Category")
          .setDisabled(state)
          .addOptions([{
            label: `Giveaways`,
            value: `giveaway`,
            description: `View all the giveaway based commands!`,
            emoji: `🎉`
          },
          {
            label: `General`,
            value: `general`,
            description: `View all the general bot commands!`,
            emoji: `ℹ`
          }
          ])
      ),
    ];

    const initialMessage = await interaction.reply({ embeds: [embed], components: components(false) });

    const filter = (interaction) => interaction.user.id === interaction.member.id;

    const collector = interaction.channel.createMessageComponentCollector(
      {
        filter,
        componentType: "SELECT_MENU",
        time: 300000
      });

    collector.on('collect', (interaction) => {
      if (interaction.values[0] === "giveaway") {
        interaction.update({ embeds: [giveaway], components: components(false) });
      } else if (interaction.values[0] === "general") {
        interaction.update({ embeds: [general], components: components(false) });
      }
    });

  },
};
