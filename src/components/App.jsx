import { Children } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { Layout } from './Layout/Layout';

export default function App() {
  return (
    <>
      <Layout />
      <ContactForm />
      <ContactList>({Children})</ContactList>
    </>
  );
}
