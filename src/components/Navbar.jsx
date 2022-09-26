import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
          <span className="logo">Lama Chat</span>
          <div className="user">
              <img src="https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg" alt="" />
              <span>John</span>
              <button>Log out</button>
          </div>
    </div>
  )
}

export default Navbar