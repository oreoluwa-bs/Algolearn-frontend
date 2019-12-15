import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Error404Page from './views/Error404Page';
import LandingPage from './views/LandingPage';
import CataloguePage from './views/CataloguePage';
import Navbar from './components/Navbar';
import WrappedNormalLoginForm from './views/LoginPage';
import WrappedNormalSignupForm from './views/SignupPage';
import CourseDetailLarge from './components/Catalogue/CourseDetailLarge';
import Dashboard from './views/Dashboard';
import WrappedNormalCreateCourseForm from './views/CreateCoursePage';
import Classroom from './components/Classroom';
import RootContext from './store/Contexts';
import WrappedNormalCreateLessonForm from './views/CreateLessonPage';
import TestPage from './components/Classroom/TestPage';
import WrappedNormalAccountPageForm from './views/AccountPage';
import WrappedNormalCreateTestForm from './views/CreateTestPage';

import './App.css';
import EditTestPageWrapper from './components/TutorMisc/EditPageWrapper';


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
              <Route path='/signup/:accountType' component={WrappedNormalSignupForm} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/classroom/:courseId/:lessonId' component={Classroom} />
              <Route path='/tests/:courseId/' component={TestPage} />

              <Route path='/course/create' component={WrappedNormalCreateCourseForm} />
              <Route path='/:courseId/lesson/create' component={WrappedNormalCreateLessonForm} />
              <Route path='/:courseId/test/create' component={WrappedNormalCreateTestForm} />
              <Route path='/:courseId/:questId/test/edit' component={EditTestPageWrapper} />

              <Route path='/account' component={WrappedNormalAccountPageForm} />

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
