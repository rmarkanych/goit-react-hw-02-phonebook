import Title from 'components/Title/Title';
import s from '../ContactForm/ContactForm.module.css';

const ContactForm = ({ handleInputChange, handleSubmit }) => {
  // const initialValue = {
  //   name: '',
  //   number: '',
  // };
  return (
    <form
      className={s.form}
      onSubmit={() => {
        handleSubmit();
      }}
    >
      <Title title="Name" />
      <label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={() => {
            handleInputChange();
          }}
        />
      </label>
      <Title title="Number" />
      <label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={() => {
            handleInputChange();
          }}
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
