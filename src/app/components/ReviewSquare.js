import React from 'react';
import { useState } from 'react';
import { useEffect, useRef } from 'react';

// TODO: pass props down into the ReviewSquare component
const ReviewSquare = ({ title }) => {

    const [upvoteCount, setUpvoteCount] = useState(0);
    const [downvoteCount, setDownvoteCount] = useState(0);

    const handleUpvoteClick = (e) => {
        setUpvoteCount(upvoteCount + 1);
        console.log(e);
        // e.target.style.backgroundColor = 'green';
    };

    const handleDownvoteClick = (e) => {
        // P: check <button> properties
        setDownvoteCount(downvoteCount + 1);
        console.log(e);
        // e.target.style.backgroundColor = 'red';
    };

    const upvoteRef = useRef(null);
    const downvoteRef = useRef(null);

    useEffect(() => {
        if (upvoteRef.current) {
            upvoteRef.current.style.border = '2px solid green';
            const timer = setTimeout(() => {
                upvoteRef.current.style.border = '';
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [upvoteCount]);

    useEffect(() => {
        if (downvoteRef.current) {
            downvoteRef.current.style.border = '2px solid red';
            const timer = setTimeout(() => {
                downvoteRef.current.style.border = '';
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [downvoteCount]);


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
            <button onClick={handleUpvoteClick} className="py-10 px-15" data-testid="upvote-btn-0">
              👍 Upvote
            </button>
          {/* TODO: this button needs a single function that'll handle onClick for downVote*/}
            <button onClick ={handleDownvoteClick} className="py-10 px-15 danger" data-testid="downvote-btn-0">
              👎 Downvote
            </button>
          </div>



          <p  className="my-10 mx-0" data-testid="upvote-count-0">
          {/* TODO: animate this change */}
            Upvotes: <strong ref={upvoteRef}>{upvoteCount}</strong>
          </p>
          <p ref={downvoteRef} className="my-10 mx-0" data-testid="downvote-count-0">
          {/* TODO: animate this change */}
            Downvotes: <strong ref={downvoteRef}>{downvoteCount}</strong>
          </p>
        </div>
      </div>
    </div>
    )
};

export default ReviewSquare;