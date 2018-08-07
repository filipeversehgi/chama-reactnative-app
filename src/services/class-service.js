import Database from './../../utils/layoutDb';

class Course {
    constructor() {

    }
}

class Discipline {
    constructor() {

    }


    // Filters a Class Array searching for past classes
    getPastClasses() {
        const today = moment();
        return this.classes.filter(c => moment(c.date).isBefore(today));
    }

    // Filters a Class Array searching for past classes
    getNextClasses() {
        const today = moment();
        return this.classes.filter(c => moment(c.date).isAfter(today));
    }

    // Filters a Array searching for only the past and attended classes
    getAttendedClasses() {
        return this.getPastClasses().filter(c => c.presence);
    }

    // Gets the percentage of faults vs presences
    getPercentage() {
        const attended = this.getAttendedClasses().length;
        const total = this.getPastClasses().length;

        return Math.floor(attended / total * 100);
    }
}

export default class ClassService {

    constructor() {
        this.database = Database;
        this.currentCourse = Database && Database.courses[0];
        this.currentDiscipline = this.currentCourse && this.currentCourse.disciplines[0];
    }

    listCourses() {
        return this.database.courses.map(c => c.name);
    }

    selectCourse(id) {
        this.currentCourse = database.courses.filter(c => c.id === id);
        return this.currentCourse;
    }

    selectDiscipline(id) {
        this.currentDiscipline = this.currentCourse.disciplines.filter(d => d.id === id);
        return this.currentDiscipline();
    }

    getCurrentCourse() {
        return this.currentCourse;
    }

    getCurrentDiscipline() {
        return this.currentDiscipline;
    }
}