/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from '../app.json';

import * as StorageService from './services/storage-service';
import * as CourseService from './services/course-service';

StorageService.setup();
CourseService.setup();

AppRegistry.registerComponent(appName, () => App);
