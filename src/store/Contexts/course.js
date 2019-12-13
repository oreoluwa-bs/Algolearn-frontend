import React, { Component, createContext } from 'react';

export const CourseContext = createContext();

class CourseContextProvider extends Component {
    state = {
        courses: []
    }
    render() {
        return (
            <CourseContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </CourseContext.Provider>
        );
    }
}

export default CourseContextProvider;


// {
//     id: '4',
//     title: 'Course 4',
//     description: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
//             Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
//             a design language for background applications, is refined by Ant UED Team. Ant Design, a
//             design language for background applications, is refined by Ant UED Team. Ant Design, a design
//             language for background applications, is refined by Ant UED Team. Ant Design, a design
//             language for background applications, is refined by Ant UED Team.`,
//     authorId: '22111',
//     ratings: [5],
//     tests: [{
//         id: '21', question: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
//     Design, a design language for background applications, is refined by Ant UED Team. `,
//         answers: [
//             {
//                 value: 'a',
//                 text: 'tree',
//             },
//             {
//                 value: 'b',
//                 text: 'dda',
//             },
//             {
//                 value: 'c',
//                 text: 'tee',
//             },
//             {
//                 value: 'd',
//                 text: 'qda',
//             },
//         ],
//         answer: 'a'
//     },
//     {
//         id: '1', question: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
//     Design, a design language for background applications, is refined by Ant UED Team. `,
//         answers: [
//             {
//                 value: 'a',
//                 text: 'tree',
//             },
//             {
//                 value: 'b',
//                 text: 'dda',
//             },
//             {
//                 value: 'c',
//                 text: 'tee',
//             },
//             {
//                 value: 'd',
//                 text: 'qda',
//             },
//         ],
//         answer: 'a'
//     }],
//     lessons: [{
//         id: '1',
//         title: 'Introduction',
//         videoUrl: 'hah',
//         textContent: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
//         Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
//         a design language for background applications, is refined by Ant UED Team. Ant Design, a
//         design language for background applications, is refined by Ant UED Team. Ant Design, a design
//         language for background applications, is refined by Ant UED Team. Ant Design, a design
//         language for background applications, is refined by Ant UED Team.`,
//         references: [{
//             id: 'laa',
//             url: 'www.google.com',
//             text: 'Google',
//         },
//         {
//             id: 'laa',
//             url: 'www.google.com',
//             // text: 'Google',
//         }],
//     },
//     {
//         id: '2',
//         title: 'Basics',
//         textContent: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
//         Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
//         a design language for background applications, is refined by Ant UED Team. Ant Design, a
//         design language for background applications, is refined by Ant UED Team. Ant Design, a design
//         language for background applications, is refined by Ant UED Team. Ant Design, a design
//         language for background applications, is refined by Ant UED Team.`,
//         references: [{
//             id: 'laa',
//             url: 'lala',
//             text: 'laa',
//         }],
//     }]
// }