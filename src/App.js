import React, { useState } from 'react';
import PollDisplay from './TaskA/PollDisplay';
import UserParticipation from './TaskA/UserParticipation';
import ThankYouMessage from './TaskA/ThankyouMessage';
import AnotherUserParticipation from './TaskA/AnotherUserParticipation';
import Timer from './TaskB/Timer';

function App() {

  const [options, setOptions] = useState([
    { id: 1, label: 'JavaScript', votes: 0 },
    { id: 2, label: 'Python', votes: 0 },
    { id: 3, label: 'Java', votes: 0 },
    { id: 4, label: 'C#', votes: 0 }
  ]);

  const [hasVoted, setVoted] = useState(false);

  const handleVote = (choiceId) => {
    if (!hasVoted) {
      setOptions((prevOptions) =>
        prevOptions.map((choice) =>
          choice.id === choiceId ? { ...choice, votes: choice.votes + 1 } : choice
        )
      );
      setVoted(true);
    }
  };

  const resetVote = () => {
    setOptions((prevChoices) =>
      prevChoices.map((choice) => ({ ...choice, votes: 0 }))
    );
    setVoted(false);
  };

  return (
    <div className='App'>
      <h1>Task A</h1>
      <h1>Polling App</h1>
      <PollDisplay choices={options} />
      {!hasVoted ? (
        <UserParticipation choices={options} handleVote={handleVote} />
      ) : (
        <ThankYouMessage />
      )}
      {hasVoted && <AnotherUserParticipation resetVote={resetVote} />}

      <br />
      
      <h1>Task B</h1>
      <Timer/>
    </div>
  );
}

export default App;