import { Filter } from '../Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from '../../redux/operations';
import { useEffect } from 'react';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectStatusFilter,
} from 'redux/selectors';
import { deleteContactThunk } from '../../redux/operations';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectStatusFilter);
  const renderList = filter === '' ? contacts : filter;

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <section>
      <h2 className={css.contactListTitle}>Contacts</h2>
      <Filter />
      {isLoading && !error && (
        <b className={css.contactListLoading}>Request in progress...</b>
      )}
      {contacts.length !== 0 && filter.length === 0 ? (
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
    </section>
  );
};

export default ContactList;
