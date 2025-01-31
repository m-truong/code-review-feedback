import React from 'react';

// TODO: pass props down into the ReviewSquare component
const ReviewSquare = ({ title, upvotes, downvotes }) => {

    // TODO: plan if passing upvote/downvote logic down as props or if it should be handled in this component
    // probably upvotes and downvotes in here
    return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        <div className="pa-10 w-300 card">
        {/* TODO: modularize this h2 title */}
          <h2>{title}</h2>
          <div className="flex my-30 mx-0 justify-content-around">
          {/* TODO: this button needs a single function that'll handle onClick for upVote*/}
            <button className="py-10 px-15" data-testid="upvote-btn-0">
              👍 Upvote
            </button>
          {/* TODO: this button needs a single function that'll handle onClick for downVote*/}
            <button className="py-10 px-15 danger" data-testid="downvote-btn-0">
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid="upvote-count-0">
            Upvotes: <strong>{0}</strong>
          </p>
          <p className="my-10 mx-0" data-testid="downvote-count-0">
            Downvotes: <strong>{0}</strong>
          </p>
        </div>
      </div>
    </div>
    )
};

export default ReviewSquare;