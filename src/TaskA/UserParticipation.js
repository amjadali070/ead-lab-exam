function UserParticipation({ choices, handleVote }) {
    return (
      <div>
        <h3>Answer Choices:</h3>
        <ul>
          {choices.map((choice) => (
            <li key={choice.id}>
              <button onClick={() => handleVote(choice.id)}>
                {choice.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default UserParticipation;