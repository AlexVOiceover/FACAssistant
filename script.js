// Load environment variables from .env file
require('dotenv').config()

// Import necessary classes from discord.js library
const { Client, Events, GatewayIntentBits, Partials } = require('discord.js')

// Import OpenAI
const OpenAIApi = require('openai')

// Initialize OpenAI SDK with API key from .env file
const openai = new OpenAIApi({
	apiKey: process.env.OPENAI_API_KEY,
})

// Create a new client instance
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent,
	],
	partials: [Partials.Channel],
})

// //Create thread
// const thread = await openai.beta.threads.create({
// 	messages: [
// 		{
// 			role: 'user',
// 			content: 'Just greet the user',
// 			//'Create 3 data visualizations based on the trends in this file.',
// 			//"file_ids": [file.id]
// 		},
// 	],
// })

client.once(Events.ClientReady, (createdClient) => {
	console.log(`Logged in as ${createdClient.user.tag}`)
})

client.on(Events.MessageCreate, async (message) => {
	if (message.author.bot) return
	message.reply('hello')
})

// async function chatGPT(message, botId) {
// 	// User ID as the key for conversation history
// 	//const userId = message.author.id

// 	let query = message.content

// 	// Check if the message starts with "!ask"
// 	if (query.startsWith('!ask ')) {
// 		query = message.content.replace('!ask ', '').trim()
// 		// Combine the system message content with the query from the user
// 	}

// 	//Linkage between assistant and thread
// 	const run = await openai.beta.threads.runs.create(thread.id, {
// 		assistant_id: assistant.id,
// 	})

// 	message.reply(run)
// }

// Log in to Discord with your client's token
client.login(process.env.DISCORD_TOKEN)
