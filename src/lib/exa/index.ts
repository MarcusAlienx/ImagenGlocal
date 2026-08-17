export interface ExternalSearchResult { title: string; url: string; summary: string }
export async function searchExternalInformation(_query: string): Promise<ExternalSearchResult[]> { if (!process.env.EXA_API_KEY) return []; return []; }
