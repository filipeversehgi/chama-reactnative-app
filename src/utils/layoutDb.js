import moment from 'moment';
import uuidv4 from 'uuid/v4';

const database = {
    courses: [
        {
            id: uuidv4(),
            name: 'Interior Design',
            school: 'ProArte',
            disciplines: [
                {
                    id: uuidv4(),
                    name: 'Drawing I',
                    teacher: 'Cassio',
                    startAt: '2018-07-01',
                    endsAt: '2018-08-10',
                    classDays: [ 1, 0, 0, 0, 0, 2, 0 ]
                },
                {
                    id: uuidv4(),
                    name: 'Color Theory',
                    teacher: 'Mirna',
                    startAt: '2018-07-01',
                    endsAt: '2018-08-15',
                    classDays: [ 1, 1, 1, 0, 0, 0, 0 ]
                }
            ]
        },
        {
            id: uuidv4(),
            name: 'English',
            school: 'Homeschooled',
            disciplines: [
                {
                    id: uuidv4(),
                    name: 'Gramatic',
                    teacher: 'Filipe',
                    startAt: '2018-07-01',
                    endsAt: '2018-08-12',
                    classDays: [ 1, 0, 0, 0, 0, 2, 0 ]
                },
                {
                    id: uuidv4(),
                    name: 'Verbs',
                    teacher: 'Filipe',
                    startAt: '2018-07-01',
                    endsAt: '2018-08-05',
                    classDays: [ 1, 1, 1, 0, 0, 0, 0 ]
                }
            ]
        }
    ]
}

database.courses.forEach(course => {
    course.disciplines.forEach(d => {
        const current = moment(d.startAt);
        const endAt = moment(d.endsAt);
        const duration = moment.duration(endAt.diff(current)).asDays() + 1;
        d.classes = [];
        let key = 0;

        for(let i = 0; i < duration; i++){

            if(!current.isAfter(d.endsAt)){
                if(d.classDays[current.day()] > 0){
                    const rN = (Math.random()) * 2;
                    d.classes[key] = {
                        id: uuidv4(),
                        date: current.toISOString(),
                        presence: rN > 1 ? true : false,
                        discipline: d.name,
                        number: key + 1
                    }
                    key++;
                }
            }

            current.add(1, 'd');

        }
    })
});

export default database;