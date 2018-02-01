import '../style/home.scss';
/*@ngInject*/
export default class {
    constructor(title) {
        this.title = title;
        this.newTask = '';
        this.tasks = [];
    }

    addTask() {
        this.tasks.push({
            id: this.tasks.length + 1,
            desc: this.newTask,
            date: (new Date()).toDateString(),
            done: false
        });
        this.newTask = '';
    }
}
