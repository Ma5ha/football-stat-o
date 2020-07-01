export interface Fixture {
    match_id: string;
    country_id: string;
    country_name: string;
    league_id: string;
    league_name: string;
    match_date: string;
    match_status: string;
    match_time: string;
    match_hometeam_id: string;
    match_hometeam_name: string;
    match_hometeam_score: string;
    match_awayteam_name: string;
    match_awayteam_id: string;
    match_awayteam_score: string;
    match_hometeam_halftime_score: string;
    match_awayteam_halftime_score: string;
    match_hometeam_extra_score: string;
    match_awayteam_extra_score: string;
    match_hometeam_penalty_score: string;
    match_awayteam_penalty_score: string;
    match_hometeam_ft_score: string;
    match_awayteam_ft_score: string;
    match_hometeam_system: string;
    match_awayteam_system: string;
    match_live: string;
    match_round: string;
    match_stadium: string;
    match_referee: string;
    team_home_badge: string;
    team_away_badge: string;
    goalscorer?: (GoalscorerEntity)[] | null;
    cards?: (CardsEntity)[] | null;
    substitutions: Substitutions;
    lineup: Lineup;
    statistics?: (StatisticsEntity)[] | null;
}
export interface GoalscorerEntity {
    time: string;
    home_scorer: string;
    score: string;
    away_scorer: string;
    info: string;
}
export interface CardsEntity {
    time: string;
    home_fault: string;
    card: string;
    away_fault: string;
    info: string;
}
export interface Substitutions {
    home?: (HomeEntityOrAwayEntity)[] | null;
    away?: (HomeEntityOrAwayEntity)[] | null;
}
export interface HomeEntityOrAwayEntity {
    time: string;
    substitution: string;
}
export interface Lineup {
    home: HomeOrAway;
    away: HomeOrAway;
}
export interface HomeOrAway {
    starting_lineups?: (StartingLineupsEntityOrSubstitutesEntityOrCoachEntityOrMissingPlayersEntity)[] | null;
    substitutes?: (StartingLineupsEntityOrSubstitutesEntityOrCoachEntityOrMissingPlayersEntity)[] | null;
    coach?: (StartingLineupsEntityOrSubstitutesEntityOrCoachEntityOrMissingPlayersEntity)[] | null;
    missing_players?: (StartingLineupsEntityOrSubstitutesEntityOrCoachEntityOrMissingPlayersEntity)[] | null;
}
export interface StartingLineupsEntityOrSubstitutesEntityOrCoachEntityOrMissingPlayersEntity {
    lineup_player: string;
    lineup_number: string;
    lineup_position: string;
}
export interface StatisticsEntity {
    type: string;
    home: string;
    away: string;
}
