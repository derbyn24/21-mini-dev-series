import './App.scss';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import ReduxComponent from '../ReduxComponent';

function App() {
  const navItems = [{name: "Home", address: "/"},{name: "Redux Demo", address: "/reduxdemo"}];

  return (
    <div className="App">
      <Router>
        <header>
          <h1>Nick Derby</h1>
          {
            navItems.map((item, i) => {
              return(
                <Link className="navitem" to={navItems[i].address}>{navItems[i].name} Page</Link>
              );
            })
          }
        </header>

        <Switch>
          <Route path="/">
            <div className="home">
              <div className="box">
                <h2>Hello Everyone!</h2>
                <p>My name is Nick Derby and I am a '24 at Dartmouth College. I am originally from Darien, CT.</p>
                <p>At Dartmouth, I am a prospective Computer Science major. Outside of classes, I play the piano and am part of the Club Tennis Team.</p>
                <p>In addition to tennis and piano, I enjoy skiing, traveling, and learning about the world.</p>
              </div>

              <div className="box">
                <h2>Piano</h2>
                <p>Some works I have recently played include:</p>
                <ul>
                    <li>Sonata No. 3 in B Minor (Chopin)</li>
                    <li>Sonetto 104 de Petrarca (Liszt)</li>
                    <li>Jeux d'Eau (Ravel)</li>
                    <li>Hungarian Rhapsody No. 2 (Liszt)</li>
                    <li>Ballade No. 3 in A-flat Major (Chopin)</li>
                </ul>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/xjsM1gTx1fc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>This is a recording of me performing Chopin's Fantaisie Impromptu in 2019. You can listen to more of my piano recordings on my <a href="https://www.youtube.com/channel/UCkZDoY8U5ybgOl9W1keso5A">YouTube channel</a>.</p>
              </div>
            </div>
          </Route>

          <Route path="/reduxdemo">
            <ReduxComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
