import ItemList from './ItemList';
const Content = ({ items, handleChange, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: '2rem' }}>Hurah! Your list is empty!</p>
      )}
    </main>
  );
};

export default Content;
