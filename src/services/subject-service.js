

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