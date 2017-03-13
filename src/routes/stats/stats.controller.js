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
  const db = ctx.mongo.db('sonic').collection('playerStats');
  let playersInDb = await db.find().toArray();

  if (!playersInDb || playersInDb.length === 0) {
    const json = await getPlayerStats();
    db.insert(json.data);
    playersInDb = json.data;
  }

  ctx.body = { data: playersInDb };
}
