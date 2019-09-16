import React from 'react';
import SearchForm from "./components/search";
import './App.css';

export default class App extends React.Component{
  render(){
    return (
      <div className="container">
        <SearchForm />
      </div>
    );
  }
}