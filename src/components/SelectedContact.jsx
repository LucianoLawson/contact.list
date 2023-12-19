import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);
  SelectedContact.propTypes = {
    selectedContactId: PropTypes.number.isRequired,
    setSelectedContactId: PropTypes.func.isRequired,
  };
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const data = await response.json();
        setContact(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchContact();
  }, [selectedContactId]);

  return (
    <div>
      <h2>Contact Details</h2>
      {contact && (
        <div>
          {/* Display the contact details as desired */}
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          {/* Add other details you want to display */}
        </div>
      )}
      <button onClick={() => setSelectedContactId(null)}>Back to Contact List</button>
    </div>
  );
}