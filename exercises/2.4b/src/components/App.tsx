import './App.css';
import UserCard from './UserCard';

function App() {
  return (
    <div className="App">
      <UserCard name="Alice" age={30} isOnline={true} />
      <UserCard name="Bob" age={25} isOnline={false} />
      <UserCard name="Charlie" age={35} isOnline={true} />
    </div>
  );
}

export default App;