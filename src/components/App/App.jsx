import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BasketProvider } from '../../context/BasketContextProvider';
import content from '../../mocks/data/footer-content.json';
import tagline from '../../mocks/data/tagline.json';
import Loader from '../Loader/Loader';
import Container from '../Container';
import ProductItem from '../ProductItem';
import Header from '../Header';
import Footer from '../Footer';
import Description from '../../views/DescriptionView/Description';
import Params from '../../views/ParamsView/Params';
import PublicRoute from '../Routes/PublicRoute';

const HomeView = lazy(() =>
  import('../../views/HomeView/HomeView' /* webpackChunkName: "HomeView" */),
);
const OffersView = lazy(() =>
  import(
    '../../views/OffersView/OffersView' /* webpackChunkName: "OffersView" */
  ),
);
const CustomerServiceView = lazy(() =>
  import(
    '../../views/CustomerServiceView/CustomerService' /* webpackChunkName: "CustomerServiceView" */
  ),
);
const PrivacyPolicyView = lazy(() =>
  import(
    '../../views/PrivacyPolicyView/PrivacyPolicyView' /* webpackChunkName: "PrivacyPolicyView" */
  ),
);
const TermsAndConditionsView = lazy(() =>
  import(
    '../../views/TermsAndConditionsView/TermsAndConditions' /* webpackChunkName: "TermsAndConditionsView" */
  ),
);
const RegisterView = lazy(() =>
  import(
    '../../views/RegisterView/RegisterView' /* webpackChunkName: "RegisterView" */
  ),
);
const LoginView = lazy(() =>
  import('../../views/LoginView/LoginView' /* webpackChunkName: "LoginView" */),
);

export default function App() {
  return (
    <BasketProvider>
      <Container main>
        <Container background></Container>
        <Header />
        <Suspense
          fallback={
            <Loader
              ariaLabel={'ThreeDots'}
              height={100}
              width={100}
              radius={5}
              color={'#2f66e6'}
            />
          }
        >
          <Routes>
            <Route
              path="/"
              element={
                <HomeView
                  tagline={tagline.tagline}
                  message={tagline.message}
                  conditions={tagline.conditions}
                />
              }
            />
            <Route path="/offers" element={<OffersView />} />
            <Route path="/offers/:offersId" element={<ProductItem />}>
              <Route path="description" element={<Description />} />
              <Route path="params" element={<Params />} />
            </Route>
            <Route path="/customer-service" element={<CustomerServiceView />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyView />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditionsView />}
            />
            <Route
              path="/register"
              element={
                <PublicRoute redirectTo="/offers" restricted>
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute redirectTo="/offers" restricted>
                  <LoginView />
                </PublicRoute>
              }
            />
          </Routes>
        </Suspense>
        <Footer content={content} />
      </Container>
    </BasketProvider>
  );
}
