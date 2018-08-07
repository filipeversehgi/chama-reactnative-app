import moment from 'moment';

// Filters a Class Array searching for past classes
export function getPastClasses(classes) {
    const today = moment();
    return classes.filter(c => moment(c.date).isBefore(today));
}

// Filters a Class Array searching for past classes
export function getNextClasses(classes) {
    const today = moment();
    return classes.filter(c => moment(c.date).isAfter(today));
}

// Filters a Array searching for only the past and attended classes
export function getAttendedClasses(classes) {
    return getPastClasses(classes).filter(c => c.presence);
}

// Gets the percentage of faults vs presences
export function getPercentage(classes) {
    const attended = getAttendedClasses(classes).length;
    const total = getPastClasses(classes).length;

    return Math.floor(attended / total * 100);
}