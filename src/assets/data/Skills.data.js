import { v4 as uuidv4 } from 'uuid';

const skillsF = [
    {
        title: "FrontEnd",
        id: uuidv4(),
        skills: [{
            id: uuidv4(),
            name: 'HTML5',
            width: '80%'
        }, {
            id: uuidv4(),
            name: 'CSS3',
            width: '75%'
        }, {
            id: uuidv4(),
            name: 'React',
            width: '85%'
        }, {
            id: uuidv4(),
            name: 'Angular',
            width: '60%'
        }, {
            id: uuidv4(),
            name: 'JAVASCRIPT',
            width: '75%'
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
            width: '65%'
        }, {
            id: uuidv4(),
            name: 'Express',
            width: '79%'
        }],
    }, {
        title: "DataBase",
        id: uuidv4(),
        skills: [{
            id: uuidv4(),
            name: 'Mongo',
            width: '85%'
        }, {
            id: uuidv4(),
            name: 'Mysql',
            width: '80%'
        }, {
            id: uuidv4(),
            name: 'Fiirebase',
            width: '85%'
        }]
    },{
        title:"App Devlopment",
        id:uuidv4(),
        skills:[{
            id:uuidv4(),
            name:"Android Studio",
            width:'90%',
        },{
            id:uuidv4(),
            name:"React Native",
            width:'70%'
        }]
    }
];
export default skillsF;