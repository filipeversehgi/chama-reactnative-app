import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

import * as storageService from "./storage-service";

console.log('- Loading Course Service');

let CURRENT_COURSE = 0;
let CURRENT_SUBJECT = null;
let CURRENT_CLASS = null;
let COURSE_LIST = null;

export async function setup() {

    console.log('- Setuping Course Service');

    let courses = await storageService.get('courses');

    console.log('Courses:', courses);
    
    if(!courses) this.COURSE_LIST = null
    this.COURSE_LIST = courses;

    console.log(this.COURSE_LIST);

    return true;

}

export function getCurrentCourse() {
    console.log('CurrentCourse', this.COURSE_LIST);
    if(!this.COURSE_LIST) return Observable.of(null);
    let currentCourse = this.COURSE_LIST[this.CURRENT_COURSE] || null;
    return Observable.of(currentCourse);
}

export function getCourseCount() {
    return !!this.COURSE_LIST ? this.COURSE_LIST.length : 0;
}