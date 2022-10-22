import { useEffect, useState } from 'react';
import { Match } from '../@types';
import { Header } from '../components/Header';
import { MatchCard } from '../components/MatchCard';
import { api } from '../lib/api';

export default function Home() {
  const [liveMatches, setLiveMatches] = useState<Match[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const filteredMatches = liveMatches.filter(
    match => match.awayTeam.name.toLowerCase().includes(searchValue) || match.homeTeam.name.toLowerCase().includes(searchValue)
  )

  useEffect(() => {
    async function fetchFootballMatches() {
      const response = await api.get("/live");

      setLiveMatches(response.data.events.map((match: any) => {
        const { id, homeTeam, awayTeam, homeScore, awayScore, startTimestamp } = match;
        return {
          id,
          startTimestamp,
          homeTeam: {
            ...homeTeam,
            name: homeTeam.shortName,
            score: homeScore.current
          },
          awayTeam: {
            ...awayTeam,
            name: awayTeam.shortName,
            score: awayScore.current
          }
        }
      }))
    }

    fetchFootballMatches()
  }, [])

  return (
    <div className="max-w-7xl w-full my-16 mx-auto">
      <Header onSearch={setSearchValue} />
      
      <div className="mt-8">
        <h1 className="my-4 dark:text-zinc-100 text-zinc-800 text-4xl font-bold">Partidas</h1>
        <div className="grid grid-cols-4 gap-8">
          {filteredMatches.map(match => <MatchCard key={match.id} match={match}/>)}
        </div>
      </div>
    </div>
  )
}