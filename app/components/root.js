import React from 'react'
import {HashRouter, Route, Link} from 'react-router-dom'
import Candies from './candies'

const Root = () => {
  return (
    <HashRouter>
    <div>
      <nav>
        Goodie Bag
        <Link to='/candies' component={Candies}>All Candy</Link>
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <Route path='/candies' component={Candies} />
      </main>
    </div>
    </HashRouter>
  )
}

export default Root
