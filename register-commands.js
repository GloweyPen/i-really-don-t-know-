// register-commands.js
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const APPLICATION_ID = process.env.DISCORD_CLIENT_ID;
const BOT_TOKEN = process.env.BOT_TOKEN;

const commands = [
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
  {
    name: 'joke',
    description: 'Get a funny joke',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Topic for the joke (optional)',
        required: false,
      },
    ],
  },
  {
    name: 'quote',
    description: 'Get an inspirational quote',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Topic for the quote (optional)',
        required: false,
      },
    ],
  },
  {
    name: 'trivia',
    description: 'Get a trivia question',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Topic for the trivia (optional)',
        required: false,
      },
    ],
  },
  {
    name: 'poem',
    description: 'Generate a short poem',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Topic for the poem (optional)',
        required: false,
      },
    ],
  },
  {
    name: 'story',
    description: 'Tell a short story',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Topic for the story (optional)',
        required: false,
      },
    ],
  },
  {
    name: 'riddle',
    description: 'Get a riddle',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Topic for the riddle (optional)',
        required: false,
      },
    ],
  },
  {
    name: 'fact',
    description: 'Share an interesting fact',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Topic for the fact (optional)',
        required: false,
      },
    ],
  },
  {
    name: 'translate',
    description: 'Translate text',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Text to translate',
        required: true,
      },
    ],
  },
  {
    name: 'summarize',
    description: 'Summarize text',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Text to summarize',
        required: true,
      },
    ],
  },
  {
    name: 'advice',
    description: 'Get advice',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Topic for advice (optional)',
        required: false,
      },
    ],
  },
  {
    name: 'recipe',
    description: 'Get a recipe',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Dish for the recipe (optional)',
        required: false,
      },
    ],
  },
  {
    name: 'workout',
    description: 'Suggest a workout plan',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Type of workout (optional)',
        required: false,
      },
    ],
  },
  {
    name: 'motivate',
    description: 'Get a motivational message',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Topic for motivation (optional)',
        required: false,
      },
    ],
  },
  {
    name: 'pun',
    description: 'Get a pun',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Topic for the pun (optional)',
        required: false,
      },
    ],
  },
  {
    name: 'haiku',
    description: 'Generate a haiku',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Topic for the haiku (optional)',
        required: false,
      },
    ],
  },
  {
    name: 'limerick',
    description: 'Generate a limerick',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Topic for the limerick (optional)',
        required: false,
      },
    ],
  },
  {
    name: 'horoscope',
    description: 'Get a horoscope',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Zodiac sign (optional)',
        required: false,
      },
    ],
  },
  {
    name: 'dream',
    description: 'Interpret a dream',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Dream description',
        required: true,
      },
    ],
  },
  {
    name: 'name',
    description: 'Suggest names',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Type of names (optional)',
        required: false,
      },
    ],
  },
  {
    name: 'idea',
    description: 'Get a business idea',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Topic for the idea (optional)',
        required: false,
      },
    ],
  },
  {
    name: 'tip',
    description: 'Get a tip',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Topic for the tip (optional)',
        required: false,
      },
    ],
  },
  {
    name: 'code',
    description: 'Generate code snippet',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Description for the code',
        required: true,
      },
    ],
  },
  {
    name: 'explain',
    description: 'Explain something',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Topic to explain',
        required: true,
      },
    ],
  },
  {
    name: 'define',
    description: 'Define a word',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Word to define',
        required: true,
      },
    ],
  },
  {
    name: 'synonym',
    description: 'Get synonyms',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Word for synonyms',
        required: true,
      },
    ],
  },
  {
    name: 'antonym',
    description: 'Get antonyms',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Word for antonyms',
        required: true,
      },
    ],
  },
  {
    name: 'rhyme',
    description: 'Get rhyming words',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Word to rhyme with',
        required: true,
      },
    ],
  },
  {
    name: 'anagram',
    description: 'Generate anagrams',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Word for anagrams',
        required: true,
      },
    ],
  },
  {
    name: 'palindrome',
    description: 'Check for palindrome',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Text to check',
        required: true,
      },
    ],
  },
  {
    name: 'math',
    description: 'Solve a math problem',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Math problem',
        required: true,
      },
    ],
  },
  {
    name: 'catfact',
    description: 'Get a random cat fact',
    options: [],
  },
  {
    name: 'dogimage',
    description: 'Get a random dog image',
    options: [],
  },
  {
    name: 'bored',
    description: 'Suggest an activity if bored',
    options: [],
  },
  {
    name: 'agify',
    description: 'Estimate age from name',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Name to estimate age',
        required: true,
      },
    ],
  },
  {
    name: 'genderize',
    description: 'Estimate gender from name',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Name to estimate gender',
        required: true,
      },
    ],
  },
  {
    name: 'nationalize',
    description: 'Estimate nationality from name',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Name to estimate nationality',
        required: true,
      },
    ],
  },
  {
    name: 'randomjoke',
    description: 'Get a random joke',
    options: [],
  },
  {
    name: 'randomuser',
    description: 'Generate a random user profile',
    options: [],
  },
  {
    name: 'pokemon',
    description: 'Get info about a Pokemon',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Pokemon name (optional, default: pikachu)',
        required: false,
      },
    ],
  },
  {
    name: 'numberfact',
    description: 'Get a fact about a number',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Number (optional, default: random)',
        required: false,
      },
    ],
  },
  {
    name: 'bitcoinprice',
    description: 'Get current Bitcoin price',
    options: [],
  },
  {
    name: 'randomadvice',
    description: 'Get random advice',
    options: [],
  },
  {
    name: 'randomquote',
    description: 'Get a random quote',
    options: [],
  },
  {
    name: 'chucknorris',
    description: 'Get a Chuck Norris fact',
    options: [],
  },
  {
    name: 'httpcat',
    description: 'Get an HTTP cat image',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'HTTP code (optional, default: 200)',
        required: false,
      },
    ],
  },
  {
    name: 'randomfox',
    description: 'Get a random fox image',
    options: [],
  },
  {
    name: 'robohash',
    description: 'Generate a Robohash image',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Text for Robohash (optional, default: grok)',
        required: false,
      },
    ],
  },
  {
    name: 'dadjoke',
    description: 'Get a dad joke',
    options: [],
  },
  {
    name: 'coinflip',
    description: 'Flip a coin',
    options: [],
  },
  {
    name: 'rolldice',
    description: 'Roll a dice',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Number of sides (optional, default: 6)',
        required: false,
      },
    ],
  },
  {
    name: 'randomnum',
    description: 'Generate a random number',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Range min-max (optional, default: 1-100)',
        required: false,
      },
    ],
  },
  {
    name: 'currenttime',
    description: 'Get current UTC time',
    options: [],
  },
  {
    name: 'echo',
    description: 'Echo back text',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Text to echo',
        required: true,
      },
    ],
  },
  {
    name: 'uppercase',
    description: 'Convert text to uppercase',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Text to convert',
        required: true,
      },
    ],
  },
  {
    name: 'lowercase',
    description: 'Convert text to lowercase',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Text to convert',
        required: true,
      },
    ],
  },
  {
    name: 'reverse',
    description: 'Reverse text',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Text to reverse',
        required: true,
      },
    ],
  },
  {
    name: 'wordcount',
    description: 'Count words in text',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Text to count',
        required: true,
      },
    ],
  },
  {
    name: 'charcount',
    description: 'Count characters in text',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Text to count',
        required: true,
      },
    ],
  },
  {
    name: 'password',
    description: 'Generate a password',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Length (optional, default: 12)',
        required: false,
      },
    ],
  },
  {
    name: 'qrcode',
    description: 'Generate QR code',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Text for QR code',
        required: true,
      },
    ],
  },
  {
    name: 'shortenurl',
    description: 'Shorten a URL',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'URL to shorten',
        required: true,
      },
    ],
  },
  {
    name: 'defineword',
    description: 'Define a word (non-AI)',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Word to define',
        required: true,
      },
    ],
  },
  {
    name: 'randomcolor',
    description: 'Get a random color',
    options: [],
  },
  {
    name: 'publicholidays',
    description: 'Get public holidays',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Country code (optional, default: US)',
        required: false,
      },
    ],
  },
  {
    name: 'isslocation',
    description: 'Get ISS current location',
    options: [],
  },
  {
    name: 'weather',
    description: 'Get weather info',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'City (optional, default: London)',
        required: false,
      },
    ],
  },
  {
    name: 'randomduck',
    description: 'Get a random duck image',
    options: [],
  },
  {
    name: 'picsum',
    description: 'Get a random image from Picsum',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Dimensions widthxheight (optional, default: 200x300)',
        required: false,
      },
    ],
  },
  {
    name: 'affirmation',
    description: 'Get a positive affirmation',
    options: [],
  },
  {
    name: 'ispalindrome',
    description: 'Check if text is a palindrome',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Text to check',
        required: true,
      },
    ],
  },
  {
    name: 'factorial',
    description: 'Calculate factorial',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Number',
        required: true,
      },
    ],
  },
  {
    name: 'fibonacci',
    description: 'Get Fibonacci sequence',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Number of terms (optional, default: 10)',
        required: false,
      },
    ],
  },
  {
    name: 'isprime',
    description: 'Check if number is prime',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Number',
        required: true,
      },
    ],
  },
  {
    name: 'binary',
    description: 'Convert text to binary',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Text to convert',
        required: true,
      },
    ],
  },
  {
    name: 'hex',
    description: 'Convert text to hex',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Text to convert',
        required: true,
      },
    ],
  },
  {
    name: 'pi',
    description: 'Get digits of Pi',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Number of digits (optional, default: 10)',
        required: false,
      },
    ],
  },
  {
    name: 'e',
    description: 'Get digits of e',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Number of digits (optional, default: 10)',
        required: false,
      },
    ],
  },
  {
    name: 'placebear',
    description: 'Get a bear placeholder image',
    options: [
      {
        type: 3,
        name: 'prompt',
        description: 'Dimensions widthxheight (optional, default: 200x300)',
        required: false,
      },
    ],
  },
  {
    name: 'randomanime',
    description: 'Get info about a random anime',
    options: [],
  },
  {
    name: 'ukholidays',
    description: 'Get UK bank holidays',
    options: [],
  },
];

// Utility function to delay execution
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Function to register a single command with rate limit handling
async function registerSingleCommand(commandData, retryCount = 0) {
  try {
    const res = await fetch(`https://discord.com/api/v10/applications/${APPLICATION_ID}/commands`, {
      method: 'POST',
      headers: {
        Authorization: `Bot ${BOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: commandData.name,
        description: commandData.description,
        type: 1, // CHAT_INPUT
        dm_permission: true,               // allow in DMs
        default_member_permissions: null,  // no guild-perm gating
        options: commandData.options || [],
      }),
    });

    const result = await res.json();
    
    // Handle rate limiting (429 status)
    if (res.status === 429) {
      const retryAfter = result.retry_after || 5; // Discord provides retry_after in seconds
      console.log(`⚠️  Rate limited for command ${commandData.name}. Waiting ${retryAfter} seconds...`);
      return { rateLimited: true, retryAfter: retryAfter * 1000, command: commandData.name }; // Convert to milliseconds
    }
    
    if (!res.ok) {
      console.error(`❌ Failed to register command ${commandData.name}:`, result);
    } else {
      console.log(`✅ Global slash command ${commandData.name} registered successfully`);
    }
    return { success: res.ok, command: commandData.name, result, rateLimited: false };
  } catch (err) {
    console.error(`❌ Error registering command ${commandData.name}:`, err);
    return { success: false, command: commandData.name, error: err, rateLimited: false };
  }
}

// Process a batch with rate limit handling and retry logic
async function processBatchWithRetry(batch, batchNumber, totalBatches, maxRetries = 3) {
  let attempt = 1;
  let currentBatch = [...batch]; // Create a copy to work with
  
  while (attempt <= maxRetries && currentBatch.length > 0) {
    console.log(`Processing batch ${batchNumber}/${totalBatches} (attempt ${attempt}) - ${currentBatch.length} commands:`);
    currentBatch.forEach(cmd => console.log(`  • ${cmd.name}`));
    
    // Process all commands in the current batch simultaneously
    const promises = currentBatch.map(command => registerSingleCommand(command));
    const results = await Promise.all(promises);
    
    // Check for rate limited commands
    const rateLimitedResults = results.filter(r => r.rateLimited);
    const successfulResults = results.filter(r => !r.rateLimited);
    
    if (rateLimitedResults.length > 0) {
      // Find the longest retry_after time
      const maxRetryAfter = Math.max(...rateLimitedResults.map(r => r.retryAfter));
      
      console.log(`🔄 ${rateLimitedResults.length} commands were rate limited in batch ${batchNumber}`);
      console.log(`⏳ Waiting ${maxRetryAfter / 1000} seconds before retrying...`);
      
      await delay(maxRetryAfter);
      
      // Prepare commands that need to be retried
      const commandsToRetry = rateLimitedResults.map(r => 
        batch.find(cmd => cmd.name === r.command)
      );
      
      currentBatch = commandsToRetry;
      attempt++;
    } else {
      // No rate limits, batch completed successfully
      console.log(`✅ Batch ${batchNumber} completed successfully: ${successfulResults.filter(r => r.success).length}/${batch.length} registered\n`);
      return results;
    }
  }
  
  // If we reach here, we've exceeded max retries
  if (currentBatch.length > 0) {
    console.log(`⚠️  Batch ${batchNumber} exceeded maximum retries. ${currentBatch.length} commands may not be registered.`);
    // Return the last results we got
    const promises = currentBatch.map(command => ({ success: false, command: command.name, error: 'Max retries exceeded' }));
    return promises;
  }
}
// Main function with rate limiting and retry logic
async function registerGlobalCommands() {
  console.log(`🚀 Starting to register ${commands.length} commands with rate limiting and retry logic...`);
  console.log('⚙️  Rate limit: 2 commands every 2 seconds');
  console.log('🔄 Max retries per batch: 3');
  console.log('=' .repeat(60) + '\n');
  
  const batchSize = 2;
  const batchDelay = 2000; // 2 seconds in milliseconds
  
  let successCount = 0;
  let failureCount = 0;
  let totalRetries = 0;
  
  // Process commands in batches
  for (let i = 0; i < commands.length; i += batchSize) {
    const batch = commands.slice(i, i + batchSize);
    const batchNumber = Math.floor(i / batchSize) + 1;
    const totalBatches = Math.ceil(commands.length / batchSize);
    
    // Process batch with retry logic
    const results = await processBatchWithRetry(batch, batchNumber, totalBatches);
    
    // Count successes and failures
    if (results) {
      results.forEach(result => {
        if (result && result.success) {
          successCount++;
        } else {
          failureCount++;
        }
      });
    }
    
    // Wait before processing the next batch (except for the last batch)
    if (i + batchSize < commands.length) {
      console.log(`⏸️  Waiting ${batchDelay/1000} seconds before next batch...\n`);
      await delay(batchDelay);
    }
  }
  
  // Final summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 COMMAND REGISTRATION SUMMARY');
  console.log('='.repeat(60));
  console.log(`📝 Total commands: ${commands.length}`);
  console.log(`✅ Successfully registered: ${successCount}`);
  console.log(`❌ Failed to register: ${failureCount}`);
  console.log(`🔄 Total retries due to rate limits: ${totalRetries}`);
  console.log('='.repeat(60));
  
  if (failureCount > 0) {
    console.log('\n⚠️  Some commands failed to register. Check the error messages above for details.');
    console.log('💡 Tip: You can re-run this script to attempt registering failed commands.');
  } else {
    console.log('\n🎉 All commands registered successfully!');
    console.log('🤖 Your Discord bot is ready to use!');
  }
}

registerGlobalCommands();
