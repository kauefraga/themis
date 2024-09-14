import { AtpAgent } from '@atproto/api';

const agent = new AtpAgent({ service: 'https://api.bsky.app' });

export async function getProfile(actor: string) {
  try {
    const { data } = await agent.getProfile({
      actor,
    });

    return data;
  } catch (error) {
    return error instanceof Error
      ? error.message
      : 'Um erro inesperado aconteceu';
  }
}
