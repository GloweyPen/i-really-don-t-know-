// register-commands.js
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const APPLICATION_ID = process.env.DISCORD_CLIENT_ID;
const BOT_TOKEN = process.env.BOT_TOKEN; // Bot token with applications.commands scope

async function registerGlobalCommand() {
  const commandData = {
    name: 'chat',
    description: 'Chat with AI',
    type: 1, // CHAT_INPUT
    dm_permission: true, // backwards-compatible DM support
    contexts: [1, 3],   // 1 = guild text channels, 3 = DMs
    options: [
      {
        type: 3, // STRING
        name: 'prompt',
        description: 'Your message',
        required: true,
      },
    ],
  };

  try {
    const res = await fetch(`https://discord.com/api/v10/applications/${APPLICATION_ID}/commands`, {
      method: 'POST',
      headers: {
        'Authorization': `Bot ${BOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commandData),
    });

    const result = await res.json();

    if (!res.ok) {
      console.error('Failed to register command:', result);
    } else {
      console.log('Global slash command registered:', result);
    }
  } catch (err) {
    console.error('Error registering command:', err);
  }
}

registerGlobalCommand();
