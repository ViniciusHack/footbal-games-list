import { GetStaticProps } from "next";
import { useState } from "react";
import { Match } from '../@types';
import { Header } from "../components/Header";
import { MatchCard } from "../components/MatchCard";

interface FinishedProps {
  matches: Match[];
}

export default function Finished({ matches }: FinishedProps) {
  const [searchValue, setSearchValue] = useState("");
  const filteredMatches = matches.filter(
    match => match.awayTeam.name.toLowerCase().includes(searchValue) || match.homeTeam.name.toLowerCase().includes(searchValue)
  )

  return (
    <div className="max-w-7xl w-full my-16 mx-auto">
      <Header onSearch={setSearchValue} />

      <div className="mt-8">
        <h1 className="my-4 dark:text-zinc-100 text-zinc-800 text-4xl font-bold">Partidas encerradas</h1>
        <div className="grid grid-cols-4 gap-8">
          {filteredMatches.map(match => <MatchCard key={match.id} match={match}/>)}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      matches: []
    }
  }
}