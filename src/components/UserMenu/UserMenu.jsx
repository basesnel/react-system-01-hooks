export const UserMenu = ({ user, onLogOut }) => {
  return (
    <div>
      <span>Welcome, {user.name}</span>
      <button onClick={onLogOut}>Log Out</button>
    </div>
  );
};
