import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faGooglePlusG, faGithub } from '@fortawesome/fontawesome-free-brands'
import { library } from '@fortawesome/fontawesome-svg-core'

class Social extends Component {

    componentWillMount() {
        library.add(faStroopwafel)
    }

    render() {
        return (
            <div className="social">
                <a href="#"><FontAwesomeIcon icon={faTwitter} className="icons-social" /></a>
                <a href="#"><FontAwesomeIcon icon={faFacebook} className="icons-social" /></a>
                <a href="#"><FontAwesomeIcon icon={faGooglePlusG} className="icons-social" /></a>
                <a href="#"><FontAwesomeIcon icon={faGithub} className="icons-social" /></a>
            </div>
        )
    }
}

export default Social
