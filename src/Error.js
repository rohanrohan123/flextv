import React from 'react'

import { Link } from 'react-router-dom';
function Error() {
    return (
        <div>
            <div className="theme-layout">
        <div className="error-page">
            <div className="logo top-left"></div>
            <div id="container-inside">
              <div id="circle-small"></div>
              <div id="circle-medium"></div>
              <div id="circle-large"></div>
              <div id="circle-xlarge"></div>
              <div id="circle-xxlarge"></div>
              </div>
            <div className="error-data">
                <figure><img src="https://wpkixx.com/html/socimo/images/resources/error.png" alt="" /></figure>
                <h1>Page Not Found</h1>
                <Link to="/" className="main-btn" title="">Go Back to Home</Link>
                {/* <a className="main-btn" href="#" title="">Go Back to Home</a> */}
            </div>
        </div>	
    </div>
        </div>
    )
}

export default Error
