import React, { useState, useEffect, useContext } from 'react';
import WrappedNormalEditTestForm from './EditTestPage';
import { CourseContext } from '../../store/Contexts/course';

const EditTestPageWrapper = (props) => {
    const { courses } = useContext(CourseContext);
    const [tempCourse, setTempCourses] = useState([]);
    const [course, setCourse] = useState(null);
    const [currQuestion, setCurrQuestion] = useState();

    const currCourse = tempCourse.find((course) => {
        return course._id === props.match.params.courseId
    });

    useEffect(() => {
        setTempCourses(courses);
        if (currCourse !== undefined) {
            setCourse(currCourse);
            const currQuest = currCourse.test.find((quest) => {
                return quest._id === props.match.params.questId
            });
            if (currCourse !== undefined) {
                setCurrQuestion(currQuest);
            }
        }
    }, [courses, currCourse, currQuestion, props]);

    return (
        <WrappedNormalEditTestForm test={currQuestion} course={course} history={props.history} />
    );
}

export default EditTestPageWrapper;