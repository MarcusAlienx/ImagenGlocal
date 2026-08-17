export interface ConversationMemory { conversationId: string; selectedEventId?: string; city?: string; date?: string; selectedTicketTypeId?: string; quantity?: number; lastEventIds: string[]; updatedAt: number }
export interface MemoryStore { get(id: string): Promise<ConversationMemory | undefined>; set(memory: ConversationMemory): Promise<void> }
class SessionMemoryStore implements MemoryStore {
  private readonly sessions = new Map<string, ConversationMemory>();
  async get(id: string) { const memory = this.sessions.get(id); if (memory && Date.now() - memory.updatedAt > 30 * 60_000) { this.sessions.delete(id); return undefined; } return memory; }
  async set(memory: ConversationMemory) { this.sessions.set(memory.conversationId, memory); }
}
export const conversationMemory: MemoryStore = new SessionMemoryStore();
