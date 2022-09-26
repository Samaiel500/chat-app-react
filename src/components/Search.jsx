import React from 'react'

const Search = () => {
  return (
    <div className='search'>
        <div className="search__form">
            <input placeholder='Find a user' type="text" />
        </div> 
        <div className="user__chat">
            <img src="https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg" alt="" />
            <div className="user__chat-info">
                <span>Jane</span>
            </div>
        </div>
    </div>
  )
}

export default Search