export default class UserAdapter {
    constructor(adapter = {}) {
        this.firstname = adapter.firstname || '';
        this.lastname = adapter.lastname || '';
        this.username = adapter.username || '';
        this.email = adapter.email || '';
    }
}