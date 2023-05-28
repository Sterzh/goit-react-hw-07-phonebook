import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from '../../redux/contactsSlice';
// import { deleteFilterContact } from '../../redux/filterSlice';
import { fetchContactsThunk } from '../../redux/operations';
import { useEffect } from 'react';

import { deleteContactThunk } from '../../redux/operations';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const renderList = filter.length === 0 ? contacts : filter;

  useEffect(() => {
    console.log('ghjcgjcghj');
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <ul className={css.contactList}>
      {renderList.map(e => {
        return (
          <li className={css.contactListItem} key={e.id}>
            {e.name}: {e.number}
            <button
              type="button"
              onClick={() => {
                dispatch(deleteContactThunk(e.id));
                // dispatch(deleteFilterContact(e.id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
