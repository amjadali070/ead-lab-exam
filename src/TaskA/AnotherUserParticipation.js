function AnotherUserParticipation({ resetVote }) {
    return (
      <div>
        <p>Another user wants to participate:</p>
        <button onClick={resetVote}>Reset Selection</button>
      </div>
    );
  }
  
  export default AnotherUserParticipation;