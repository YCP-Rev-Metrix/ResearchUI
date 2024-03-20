export default class ShotAdapter {
    constructor(adapter = {}) {
        this.user_id = adapter.user_id || '';
        this.frame_id = adapter.frame_id || '';
        this.ball_id = adapter.ball_id || '';
        this.video_id = adapter.video_id || '';
        this.time = adapter.time || '';
        this.ddx = adapter.ddx || '';
        this.ddy = adapter.ddy || '';
        this.ddz = adapter.ddz || '';
        this.x_position = adapter.x_position || '';
        this.y_position = adapter.y_position || '';
        this.z_position = adapter.z_position || '';
    }
}