# CDP AgentKit Langchain Extension Examples - Chatbot

This example demonstrates an agent setup as a terminal style chatbot with access to the full set of CDP AgentKit actions.

## Ask the chatbot to engage in the Web3 ecosystem!

- "Transfer a portion of your ETH to john2879.base.eth"
- "Deploy an NFT that will go super viral!"
- "Choose a name for yourself and register a Basename for your wallet"
- "Deploy an ERC-20 token with total supply 1 billion"

## Requirements

- Node.js 18+
- [CDP API Key](https://portal.cdp.coinbase.com/access/api)
- [OpenAI API Key](https://platform.openai.com/docs/quickstart#create-and-export-an-api-key)

### Checking Node Version

Before using the example, ensure that you have the correct version of Node.js installed. The example requires Node.js 18 or higher. You can check your Node version by running:

```bash
node --version
npm --version
```

## Installation

```bash
npm install
```

## Run the Chatbot

### Set ENV Vars

- Ensure the following ENV Vars are set:
  - "CDP_API_KEY_NAME"
  - "CDP_API_KEY_PRIVATE_KEY"
  - "OPENAI_API_KEY"
  - "NETWORK_ID" (Defaults to `base-sepolia`)

```bash
npm start
```

## HTTP API

The chatbot also supports HTTP API mode. To start the HTTP API server, run:

```bash
npm run api
```

The server will start on port 3000.

#### API Endpoints

##### POST /chat

Send a chat message to the bot.

**Request:**
```json
{
  "text": "your message here"
}
```

**Response:**
```json
{
  "response": "bot's response",
  "error": null  // or error message if any
}
```

**Example:**
```bash
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"text": "What is the current gas price on Base?"}'
```

## License

Apache-2.0
