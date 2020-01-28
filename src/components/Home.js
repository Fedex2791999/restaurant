import React  from 'react';
import SlideAreaStart from './SlideAreaStart';
import Menu from './Menu';
import Elements from './Elements';
import OurMenu from './OurMenu';
import Contact from './Contact';
import AboutArea from './about/AboutArea';
import About from './about/About';
import Blog from './Blog';
import DeliciousArea from './DeliciousArea';
import Feedback from './Feedback';
import ReservationArea from './ReservationArea';
import Footer from './Footer';
import {  Switch, Route } from 'react-router-dom';
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
         
       <About/>
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
          <Route path="/single-blog"></Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>

        <Footer />
      </div>
    );
  
}
