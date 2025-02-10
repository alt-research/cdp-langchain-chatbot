export interface AgentConfig {
  configurable: {
    thread_id: string;
  };
}

export interface AgentResult {
  agent: any;
  config: AgentConfig;
}
