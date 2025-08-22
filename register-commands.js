// register-commands.js
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const APPLICATION_ID = process.env.DISCORD_CLIENT_ID;
const BOT_TOKEN = process.env.BOT_TOKEN; // Must have "applications.commands" scope

const API_URL = `https://discord.com/api/v10/applications/${APPLICATION_ID}/commands`;

const commandData = [
  {
    name: 'chat',
    description: 'Chat with AI',
    options: [
      {
        type: 3, // STRING
        name: 'prompt',
        description: 'Your message',
        required: true,
      },
    ],
  },
];

async function clearAndRegisterCommands() {
  // 1) Fetch all existing commands
  const existing = await fetch(API_URL, {
    headers: { Authorization: `Bot ${BOT_TOKEN}` },
  }).then(res => res.json());

  console.log(`Found ${existing.length} existing commands.`);

  // 2) Delete them all
  for (const cmd of existing) {
    await fetch(`${API_URL}/${cmd.id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bot ${BOT_TOKEN}` },
    });
    console.log(`Deleted command: ${cmd.name}`);
  }

  // 3) Register the new ones
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bot ${BOT_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commandData),
  });

  const data = await res.json();
  console.log('Registered new command:', data);
}

clearAndRegisterCommands().catch(console.error);
