import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai';
import { Cart } from '.';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <div className="wrapper">
        <div className="begining">
          <div className="language">EN</div>
          <div className="search-container">
            <input className="input-l" />
            <AiOutlineSearch style={{ color: 'gray', fontSize: 18 }} />
          </div>
        </div>
        <div className="middle">
          <div className="logo">
            <Link href="/">Vormir</Link>
          </div>
        </div>
        <div className="last">
          <div className="menu-item">
            <button
              type="button"
              className="cart-icon"
              onClick={() => setShowCart(true)}
            >
              <AiOutlineShopping />
              <span className="cart-item-qty">{totalQuantities}</span>
            </button>
          </div>
        </div>
      </div>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
