import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { selectFiltredContacts } from '../../redux/contacts/selectors';
import { deleteContacts } from '../../redux/contacts/operations';
import { ContactsBtn, ContactsItem, ContactsList } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();

  const deleteContact = ({ _id, name }) => {
    console.log(_id, name);
    dispatch(deleteContacts(_id));
    Notiflix.Notify.info(
      `
    The contact ${name} has been successfully deleted!`
    );
  };

  const contactList = useSelector(selectFiltredContacts);
  console.log(contactList);

  return (
    <ContactsList>
      {contactList.length > 0 &&
        contactList.map(el => (
          <ContactsItem key={el._id}>
            <div>
              <b>{el.name}</b>: {el.number}
            </div>

            <ContactsBtn type="button" onClick={() => deleteContact(el)}>
              Delete
            </ContactsBtn>
          </ContactsItem>
        ))}
    </ContactsList>
  );
};

export default ContactList;
