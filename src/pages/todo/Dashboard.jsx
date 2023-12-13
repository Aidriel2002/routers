export default function Dashboard({ user }) {
  return (
    <div>
      Dashboard
      <p>{user.displayName}</p>
    </div>
  );
}
