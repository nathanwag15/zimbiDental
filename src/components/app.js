import React, { Component } from 'react';

import NavigationComponent from "./navigation/navigation-container";
import Content from "./content/content";
import OfficeImage from './content/officeImage';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        
        <NavigationComponent />
        <OfficeImage />
        <Content />
      </div>
    );
  }
}
