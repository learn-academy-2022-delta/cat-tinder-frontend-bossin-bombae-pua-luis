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

            <div class="notfound">
            <div class="notfound-404">
            <h1 style={fontStyle}>404</h1>
            <h2 style={bckgrdmystyle}>Page not found</h2>
            </div>
            <a href="#" class="btn btn-primary">Go To Homepage</a>
            </div>
        )
    }
}

export default NotFound