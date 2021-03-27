import React from 'react';

const Sample = () => {
    // const sam =   new Date().getFullYear();
    const moment = require('moment-timezone');
    const fmt    = "HH:mm"
    const tmz    = "Australia/Sydney"
    return (
        <>
        <p>
           {/* {Date.now()}  */}
           {/* {new Date().getFullYear()} */}
           {/* {sam}  */}
           {new Date().getDay()}
           {/* {Date().getMonth()} 
           {Date().getDay} 
           {Date().getHours}   */}
           
        </p>
        <h1>

        </h1>
        </>
    )

};
     
    
     
     

export default Sample;