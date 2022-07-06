import React from 'react';
import './Spinnerwheel.css';


 const Spinnerwheel  {
 
 
   
    const { randomnumber, items } = props;
    const wheelVars = {
      '--nb-item': items.length,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
      '--selected-item': randomnumber,
    };
    const spinning = randomnumber !== null ? 'spinning' : '';

    return (
      <div className="wheel-container">
        <div className={`wheel ${spinning}`} style={wheelVars} onClick={props.selectedItem}>
          {items.map((item, index) => (
            <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
           
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Spinnerwheel;
