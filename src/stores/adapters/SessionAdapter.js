export default class SessionAdapter {
    constructor(adapter = {}) {
        this.league_id = adapter.league_id || '';
        this.tournament_id = adapter.tournament_id || '';
        this.practice_id = adapter.practice_id || '';
        this.time = adapter.time || '';
        this.location = adapter.location || '';
        this.total_games = adapter.total_games || '';
        this.total_frames = adapter.total_frames || '';
    }
}