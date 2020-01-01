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
import EditTestPageWrapper from './components/TutorMisc/EditPageWrapper';
import EditLessonPageWrapper from './components/TutorMisc/EditLessonWrapper';
import WrappedNormalForgotPasswordForm from './views/ForgotPassword';

import AdminIndex from './views/admin pages/AdminIndex';
import WrappedNormalAdminLoginForm from './views/admin pages/AdminLogin';
import AdminDashboard from './views/admin pages/AdminDashboard';
import WrappedNormalAdminSignupForm from './views/admin pages/AdminSignup';

import './App.css';
import WrappedNormalAdminForgotPasswordForm from './views/admin pages/AdminForgotPassword';

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

              <Route path='/forgot-password' component={WrappedNormalForgotPasswordForm} />
              <Route path='/forgotadminpassword' component={WrappedNormalAdminForgotPasswordForm} />

              <Route path='/course/create' component={WrappedNormalCreateCourseForm} />
              <Route path='/:courseId/lesson/create' component={WrappedNormalCreateLessonForm} />
              <Route path='/:courseId/test/create' component={WrappedNormalCreateTestForm} />
              <Route path='/:courseId/:questId/test/edit' component={EditTestPageWrapper} />
              <Route path='/:courseId/:lessonId/lesson/edit' component={EditLessonPageWrapper} />

              <Route path='/account' component={WrappedNormalAccountPageForm} />

              <Route exact path='/admin' component={AdminIndex} />
              <Route path='/admin/login' component={WrappedNormalAdminLoginForm} />
              <Route path='/admin/quip' component={WrappedNormalAdminSignupForm} />
              <Route path='/admin/dashboard' component={AdminDashboard} />

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
