import React from 'react'
import Contact from './components/contacts/contact';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Puzzle from './components/puzzle/puzzle';


class App extends React.Component {


  render() {
    return (
      <div className="app d-flex flex-column justify-content-center align-items-center">
        <BrowserRouter>
          <div>
            <nav className="m-3" >
              <Link className="m-2" to="/">Kontakty</Link>
              <Link className="m-2" to="/kviz">Kvíz</Link>
            </nav>
            <Switch>
              <Route path='/kviz' component={Puzzle} />
              <Route path='/' component={Contact} />
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    )
  }
}

export default App
