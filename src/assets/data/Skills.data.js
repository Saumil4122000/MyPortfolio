import { v4 as uuidv4 } from 'uuid';

const skillsF = [
    {
        title: "FrontEnd",
        id: uuidv4(),
        skills: [{
            id: uuidv4(),
            name: 'HTML5',
            width: '70%'
        }, {
            id: uuidv4(),
            name: 'CSS3',
            width: '70%'
        }, {
            id: uuidv4(),
            name: 'React',
            width: '70%'
        }, {
            id: uuidv4(),
            name: 'Angular',
            width: '70%'
        }, {
            id: uuidv4(),
            name: 'JAVASCRIPT',
            width: '70%'
        }],
    },
    {
        title: "BackEnd",
        id: uuidv4(),
        skills: [{
            id: uuidv4(),
            name: 'Node',
            width: '70%'
        }, {
            id: uuidv4(),
            name: 'PHP',
            width: '70%'
        }, {
            id: uuidv4(),
            name: 'Express',
            width: '70%'
        }],
    }, {
        title: "DataBase",
        id: uuidv4(),
        skills: [{
            id: uuidv4(),
            name: 'Mongo',
            width: '70%'
        }, {
            id: uuidv4(),
            name: 'Mysql',
            width: '70%'
        }, {
            id: uuidv4(),
            name: 'Fiirebase',
            width: '70%'
        }]
    }
];
export default skillsF;