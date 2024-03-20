export default class BallAdapter {
    constructor(adapter = {}) {
        this.weight = adapter.weight || '';
        this.color = adapter.color || '';
    }
}