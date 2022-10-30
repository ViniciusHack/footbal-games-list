import { Match } from "../@types";

interface MatchCardProps extends Match {
  key: number;
  isLive?: boolean;
}

export function MatchCard({ key, isLive = false, gameTimeDisplay, away_team, away_score, home_score, home_team }: MatchCardProps) {

  return (
    <div key={key} className="p-4 dark:bg-zinc-200 rounded-2xl bg-zinc-700 dark:text-zinc-900 text-zinc-100">
      <div>
        <span className="flex justify-between">
          <b className={`${isLive && "text-red-600"}`}>{isLive ? "AO VIVO" : "Encerrado"}</b>
          <span>{gameTimeDisplay}</span>
        </span>
        <div className="flex items-center gap-2 mt-2">
          <p>{home_team}</p>
          <b className="min-w-max text-xl">
          {home_score}
            <span className="font-normal">-</span>
          {away_score}
          </b>
          <p>{away_team}</p>
        </div>
      </div>
    </div>
  )
}