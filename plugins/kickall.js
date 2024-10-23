const config = require('../config')
const { cmd, commands } = require('../command')
  
cmd({
    pattern: "kickall",
    desc: "Kicks all non-admin members from the group.",
    category: "group",
    filename: __filename,
},           
async (conn, mek, m, { from, isGroup, groupMetadata, groupAdmins, isBotAdmins, reply }) => {
    try {
        // Check if the command is used in a group
        if (!isGroup) return reply(`This command is only for groups.`);
        
        // Check if the bot has admin privileges
        if (!isBotAdmins) return reply(`I need admin privileges to kick users.`);
        // Fetch all participants from the group
        const allParticipants = groupMetadata.participants;
        // Filter out the admins (including the bot)
        const nonAdminParticipants = allParticipants.filter(member => !groupAdmins.includes(member.id));
        if (nonAdminParticipants.length === 0) {
            return reply('There are no non-admin members to kick.');
        }
        // Start removing non-admin participants
        for (let participant of nonAdminParticipants) {
            await conn.groupParticipantsUpdate(m.chat, [participant.id], "remove");
  }
        // Send a confirmation message once done
        reply(`Successfully kicked all non-admin members from the group.`);
        
    } catch (e) {
        console.error('Error kicking users:', e);
        reply('An error occurred while trying to kick all members. Please try again.');
    }
});