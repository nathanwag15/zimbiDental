import React from 'react';
import { render } from 'node-sass';
import background from "../images/background/office.jpg"

export default function() {
    return(
        <div className="background-image" 
        style={{
          backgroundImage: src={background}
        }}
      />
    ) 
}