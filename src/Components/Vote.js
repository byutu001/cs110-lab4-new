import React from 'react';

function Vote() {
  const [voteCount, setVoteCount] = React.useState(0);

  return (
    <>
      <button onClick={() => {
        setVoteCount(voteCount+1)
      }}>
        Upvote
      </button>
      <p>{voteCount}</p>
      <button onClick={() => {
        setVoteCount(voteCount - 1)
      }}>
          Downvote
      </button>
    </>
  )
}

export default Vote;
