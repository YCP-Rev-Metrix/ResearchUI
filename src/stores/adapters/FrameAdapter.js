export default class FrameAdapter {
    constructor(adapter = {}) {
        this.game_id = adapter.game_id || '';
        this.score = adapter.score || '';
    }
}