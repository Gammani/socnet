import React from 'react';
import './App.css';

function App() {
  return (
      <div className="app-wrapper">
        <header className="header">
          <img src="https://s2.logaster.com/static/v3/img/products/logo.png"/>
        </header>
        <nav className="nav">
          <div>
            <a>Profile</a>
          </div>
          <div>
            <a>Dialogs</a>
          </div>
          <div>
            <a>News</a>
          </div>
          <div>
            <a>Music</a>
          </div>
          <div>
            <a>Setting</a>
          </div>
        </nav>
        <div className="content">
          <div className="img-header">
            <img src="https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg"/>
          </div>
          <div>
            <img src='https://ramonllullenglish4all.files.wordpress.com/2010/02/african_man.jpg'/>
          </div>
          <div>
            ava + descritpion
          </div>
          <div>
            My posts
            <div>
              New post
              <div>post 1</div>
              <div>post 2</div>
              <div>post 3</div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
