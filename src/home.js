import React from 'react';
//import img from './bank.svg'
import bank from './bank.svg'
import * as ReactBootstrap from 'react-bootstrap';
function Home() {
  return (
    <>

<ReactBootstrap.Card className="bg-dark text-black">
  
  <ReactBootstrap.Card.ImgOverlay>
    <ReactBootstrap.Card.Title>
    <h1><img src={bank} width="50" height="40" alt="description"></img> Bank</h1>
    </ReactBootstrap.Card.Title>
    <br/>
    <ReactBootstrap.Card.Text>
     <h5>Welcome to your banking portal. Please choose an action from the menu above. </h5>
    </ReactBootstrap.Card.Text>
    <ReactBootstrap.Card.Text><h5>Thank you for visiting!</h5></ReactBootstrap.Card.Text>
  </ReactBootstrap.Card.ImgOverlay>
</ReactBootstrap.Card>
</>
  );
}

export default Home;