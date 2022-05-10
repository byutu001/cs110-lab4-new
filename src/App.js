import React from 'react';
import './App.css';
import CommentForm from './Components/CommentForm'
import Comment from './Components/Comment'
import generateUUID from './utils/uuid';

class App extends React.Component { //props, state
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      activeComment: null,
      // Lab 4 edit: line 55
    };
  }

  // Lab 4 Edits: render displays the content on the browser
  render() {
    const { comments, activeComment } = this.state;

    console.log(comments)
    return (
      <div className="App">
        <div className="comment-form-title">Create Post</div>
        <CommentForm
          submitLabel="Post"
          handleSubmit={(username, text) => {
            const { comments } = this.state; //grabbing the comments from the state
            const commentArray = comments;
            commentArray.push({
              id: generateUUID(),
              username,
              body: text,
              createdAt: new Date().toISOString(),
              parentId: null,
              level: 0 // main comments are at 0, replies are at 1, etc.
            });
            //State variable will update automatically in React
            //Also changes what is on the page
            this.setState({ comments: commentArray });
          }}
        />

        {/* Lab 4 Edit: Displays the comments */}
        {
          comments.filter(comment => comment.parentId == null)
            .map(comment => (
              <React.Fragment key={comment.id}>
                <Comment
                  comment={comment}
                  replies={
                    comments.filter(reply => reply.parentId == comment.id)
                    // .map returns the array within from old array
                    // -> it returns the Comments component from the Comments
                  }
                  activeComment={activeComment}
                  parentId={comment.parentId}
                  // Lab 4 Edit: ActiveComment = lets it know where the user is currently commenting on
                  setActiveComment={({ id, parentId }) => {
                    this.setState({
                      activeComment: {
                        id,
                        parentId,
                        type: 'replying'
                      }
                    });
                  }}
                  addComment={(username, text, replyId) => {
                    const newComment = {
                      id: generateUUID(),
                      username,
                      body: text,
                      createdAt: new Date().toISOString(),
                      parentId: comment.id,
                      level: comment.level + 1
                    };

                    const commentArray = comments;
                    commentArray.push(newComment);

                    this.setState({
                      comments: commentArray,
                      activeComment: {}
                    });
                  }}
                />
                {/* line 70: <> = React fragment aka it calls whatever is inside;
                line 40: it checks the length of replies */}
              </React.Fragment>
            ))
        }

      </div>
    );
  }
}

export default App;
