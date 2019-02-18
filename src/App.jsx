import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';


ReactDOM.render(
  <Container someString='' someNumber={5} />, document.querySelector('#target'),
);
