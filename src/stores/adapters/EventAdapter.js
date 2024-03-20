export default class EventAdapter {
    constructor(adapter = {}) {
        this.user_id = adapter.user_id || '';
        this.event_type = adapter.event_type || '';
    }
}