import { getPlayerStats } from '../../api/players';

/**
 * Root GET Handler: Just return the API name.
 */
export async function root(ctx) {
  ctx.body = 'stats';
}

/**
 * Player Stats GET Handler: return player stats
 */
export async function players(ctx) {
  const json = await getPlayerStats();

  ctx.body = json;
}
