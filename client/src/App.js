import React from 'react';
import './App.css';
import axios from "axios";

import UserCard from "./components/UserCard";


class App extends React.Component {
  state = {
    user: [],
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/seanaleid`)
      .then(response =>{
        console.log(response)
        console.log(response.data.followers_url)
        this.setState({
          user: response.data
        });
        console.log(this.state);
      })
      .catch(err =>{
        console.log(`error`)
      })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <p>Hello world!</p>
        <UserCard />
        </header>
      </div>
    );
  };
}

export default App;
