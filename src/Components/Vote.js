import React from 'react';

function Vote() {
  const [voteCount, setVoteCount] = React.useState(0);

  return (
    <>
      <button className="upvote" onClick={() => {
        setVoteCount(voteCount+1)
      }}>
        Upvote
      </button>
      
      <button className="downvote" onClick={() => {
        setVoteCount(voteCount - 1)
      }}>
          Downvote
      </button>

      <div className='voteNum'>{voteCount}</div>

    </>
  )
}

export default Vote;
