import Heading from "../UI/Heading";
import VenuesItem from "../VenuesItem";
import styles from "./VenuesSection.module.scss";
const venues = [
  {
    img: "/venues/christchurch.webp",
    city: "Christchurch",
    text: (
      <>
        <p>The first stop on the Timeless Summer Tour series is Christchurch!</p> <br />
        <p>
          Located in the heart of the South Island, Christchurch is home to a diverse natural
          environment with plenty to offer. With wide open spaces, modern architecture, heritage
          buildings and a revitalised city centre, Christchurch is a city where people can
          experience energy and tranquillity in the same visit.
        </p>
      </>
    ),
  },
  {
    img: "/venues/christchurch.webp",
    city: "Napier",
    text: (
      <>
        <p>
          Stop two is Napier&apos;s Church Road Winery, providing the ultimate backdrop for the
          Timeless Summer Tour concert. 
        </p>{" "}
        <br />
        <p>
          Famous for its beautifully lined streets of Art Deco buildings and home to fine wineries,
          quality eateries, family friendly activities and a scenic marine parade, Napier is a
          stunning place to live, visit and explore.
        </p>
      </>
    ),
  },
  {
    img: "/venues/christchurch.webp",
    city: "New Plymouth",
    text: (
      <>
        <p>
          Next up is the Bowl of Brooklands – a world-class natural amphitheatre in the vibrant city
          of New Plymouth. 
        </p>{" "}
        <br />
        <p>
          With picturesque parks and gardens, stunning hiking spots and walks, art galleries,
          family-friendly fun and a sunny climate, there is plenty to do, see and enjoy in New
          Plymouth.
        </p>
      </>
    ),
  },
  {
    img: "/venues/christchurch.webp",
    city: "Tauranga",
    text: (
      <>
        <p>
          Home to New Zealand&apos;s Best Beach, Mount Maunganui is the fourth stop on the Timeless
          Summer Tour series. 
        </p>{" "}
        <br />
        <p>
          Take a walk up to the iconic peak of Mauao, stroll the white sand along Main Beach, take a
          dip in the relaxing waters of Pilot Bay or enjoy a coffee at one of the many nearby cafes
          and restaurants. The Mount is a relaxed beach town where people love to live and play.
        </p>
      </>
    ),
  },
  {
    img: "/venues/christchurch.webp",
    city: "Auckland",
    text: (
      <>
        <p>
          We end New Zealand&apos;s Timeless Summer Tour in Aotearoa&apos;s biggest city, Auckland.
        </p>
        <br />
        <p>
          Auckland is a multi-cultural destination that provides a plethora of entertainment
          opportunities. From native forests and natural resources to food, music and culture
          Auckland combines varied experiences for all to enjoy.
        </p>
      </>
    ),
  },
];
export default function VenuesSection() {
  return (
    <section className={`${styles.section}`}>
      <div className="wrap relative z-10 ">
        <Heading addClasses="text-center">SUMMER CONCERT TOUR VENUES</Heading>
        <div className={styles.venuesList}>
          {venues.map((venue, i) => (
            <VenuesItem key={venue.city} venue={venue} leftSide={i % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
