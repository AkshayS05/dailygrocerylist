import LineItem from './LineItem';

const ItemList = ({ items, handleChange, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemList;
