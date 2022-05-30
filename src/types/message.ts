export interface Message {
  id: number;
  conversationId: number;
  authorId: number;
  timestamp: number;
  body: string;
}

export interface MessageSentData {
  conversationId: number;
  authorId: number;
  timestamp: number;
  body: string;
}
