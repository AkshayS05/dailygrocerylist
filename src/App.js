import { useState } from 'react';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import SearchItem from './SearchItem';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('shopping list')),
  );
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const handleChange = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    );
    setAndSaveItem(listItems);
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItem(listItems);
  };
  const setAndSaveItem = (listItems) => {
    setItems(listItems);
    localStorage.setItem('shopping list', JSON.stringify(listItems));
  };
  const addItem = (item) => {
    // define the id of the new item
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItem(listItems);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };
  return (
    <div className="App">
      <Header title="Groceries List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase()),
        )}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Footer itemsLength={items.length} />
    </div>
  );
}

export default App;
