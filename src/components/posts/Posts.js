import React, { Component } from 'react'

import { connect } from 'react-redux'
import { PropTypes } from "prop-types"

import { fetchPosts } from "../../state/actions/postActions"

import { Post } from "../";

class Posts extends Component {

  componentWillMount() {
    this.props.fetchPosts()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  render() {
    const posts = this.props.posts.map((post) => {
      return <Post key={post.id} post={post} />
    });
    return (
      <article className="post">
        <div className="container">
          <h2>This is the super cool section title</h2>
          <div className="columns">
            {posts}
          </div>
        </div>
      </article>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts)
