import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import { BehaviorSubject } from "rxjs"
import uuidv4 from 'uuid/v4';
import moment from 'moment/src/moment';
import * as storageService from "./storage-service";

// let CURRENT_COURSE_ID = 0;
// let DATABASE = null;

const EMPTY_DATABASE = {
    courses: []
}

//export const CourseSubject = BehaviourSubject();

export const setup = async () => {
    console.log('- Setuping Course Service');
    const storageCourses = await storageService.get('courses');
    const currentCourseId = await storageService.get('currentCourseId') || 0;

    this.CURRENT_COURSE_ID = currentCourseId;

    if (!storageCourses) {
        this.DATABASE = { ...EMPTY_DATABASE };
        return true;
    }

    this.DATABASE = storageCourses;
    this.Database$ = new BehaviorSubject(this.DATABASE);
    return true;
}

export const getCurrentCourse = () => {
    console.log('Database:', this.DATABASE);
    let currentCourse = !!this.DATABASE.courses.length ? this.DATABASE.courses[this.CURRENT_COURSE_ID] : null;
    console.log('Course ID:', this.CURRENT_COURSE_ID);
    console.log('Current Course:', currentCourse);
    return this.Database$.map(d => {
        return d.courses[this.CURRENT_COURSE_ID]
    })
}

export const createCourse = async (name, school) => {
    const course = {
        id: uuidv4(),
        name,
        school,
        disciplines: []
    }

    this.DATABASE.courses.push(course);
    this.CURRENT_COURSE_ID = this.DATABASE.courses.length - 1;

    await storeDatabase();
}

export const createDiscipline = async (name, teacher, startAt, endsAt, classDays) => {
    const discipline = {
        id: uuidv4(),
        name,
        teacher,
        startAt,
        endsAt,
        classDays: classDays.map(i => Number(i)),
        classes: generateNextClasses(startAt, endsAt, classDays, name)
    }
    
    this.DATABASE.courses[this.CURRENT_COURSE_ID].disciplines.push(discipline);

    await storeDatabase();
}

const generateNextClasses = (startAt, endsAt, classDays, name) => {

    const current = moment(startAt);
    const endAt = moment(endsAt);
    const duration = moment.duration(endAt.diff(current)).asDays() + 1;
    let classes = [];
    let key = 0;

    for (let i = 0; i < duration; i++) {

        if (!current.isAfter(endAt)) {
            if (classDays[current.day()] > 0) {

                classes[key] = {
                    id: uuidv4(),
                    date: current.toISOString(),
                    presence: false,
                    discipline: name,
                    number: key + 1
                }
                key++;
            }
        }

        current.add(1, 'd');

    }

    return classes;
}

const storeDatabase = async () => {
    await storageService.store('courses', this.DATABASE);
    this.Database$.next(this.DATABASE);
}