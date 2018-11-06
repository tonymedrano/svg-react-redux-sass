import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.scss'

import {
  Menu,
  Header,
  Post,
  Form
} from './components'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: []
    };
  }

  async getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return this.setState({ posts: data })
  }

  componentWillMount() {
    this.getPosts()
  }

  render() {
    const posts = this.state.posts.map((post) => {
      if (post.id >= 3) {
        return
      }
      return <Post key={post.id} post={post} />
    });
    return (
      <div>
        <Header />
        <Menu />
        <section className="content">
          <div className="full-bleed cool-photo"></div>

          <article className="post">
            <div className="container">
              <h2>This is the super cool section title</h2>
              <div className="columns">
                {posts}
              </div>
            </div>
          </article>

          <article className="post">
            <div className="container">
              <h3>This is another section sub-title</h3>
              <div className="columns thirds">
              <Form />
              </div>
            </div>
          </article>
        </section>

        <footer className="footer">
          <div className="container">
            <p>Footer Text, Yo. Made with love by <a href="http://tonymedrano.com">Tony Medrano</a></p>
          </div>
        </footer>
      </div>
    )
  }
}

export default App
