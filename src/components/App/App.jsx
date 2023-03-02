import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Container from '../Container';
import Header from '../Header';
import Footer from '../Footer';
import Loader from '../Loader/Loader';

const HomeView = lazy(() =>
  import('../../views/HomeView/HomeView' /* webpackChunkName: "HomeView" */),
);
const RegisterView = lazy(() =>
  import(
    '../../views/RegisterView/RegisterView' /* webpackChunkName: "RegisterView" */
  ),
);
const LoginView = lazy(() =>
  import('../../views/LoginView/LoginView' /* webpackChunkName: "LoginView" */),
);
const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Suspense
          fallback={
            <Loader
              ariaLabel={'ThreeDots'}
              height={100}
              width={100}
              radius={5}
              color={'#708db3'}
            />
          }
        >
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/register" element={<RegisterView />} />
            <Route path="/login" element={<LoginView />} />
          </Routes>
        </Suspense>
      </Container>
      <Footer />
    </>
  );
};

export default App;
