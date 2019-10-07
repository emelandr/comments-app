import React from "react";
import UpdateComments from "./UpdateComments";

const Comments = (props) => {
  let isEmptyComment = props.state.comments.length;
  return (
    <div>
      { !isEmptyComment ? (
        <p>Нет комментариев</p>
      ) : (
        props.state.comments.map((comment, i) => {
          return (
            <UpdateComments
              comment={comment}
              removeComment={props.removeComment.bind(null, i)} 
              key={i}
            />
          );
        }))
      }
      
    </div>
  );
}

export default Comments;