function PollDisplay({ choices }) {
    return (
      <div>
        <h4>What is your favorite programming language</h4>
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

