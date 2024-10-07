import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import data from './data.json';

const dataArray = data.results

const root = ReactDOM.createRoot(document.getElementById('root'));

const namesArray = ['John', 'Maynard', 'Kaynes'];

function NameLengthCounter(props) {
  console.log(dataArray)
  return (
    <h1>The Name {props.name} is {props.name.length} letters long</h1>
  );
}

function DisplayPerson(props) {
  console.log(props.person)
  return (
    <>
      <h1>{props.person.name.first}</h1>
      <img src={props.person.picture.medium}></img>
      <a>{props.person.quote}</a>
    </>
  )
}

root.render(
  // <>
  //   <h1>hello world</h1>
  //   <a>goodbye</a>
  // </>


  // <>
  //   {namesArray.map(name => (
  //     <NameLengthCounter key={name} name={name} />
  //   ))}
  // </>

  <>
    {dataArray.map(person => (
      <DisplayPerson person={person} />
    ))}
  </>
);

