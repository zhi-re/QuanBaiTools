import low from 'lowdb';
import LocalStorage from 'lowdb/adapters/LocalStorage';
import Vue from 'vue';
const adapter = new LocalStorage('quanbaidb');
const db = low(adapter);

db.defaults({
    id: '',
    noticeId: false,
    tool: {
        star_history: {}
    }
}).write();

Vue.prototype.$db = db;

export default db;
