import { Request, Response } from 'express';
import { ChatRequest, ChatResponse } from '../types/chat';
import { HumanMessage } from "@langchain/core/messages";
import { initializeAgent } from '../agent';

let agent: any;
let config: any;

// Initialize agent when first needed
async function getAgent() {
  if (!agent) {
    const result = await initializeAgent();
    agent = result.agent;
    config = result.config;
  }
  return { agent, config };
}

export const handleChat = async (
  req: Request<{}, {}, ChatRequest>,
  res: Response<ChatResponse>
): Promise<void> => {
  try {
    const { text } = req.body;
    
    if (!text) {
      res.status(400).json({ text: 'Message text is required' });
      return;
    }

    const { agent, config } = await getAgent();
    
    // Create a stream from the agent
    const stream = await agent.stream(
      { messages: [new HumanMessage(text)] },
      config
    );

    let response = '';
    
    // Process all chunks from the stream
    for await (const chunk of stream) {
      if ("agent" in chunk) {
        response += chunk.agent.messages[0].content;
      } else if ("tools" in chunk) {
        response += chunk.tools.messages[0].content;
      }
    }

    res.json({ text: response });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ text: 'Internal server error' });
  }
};
