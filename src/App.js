import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.scss'

import {
  Menu,
  Header,
  Footer,
  Posts,
  PostForm
} from './components'

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Menu />
        <section className="content">
          <Posts></Posts>
         <PostForm />
        </section>
        <Footer />
      </div>
    )
  }
}

export default App
