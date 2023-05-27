function PollDisplay({ choices }) {
    return (
      <div>
        <h2>Question</h2>
        <ul>
          {choices.map((choice) => (
            <li key={choice.id}>
              {choice.label}: {choice.votes} votes
            </li>
          ))}
        </ul>
      </div>
    );
  }
export default PollDisplay; 

