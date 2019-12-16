import React, { useState, useEffect, useContext } from 'react';
import { CourseContext } from '../../store/Contexts/course';
import WrappedNormalEditLessonForm from './EditLessonPage';

const EditLessonPageWrapper = (props) => {
    const { courses } = useContext(CourseContext);
    const [tempCourse, setTempCourses] = useState([]);
    const [course, setCourse] = useState(null);
    const [currLesson, setCurrLesson] = useState();

    const currCourse = tempCourse.find((course) => {
        return course._id === props.match.params.courseId
    });

    useEffect(() => {
        setTempCourses(courses);
        if (currCourse !== undefined) {
            setCourse(currCourse);
            const currLess = currCourse.lessons.find((lesson) => {
                return lesson._id === props.match.params.lessonId
            });
            if (currCourse !== undefined) {
                setCurrLesson(currLess);
            }
        }
    }, [courses, currCourse, currLesson, props]);

    return (
        <WrappedNormalEditLessonForm lesson={currLesson} course={course} history={props.history} />
    );
}

export default EditLessonPageWrapper;