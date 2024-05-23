export default function Metrics(props) {
  const { components, downloads, followers, newUser } = props;

  return (
    <div className="row metrics">
      <div className="col components">
        <h1>{components}</h1>
        <p>Components</p>
      </div>
      <div className="col downloads">
        <h1>{downloads}</h1>
        <p>Downloads</p>
      </div>
      <div className="col followers">
        <h1>{followers}</h1>
        <p>Followers</p>
      </div>
      <div className="col users">
        <h1>{newUser}</h1>
        <p>New User</p>
      </div>
    </div>
  );
}