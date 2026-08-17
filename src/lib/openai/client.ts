import "server-only";
import OpenAI from "openai";
export function getOpenAIClient() { return process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY, timeout: 15_000, maxRetries: 1 }) : undefined; }
