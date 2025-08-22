// register-commands.js
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const APPLICATION_ID = process.env.DISCORD_CLIENT_ID;
const BOT_TOKEN = process.env.BOT_TOKEN; // Must have "applications.commands" scope

const API_URL = `https://discord.com/api/v10/applications/${APPLICATION_ID}/commands`;

const commandData = [
  {
    "name": "chat",
    "description": "Start a text chat with Groq AI",
    "type": 1,
    "dm_permission": true,
    "options": [
      {
        "name": "prompt",
        "description": "Enter your message",
        "type": 3, // 3 = STRING type
        "required": true
      }
    ]
  },
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

async function clearAndRegisterCommands() {
  // Bulk overwrite (clear + add)
  const res = await fetch(API_URL, {
    method: 'PUT',
    headers: {
      'Authorization': `Bot ${BOT_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commandData),
  });

  const data = await res.json();
  console.log('Registered commands:', data);
}

clearAndRegisterCommands().catch(console.error);
