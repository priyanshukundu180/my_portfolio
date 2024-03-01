import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.png';
import letsConnect from 'assets/illustrations/letsConnect.png'
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={letsConnect} alt="Crio.Do" />
    </Thumbnail>
  </Wrapper>
);
