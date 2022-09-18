const ContactList = ({ contactsList, removeContact }) => {
  return (
    <div>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {contactsList().map(({ id, name, number }) => {
          return (
            <li key={id} style={{ display: 'flex', alignItems: 'center' }}>
              <p>
                {name}: {number}
              </p>
              <button
                style={{ height: '20px', marginLeft: '10px' }}
                onClick={e => removeContact(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
