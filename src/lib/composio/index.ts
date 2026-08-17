export interface ExternalActionInput { action: string; payload: Record<string, unknown> }
export async function executeExternalAction(_input: ExternalActionInput): Promise<never> { throw new Error("Composio is not configured. External actions are disabled."); }
