const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gabriel')
        .setDescription('marius a fost aici'),
    async execute(interaction) {
        return interaction.reply('muie gabriel');
    },
};