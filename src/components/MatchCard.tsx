import { differenceInMinutes } from 'date-fns';
import { Match } from '../@types';

interface MatchCardProps {
  match: Match;
  key: number;
}

export function MatchCard({ match, key }: MatchCardProps) {
  return (
    <div key={key} className="p-4 dark:bg-zinc-200 rounded-2xl bg-zinc-700 dark:text-zinc-900 text-zinc-100">
      <div>
        <span className="flex justify-between">
          <b className="text-red-600">AO VIVO</b>
          <span>{differenceInMinutes(new Date().getTime(), match.startTimestamp * 1000)}&rsquo;</span>
        </span>
        <div className="flex items-center gap-2 mt-2">
          <p>{match.homeTeam.name}</p>
          <b className="min-w-max text-xl">
          {match.homeTeam.score}
            <span className="font-normal">-</span>
          {match.awayTeam.score}
          </b>
          <p>{match.awayTeam.name}</p>
        </div>
      </div>
    </div>
  )
}