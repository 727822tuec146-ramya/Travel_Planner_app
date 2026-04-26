import "./Services.css";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  const serviceInfoRow1 = [
    {
      header: "Best Flights",
      info: "Experience the pinnacle of comfort and convenience with our top flight services.",
      icon: "fas fa-plane-departure",
    },
    {
      header: "Best deals",
      info: "Unlock unbeatable travel deals and make your dream trips a reality!",
      icon: "fas fa-rupee-sign",
    },
    {
      header: "Railway Bookings",
      info: "Our railway booking services ensure a smooth, stress-free journey from start to finish.",
      icon: "fas fa-subway",
    },
  ];
  const serviceInfoRow2 = [
    {
      header: "Food And Drinks",
      info: "Our food and drinks are crafted to delight your taste buds and satisfy your cravings.",
      icon: "fas fa-utensils",
    },
    {
      header: "Hotels",
      info: "Find your home away from home in our beautifully appointed hotels.",
      icon: "fas fa-hotel",
    },
    {
      header: "Safe Travels",
      info: "Safe travels! Enjoy every moment of your journey and return with wonderful memories.",
      icon: "fas fa-clinic-medical",
    },
  ];

  return (
    <>
      <div className="container4">
        <section className="service" id="services">
          <h1>Have a look at our services!</h1>
          <div className="row2">
            {serviceInfoRow1.map((element) => {
              return (
                <ServiceCard
                  header={element.header}
                  info={element.info}
                  icon={element.icon}
                />
              );
            })}
          </div>
          <div className="row1">
            {serviceInfoRow2.map((element) => {
              return (
                <ServiceCard
                  header={element.header}
                  info={element.info}
                  icon={element.icon}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};
