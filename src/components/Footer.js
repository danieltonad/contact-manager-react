import React, { Component } from 'react'

class Footer extends Component {
    render() {
        // date
        return (
            <div className="footer py-3 bg-dark text-light text-lead text-center">
                <p> &copy; {new Date().getFullYear()} Daniel Solarin</p>
            </div>
        );
    }
}

export default Footer;