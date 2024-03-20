export default class GameAdapter {
    constructor(adapter = {}) {
        this.session_id = adapter.session_id || '';
        this.score = adapter.score || '';
    }
}