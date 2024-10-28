import Title from './PageTitle';
import UserCard from './UserCard';
import Footer from './Footer';

const App = () => {
  const title = "Welcome to My App";
  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ];
  const footerText = "© 2023 My App";

  return (
    <div>
      <Title title={title} />
      {users.map((user, index) => (
        <UserCard key={index} name={user.name} age={user.age} />
      ))}
      <Footer footerText={footerText} />
    </div>
  );
};

export default App;