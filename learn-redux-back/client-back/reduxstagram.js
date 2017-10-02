// import React, { Component } from 'react'

// class componentName extends Component {
//     render () {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

// export default componentName


import React from 'react';

import { render } from 'react-dom';
import { Main } from './components/Main'

import css from './styles/style.styl';

render (
    <Main/>,
    document.getElementById('root')
 );
