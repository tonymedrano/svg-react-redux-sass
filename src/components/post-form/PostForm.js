import React, { Component } from 'react'
import { PropTypes } from "prop-types"
import { connect } from 'react-redux'

import { createPost } from "../../state/actions/postActions"

import './PostForm.scss'

class PostForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post)
    }

    render() {

        return (
            <article className="post">
                <div className="container">
                    <h2>Add post:</h2>
                    <div className="columns">
                    <form className="ui form post-form" onSubmit={this.onSubmit}>
                            <div className="field">
                                <label>Title</label>
                                <input type="text" name="title"
                                    onChange={this.onChange}
                                    value={this.state.title} placeholder="Title" />
                            </div>
                            <div className="field">
                                <label>Body</label>
                                <textarea name="body"
                                    onChange={this.onChange}
                                    value={this.state.body} />
                            </div>
                            <button className="ui button" type="submit">Submit</button>
                            </form>
                       </div>
                </div>
            </article>
                    )
                }
            }
            
PostForm.propTypes = {
                        createPost: PropTypes.func.isRequired,
                }
                
export default connect(null, {createPost})(PostForm)
