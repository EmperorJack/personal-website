import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import 'styles/app.scss';
import { toRoute } from 'helpers';
import { pages, DefaultPageComponent } from 'pages';
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

const App = () => (
  <Router basename="/">
    <Grid fluid>
      <Row>
        <Col xs={12}>
          <Header />
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={3} md={2}>
          <Nav />
        </Col>
        <Col xs={12} sm={9} md={8}>
          <Switch>
            <Route exact path='/'>
              <DefaultPageComponent />
            </Route>

            {Object.entries(pages).map(([page, PageComponent]) => (
              <Route key={page} path={toRoute(page)}>
                <PageComponent />
              </Route>
            ))}

            <Route exact path='*'>
              <Redirect to='/' />
            </Route>
          </Switch>
        </Col>

        <Col xs={0} sm={0} md={2} />
      </Row>

      <Row>
        <Col xs={12}>
          <Footer />
        </Col>
      </Row>
    </Grid>
  </Router>
);

export default App;
