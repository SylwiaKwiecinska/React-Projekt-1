import Offer from "./Offer";

const servises = [
  {
    title: "Usługa1",
    isNew: true,
  },
  {
    title: "Usługa2",
    isNew: false,
  },
  {
    title: "Usługa3",
    isNew: false,
  },
  {
    title: "Usługa4",
    isNew: false,
  },
  {
    title: "Usługa5",
    isNew: false,
  },
  {
    title: "Usługa6",
    isNew: false,
  },
];

function SectionServices() {
  return (
    <section className="section-services" id="offer">
      <div className="container">
        <div className="servises">Czym zajmuje się nasza firma?</div>

        <div className="servises-list">
          {servises.map((service, index) => (
            <Offer title={service.title} key={index} isNew={service.isNew} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default SectionServices;
