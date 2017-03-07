import fetch from 'node-fetch';

const URL = 'http://www.nhl.com/stats/rest/grouped/skaters/basic/season/skatersummary?cayenneExp=seasonId=20162017%20and%20gameTypeId=2&factCayenneExp=gamesPlayed%3E=1&sort=[{%22property%22:%22points%22,%22direction%22:%22DESC%22},{%22property%22:%22goals%22,%22direction%22:%22DESC%22},{%22property%22:%22assists%22,%22direction%22:%22DESC%22}]';

export const getPlayerStats = () => fetch(URL).then(resp => resp.json());
