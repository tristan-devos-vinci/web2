import './UserCard.css';

interface UserCardProps {
  name: string;
  age: number;
  isOnline: boolean;
}

const UserCard = ({ name, age, isOnline }: UserCardProps) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Âge: {age}</p>
      <p className={isOnline ? 'online' : 'offline'}>
        {isOnline ? 'En ligne' : 'Hors ligne'}
      </p>
    </div>
  );
};

export default UserCard;