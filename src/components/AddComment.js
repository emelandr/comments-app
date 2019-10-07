import React from "react";

const AddComment = (props) => {
  return (
    <div>
      <div>
        <h3>Ваше имя</h3>
        <input 
          type='text'
          value={props.state.newName}
          onChange={props.changeName}
        />
      </div>

      <div>
        <h3>Комментарий</h3>
        <textarea
          value={props.state.newText}
          onChange={props.changeText}
        />
      </div>

      <button
        onClick={props.addComment}
        disabled={props.state.nameIsEmpty || props.state.textIsempty}
      >
        Добавить комментарий
      </button>
    </div>
  );
}

export default AddComment;