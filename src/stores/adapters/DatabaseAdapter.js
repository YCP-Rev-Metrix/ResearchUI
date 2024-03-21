/* Database Adapter -> used to supply valid fields to entire API store */
export default class DatabaseAdapter {
    constructor(adapter = {}) {
        this.ball_id = adapter.ball_id || '';
        this.color = adapter.color || '';
        this.ddx = adapter.ddx || '';
        this.ddy = adapter.ddy || '';
        this.ddz = adapter.ddz || '';
        this.email = adapter.email || '';
        this.event_id = adapter.event_id || '';
        this.event_type = adapter.event_type || '';
        this.firstname = adapter.firstname || '';
        this.frame_id = adapter.frame_id || '';
        this.game_id = adapter.game_id || '';
        this.lastname = adapter.lastname || '';
        this.league_id = adapter.league_id || '';
        this.location = adapter.location || '';
        this.phone_number = adapter.phone_number || '';
        this.practice_id = adapter.practice_id || '';
        this.score = adapter.score || '';
        this.session_id = adapter.session_id || '';
        this.time = adapter.time || '';
        this.total_frames = adapter.total_frames || '';
        this.total_games = adapter.total_games || '';
        this.tournament_id = adapter.tournament_id || '';
        this.user_id = adapter.user_id || '';
        this.username = adapter.username || '';
        this.video_id = adapter.video_id || '';
        this.weight = adapter.weight || '';
        this.x_position = adapter.x_position || '';
        this.y_position = adapter.y_position || '';
        this.z_position = adapter.z_position || '';
    }
}