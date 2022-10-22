interface Team {
  id: number;
  name: string;
  score: number;
}

export interface Match {
  id: number;
  startTimestamp: number;
  homeTeam: Team;
  awayTeam: Team;
}