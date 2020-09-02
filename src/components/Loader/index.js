import React from 'react';

import './styles.css';

function Loader() {
    return(
        <>
        <center>
            <div class="loader" id="loader"></div>
            <div class="loader" id="loader2"></div>
            <div class="loader" id="loader3"></div>
            <div class="loader" id="loader4"></div>
            <span id="text">LOADING...</span>
        </center>
        </>

    )
}

export default Loader;