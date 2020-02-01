import React from 'react';
import SlideAreaStart from '../components/SlideAreaStart';
import Menu from '../components/Menu';
import Elements from './Elements';
import OurMenu from './OurMenu';
import Contact from './Contact';
import AboutArea from '../components/about/AboutArea';
import About from './About';
import Blog from './Blog';
import DeliciousArea from '../components/DeliciousArea';
import Feedback from '../components/Feedback';
import ReservationArea from '../components/ReservationArea';
import Footer from '../components/Footer';
import { Switch, Route } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      <Menu />
      <Switch>
        <Route exact path="/">
          <SlideAreaStart />
          <AboutArea />
          <DeliciousArea />
          <Feedback />
          <ReservationArea />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/menu">
          <OurMenu />
          <DeliciousArea />
          {/* <ReservationArea /> */}
        </Route>
        <Route path="/element">
          <Elements />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/single-blog"/>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}
