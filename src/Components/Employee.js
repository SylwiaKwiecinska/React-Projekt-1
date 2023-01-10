function Employee({ name, title, position, description, image }) {
  return (
    <>
      <div className="employee">
        <div
          className="ellipse"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="text">
          <h3>
            {name} {title} [{position}]
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
export default Employee;
