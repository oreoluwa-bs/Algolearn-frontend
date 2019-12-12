import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Error404Page from './views/Error404Page';
import LandingPage from './views/LandingPage';
import CataloguePage from './views/CataloguePage';
import Navbar from './components/Navbar';
import WrappedNormalLoginForm from './views/LoginPage';
import WrappedNormalTutorSignupForm from './views/TutorSignupPage';
import WrappedNormalStudentSignupForm from './views/SignupPage';
import CourseDetailLarge from './components/Catalogue/CourseDetailLarge';
import Dashboard from './views/Dashboard';
import WrappedNormalCreateCourseForm from './views/CreateCoursePage';
import Classroom from './components/Classroom';

import './App.css';
import RootContext from './store/Contexts';
import WrappedNormalCreateLessonForm from './views/CreateLessonPage';


const { Footer } = Layout;
function App() {
  return (
    <BrowserRouter>
      <RootContext>
        <div className="app-container">
          <Layout>
            <Navbar />

            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/catalogue' component={CataloguePage} />
              <Route path='/catalogue/:courseId' component={CourseDetailLarge} />
              <Route path='/login' component={WrappedNormalLoginForm} />
              <Route path='/signup' component={WrappedNormalStudentSignupForm} />
              <Route path='/tutor-signup' component={WrappedNormalTutorSignupForm} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/course/create' component={WrappedNormalCreateCourseForm} />
              <Route path='/lesson/create' component={WrappedNormalCreateLessonForm} />
              <Route path='/classroom/:courseId' component={Classroom} />

              <Route component={Error404Page} />
            </Switch>

            <Footer style={{ textAlign: 'center' }}>AlgoLearn ©2019 Created by Oreoluwa Bimbo-Salami</Footer>
          </Layout>
        </div>
      </RootContext>
    </BrowserRouter>
  );
}

export default App;
