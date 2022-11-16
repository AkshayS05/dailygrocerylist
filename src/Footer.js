const Footer = ({ itemsLength }) => {
  return (
    <footer>
      <p>
        {itemsLength} List {itemsLength === 1 ? 'Item' : 'Items'}
      </p>
    </footer>
  );
};

export default Footer;
