const ContactList = ({ contactsList, removeContact }) => {
  return (
    <div>
      {contactsList().length < 1 ? (
        <h2>Add new contact!</h2>
      ) : (
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {contactsList().map(({ id, name, number }) => {
            return (
              <li key={id} style={{ display: 'flex', alignItems: 'center' }}>
                <p>
                  {name}: {number}
                </p>
                <button
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '25px',
                    width: '100px',
                    marginLeft: '10px',
                    cursor: 'pointer',
                    background: 'lightGray',
                    border: 'none',
                    borderRadius: '5px',
                  }}
                  onClick={e => removeContact(id)}
                >
                  Delete
                  <svg
                    style={{ marginLeft: '5px' }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
