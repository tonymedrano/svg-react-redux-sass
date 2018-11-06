import React, { Component } from 'react'

import { Social } from "../index";

class Post extends Component {
    render() {
        return (
            <div className="item">
                <h4 className="item-title">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <Social />
                {/* <img src={this.props.post.image} className="item-image" /> */}
            </div>
        )
    }
}

export default Post
