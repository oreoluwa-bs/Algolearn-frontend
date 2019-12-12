import React, { Component, createContext } from 'react';

export const CourseContext = createContext();

class CourseContextProvider extends Component {
    state = {
        courses: [
            {
                id: '1',
                title: 'Course 1',
                description: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                        Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                        a design language for background applications, is refined by Ant UED Team. Ant Design, a
                        design language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team.`,
                authorId: '1111',
                ratings: [3],
                lessons: [{
                    id: '1',
                    title: 'Introduction',
                    videoUrl: 'hah',
                    textContent: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                    a design language for background applications, is refined by Ant UED Team. Ant Design, a
                    design language for background applications, is refined by Ant UED Team. Ant Design, a design
                    language for background applications, is refined by Ant UED Team. Ant Design, a design
                    language for background applications, is refined by Ant UED Team.`,
                    references: [{
                        id: 'laa',
                        url: 'www.google.com',
                        text: 'Google',
                    },
                    {
                        id: 'laa',
                        url: 'www.google.com',
                        // text: 'Google',
                    }],
                }],
            },
            {
                id: '2',
                title: 'Course 2',
                description: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                        Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                        a design language for background applications, is refined by Ant UED Team. Ant Design, a
                        design language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team.
                        
                        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                        Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                        a design language for background applications, is refined by Ant UED Team. Ant Design, a
                        design language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team.
                        
                        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                        Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                        a design language for background applications, is refined by Ant UED Team. Ant Design, a
                        design language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team.`,
                authorId: '12gh13ki',
                ratings: [1, 2],
                tests: [{
                    id: '21', question: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. `, options: []
                }],
                lessons: [{
                    id: '1',
                    title: 'Introduction',
                    textContent: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                    a design language for background applications, is refined by Ant UED Team. Ant Design, a
                    design language for background applications, is refined by Ant UED Team. Ant Design, a design
                    language for background applications, is refined by Ant UED Team. Ant Design, a design
                    language for background applications, is refined by Ant UED Team.`,
                    references: [],
                }]
            },
            {
                id: '3',
                title: 'Course 3',
                description: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                        Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                        a design language for background applications, is refined by Ant UED Team. Ant Design, a
                        design language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team.`,
                authorId: '22111',
                ratings: [4],
            },
            {
                id: '4',
                title: 'Course 4',
                description: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                        Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                        a design language for background applications, is refined by Ant UED Team. Ant Design, a
                        design language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team.`,
                authorId: '22111',
                ratings: [5],
                tests: [{
                    id: '21', question: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. `, options: []
                }],
                lessons: [{
                    id: '1',
                    title: 'Introduction',
                    videoUrl: 'hah',
                    textContent: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                    a design language for background applications, is refined by Ant UED Team. Ant Design, a
                    design language for background applications, is refined by Ant UED Team. Ant Design, a design
                    language for background applications, is refined by Ant UED Team. Ant Design, a design
                    language for background applications, is refined by Ant UED Team.`,
                    references: [{
                        id: 'laa',
                        url: 'www.google.com',
                        text: 'Google',
                    },
                    {
                        id: 'laa',
                        url: 'www.google.com',
                        // text: 'Google',
                    }],
                },
                {
                    id: '2',
                    title: 'Basics',
                    textContent: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                    a design language for background applications, is refined by Ant UED Team. Ant Design, a
                    design language for background applications, is refined by Ant UED Team. Ant Design, a design
                    language for background applications, is refined by Ant UED Team. Ant Design, a design
                    language for background applications, is refined by Ant UED Team.`,
                    references: [{
                        id: 'laa',
                        url: 'lala',
                        text: 'laa',
                    }],
                }]
            }
        ]
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