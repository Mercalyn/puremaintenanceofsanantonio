import React, { lazy, Suspense } from 'react';
import './css/Nav.css';
import NavPage from './Nav';
import { Spinner, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//lazy loads
const HomePage = lazy(() => import("./Home"));
const FaqPage = lazy(() => import("./Faq"));
const TestimonialsPage = lazy(() => import("./Testimonials"));
const ContactPage = lazy(() => import("./Contact"));

//debug:: the switch aint workin, lazy load import works fine
function App() {
  return (
    <div>
      <Router>
        <NavPage />
        <Suspense fallback={
            <Container>
              <Spinner animation="grow" variant="primary">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </Container>
          }>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/faq" component={FaqPage} />
            <Route path="/testimonials" component={TestimonialsPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;