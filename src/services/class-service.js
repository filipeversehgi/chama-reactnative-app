import Database from '../utils/layoutDb';
import * as StorageService from './storage-service';

this.database = Database;

console.log('- Initializing Class Service');
this.storageService = StorageService;

console.log('- Retrieving Saved Data');
this.tables = this.storageService.list();
console.log(this.tables);

export function getCurrentCourse() {
    
}

export function listCourses() {
    return this.database.courses.map(c => c.name);
}

export function selectCourse(id) {
    this.currentCourse = database.courses.filter(c => c.id === id);
    return this.currentCourse;
}

export function selectDiscipline(id) {
    this.currentDiscipline = this.currentCourse.disciplines.filter(d => d.id === id);
    return this.currentDiscipline();
}

export function getCurrentCourse() {
    return this.currentCourse;
}

export function getCurrentDiscipline() {
    return this.currentDiscipline;
}
