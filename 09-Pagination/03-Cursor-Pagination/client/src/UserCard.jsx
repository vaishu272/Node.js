const UserCard = ({ user }) => {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-lg p-6 hover:shadow-purple-500/20 hover:-translate-y-1 transition duration-300">
      <h2 className="text-2xl font-semibold text-purple-400 mb-4">
        {user.name}
      </h2>

      <div className="space-y-2 text-slate-300">
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Age:</strong> {user.age}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
        <p>
          <strong>City:</strong> {user.city}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
