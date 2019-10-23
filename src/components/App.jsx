import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'styles/app.scss';
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Performances from './pages/Performances.jsx';
import Research from './pages/Research.jsx';
import Media from './pages/Media.jsx';
import Footer from './Footer.jsx';

const pages = {
  about: About,
  projects: Projects,
  performances: Performances,
  research: Research,
  media: Media,
};

const App = () => {
  const [page, setPage] = useState(Object.keys(pages)[0]);

  const PageComponent = pages[page];

  return (
    <div>
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Header />
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={3} md={2}>
            <Nav
              currentPage={page}
              pages={Object.keys(pages)}
              setPage={setPage}
            />
          </Col>
          <Col xs={12} sm={9} md={8}>
            <PageComponent />
          </Col>

          <Col xs={0} sm={0} md={2} />
        </Row>

        <Row>
          <Col xs={12}>
            <Footer />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default App;
