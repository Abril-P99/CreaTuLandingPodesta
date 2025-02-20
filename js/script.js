// src/components/NavBar.js
import React from 'react';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Tienda React</h2> {/* Aquí puedes colocar el logo de tu tienda */}
      </div>
      <ul className="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;

// src/components/CartWidget.js
import React from 'react';

function CartWidget() {
  return (
    <div className="cart-widget">
      <img src="https://iconarchive.com/download/i107177/google/noto-emoji-animals-nature/22215-shopping-cart.ico" alt="Carrito" />
      <span>0</span> {/* Aquí irá la cantidad de productos en el carrito */}
    </div>
  );
}

export default CartWidget;

// src/components/ItemListContainer.js
import React from 'react';

function ItemListContainer({ mensaje }) {
  return (
    <div className="item-list-container">
      <h1>{mensaje}</h1> {/* Aquí recibimos el mensaje de bienvenida */}
    </div>
  );
}

export default ItemListContainer;

// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './styles/styles.css'; // Si tienes un archivo de estilos

function App() {
  const mensaje = "¡Bienvenido a nuestra tienda online!";

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer mensaje={mensaje} />
    </div>
  );
}

export default App;