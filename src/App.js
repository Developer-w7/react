import React from 'react';

import './App.css';





function fetchData(){
  fetch('http://jsonplaceholder.typicode.com/todos/1')
  .then(response =>  response.json())
  .then( myJson => console.log(JSON.stringify(myJson)))
  .catch(err => console.log('Some Thing Went Wrong') )
}

fetchData();



class Person {
 
  constructor(name) {
      this.name = name;
  }

  doWork(callback) {
    
    setTimeout(() => callback(this.name), 2000); 
}
}
var person = new Person("Scott");

person.doWork(function(result) {
    console.log(result);
    
});


function App() {
 
  return (
    <div className="App">
      <p>Workings</p>
    </div>
  );
}

export default App;
