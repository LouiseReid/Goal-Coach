import React from 'react';
import { firebaseApp } from '../firebase'

class App extends React.Component {

  signOut(){
    firebaseApp.auth().signOut()
  }

  render(){
    return(
      <div>
        App
        <button
          className="btn btn-danger"
          onClick={() => this.signOut()}
          >
          Sign Out
        </button>
      </div>
    )
  }
}

export default App;
