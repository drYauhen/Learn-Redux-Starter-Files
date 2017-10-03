import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import { BrowserRouter, Link} from 'react-router-dom';



class Main extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <h1>
                        <Link to={"/"} >Reduxtogram</Link>
                    </h1>

                </div>
            </BrowserRouter>
        )
    }
}

export default Main;