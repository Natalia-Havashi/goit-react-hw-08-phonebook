import {
  ContactDetails,
  ContactItem,
  DeleteBtn,
} from 'components/styled.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/actions';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem>
      <ContactDetails>
        {contact.name} : {contact.number}
      </ContactDetails>
      <DeleteBtn
        type="button"
        onClick={() => {
          dispatch(deleteContact(contact.id));
        }}
      >
        Delete
      </DeleteBtn>
    </ContactItem>
  );
};
