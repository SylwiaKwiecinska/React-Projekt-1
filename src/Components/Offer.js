function Offer({ title, isNew }) {
  return (
    <div className={isNew ? "box newBox" : "box"}>
      <p className="service">{title}</p>
      {isNew && <p className="serviceIsNew">(nowość)</p>}
      {isNew && <div className="orange-ellipse"></div>}
    </div>
  );
}
export default Offer;
