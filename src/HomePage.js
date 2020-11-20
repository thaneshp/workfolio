import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import { withRouter } from "react-router";

//Components to be used in rendering of home page.
import Slider from './components/slider';
import Footer from './components/footer';


const HomePage = (props) => {

  return (
    <div>
      <Slider />
      <Footer />
    </div>
  );
}

export default withRouter(HomePage);
