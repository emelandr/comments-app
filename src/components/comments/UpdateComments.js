import React from "react";

const UpdateComments = (props) => {
  return (
    <div className='content'>
      <p className='item name'>{props.comment.name}</p>
      <p className='item'>{props.comment.text}</p>
      <p>{props.comment.date}</p>
      <button onClick={props.removeComment}>
        Удалить комментарий
      </button>
    </div>
  );
}

export default UpdateComments;