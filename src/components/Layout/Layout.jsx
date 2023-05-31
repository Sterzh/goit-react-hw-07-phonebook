import css from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <header className={css.Header}>
        <h1 className={css.HeaderTitle}>Phonebook</h1>
      </header>
      <main className={css.Main}></main>
    </>
  );
};
