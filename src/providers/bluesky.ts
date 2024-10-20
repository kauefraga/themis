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

export async function getAutoComplete(actor: string) {
  if (actor.trim() === '') {
    return [];
  }

  try {
    const { data } = await agent.searchActorsTypeahead({
      q: actor,
    });

    return data.actors;
  } catch (error) {
    return error instanceof Error
      ? error.message
      : 'Um erro inesperado aconteceu';
  }
}
