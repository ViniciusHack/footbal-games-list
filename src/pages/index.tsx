import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { Match, Match365 } from '../@types';
import { Header } from '../components/Header';
import { MatchCard } from '../components/MatchCard';
import { externalApi } from '../lib/externalApi';

export default function Home() {
  const [liveMatches, setLiveMatches] = useState<Match[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const filteredMatches = liveMatches.filter(
    match => match.away_team.toLowerCase().includes(searchValue) || match.home_team.toLowerCase().includes(searchValue)
  )

  useEffect(() => {
    async function fetchFootballMatches() {
      const today = format(new Date(), "dd/MM/yyyy")
      const response = await externalApi.get<Match365>(`/?langId=31&timezoneName=America/Sao_Paulo&userCountryId=21&sports=1&startDate=${today}&endDate=${today}&onlyLiveGames=true&withTop=true`);

      setLiveMatches(response.data.games.map(match => {
        const { id, homeCompetitor, awayCompetitor, gameTimeDisplay, startTime } = match;
        return {
          id,
          away_team: awayCompetitor.name,
          away_score: awayCompetitor.score,
          home_team: homeCompetitor.name,
          home_score: homeCompetitor.score,
          date: new Date(startTime),
          gameTimeDisplay
        }
      }).filter(match => !!match.gameTimeDisplay))
    }

    fetchFootballMatches()
  }, [])

  return (
    <div className="max-w-7xl w-full my-16 mx-auto">
      <Header onSearch={setSearchValue} />
      
      <div className="mt-8">
        <h1 className="my-4 dark:text-zinc-100 text-zinc-800 text-4xl font-bold">Partidas</h1>
        <div className="grid grid-cols-4 gap-8">
          {filteredMatches.map(match =>
            <MatchCard
              key={match.id}
              isLive
              {...match}
            />
          )}
        </div>
      </div>
    </div>
  )
}