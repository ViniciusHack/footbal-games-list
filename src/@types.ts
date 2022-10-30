interface Team {
  id: number;
  name: string;
  symbolicName: string;
  score: number;
}

export interface Match365 {
  games: {
    id: number;
    startTime: string;
    gameTimeDisplay: string;
    homeCompetitor: Team;
    awayCompetitor: Team;
  }[]
}

export interface MatchDatabase {
  id: number,
  away_team: string,
  away_score: number,
  home_team: string,
  home_score: number,
  date: Date,
}

export interface Match extends MatchDatabase{
  gameTimeDisplay: string;
}