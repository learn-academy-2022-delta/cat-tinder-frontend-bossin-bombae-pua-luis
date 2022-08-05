import { render } from '@testing-library/react'
import React, { Component} from 'react'


class NotFound extends Component {
    render() {
        const bckgrdmystyle = {
            backgroundImage: "url(/wyc.jpeg)",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            height: "100vh",
        };
        const fontStyle = {
            textColor: "white",
            padding: "10px",
            fontFamily: "Arial",
            fontSize: "46pt",
            textAlign: "center",
            backgroundColor: "pink",
          };

        return (
            <div style={bckgrdmystyle}>
                <h1 style={fontStyle}> 404 NOT FOUND</h1>
                <p></p>
            
          </div>
            

        )
    }
}

export default NotFound