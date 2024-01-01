import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const Info = styled.div`
border-sizing:border-box;
border:2px solid black;
  margin-left:10px;
  margin-right:10px;
  padding: 15px;
`;

const Cont = styled.div`
  margin-top: 60px; 
  padding: 20px;
`;

const Contact = () => {
  return (
    <Cont>
      <Info>
        <p> <h3>e-mail : </h3>eportalmanaging@gmail.com</p> <br />
<p> <h3>Contact Details : </h3>011-23116400, 23116401, 23116402 </p>
        </Info>
    </Cont>
  );
};

export default Contact;


