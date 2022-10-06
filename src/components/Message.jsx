import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="message__info">
        <img src="https://images.unsplash.com/photo-1664801819763-01b6c3f10f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <span>Just now</span>
      </div>
      <div className="message__content">
        <p>Hello</p>
        <img src="https://images.unsplash.com/photo-1664801819763-01b6c3f10f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
      </div>
    </div>
  )
}

export default Message