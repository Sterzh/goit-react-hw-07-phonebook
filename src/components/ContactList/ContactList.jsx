import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from '../../redux/operations';
import { useEffect } from 'react';

import { deleteContactThunk } from '../../redux/operations';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const filter = useSelector(state => state.filter);
  const renderList = filter === '' ? contacts : filter;

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      {console.log(renderList.length)}
      {console.log(filter)}
      {console.log(filter.length)}
      {renderList.length === 0 && filter !== [] ? (
        <div className={css.contactListFilterError}>
          Oops! Nothing found, change the search value.
        </div>
      ) : (
        <ul className={css.contactList}>
          {renderList.map(e => {
            return (
              <li className={css.contactListItem} key={e.id}>
                {e.name}: {e.number}
                <button
                  type="button"
                  onClick={() => {
                    dispatch(deleteContactThunk(e.id));
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ContactList;
