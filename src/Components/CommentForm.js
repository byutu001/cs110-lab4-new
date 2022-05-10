import { useState } from "react";

const CommentForm = ({
  handleSubmit,
  submitLabel
}) => {
  const [text, setText] = useState("");
  const [username, setUsername] = useState("");
  const isTextareaDisabled = text.length === 0;

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(username,text);
    setText("");
    setUsername("");
  };

  return (
    <div className="postForm">
      <form onSubmit={onSubmit}>
        <textarea
          className="comment-form-username"
          value={username}
          placeholder="Name ..."
          onChange={(e) => setUsername(e.target.value)}
        />
    
        <textarea
          className="comment-form-text"
          value={text}
          placeholder="Write a new post..."
          onChange={(e) => setText(e.target.value)}
        />

        <button className="comment-form-button" disabled={isTextareaDisabled}>
          {submitLabel}
        </button>
      
     </form>
    </div>
  );
};

export default CommentForm;
