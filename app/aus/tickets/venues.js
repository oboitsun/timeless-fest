const yarra_valley = {
  title: "Yarra Valley",
  slug: "yarra-valley",
  time: "JAN 24;2PM-10PM",
  order: 1,
  tiers: [
    {
      id: "ga",
      title: "General Admission",
      prices: (
        <ul>
          <li>
            GA (Earlybird): <b>$189*</b>
          </li>
          <li>
            GA (1st Release): <b>$219*</b>
          </li>
          <li>
            GA (Final Release): <b>$229*</b>
          </li>
        </ul>
      ),
      inclusions: (
        <p>
          Access to the General Admission areas of the venue. Patrons are requested to bring a camp
          chair or small rug to the event as no seating is provided in this area.
        </p>
      ),
    },
    {
      id: "golden",
      title: "Golden views experience ",
      prices: (
        <p>
          <b>$299*</b>
        </p>
      ),
      inclusions: (
        <p>
          Exclusive access to Front of stage areas of the venue plus the General Admission areas.
          Early access to the venue. Patrons are requested to bring a camp chair or small rug to the
          event as no seating is provided in these areas.
        </p>
      ),
    },
    {
      id: "vip-garden",
      title: "VIP + Garden Bar Experience",
      prices: (
        <p>
          <b>$319*</b>
        </p>
      ),
      inclusions: (
        <>
          <p>
            Access to the General Admission areas of the venue PLUS access to the Garden Bar which
            includes a cold picnic pack, some undercover seating area, private bar & private
            toilets.
          </p>
          <p>
            Please bring a standard camping chair or picnic rug, as seating is limited in this area
          </p>
        </>
      ),
    },

    {
      id: "vip-conservatory",
      title: " VIP + Conservatory Experience",
      prices: (
        <p>
          <b>$279*</b>
        </p>
      ),
      inclusions: (
        <>
          <p>
            Access to the General Admission areas of the venue PLUS access to The Conservatory with
            an antipasto board, private bar, shade & outdoor terrace
          </p>
        </>
      ),
    },
    {
      id: "vip-deck",
      title: " VIP + Deck experience",
      prices: (
        <p>
          <b>$304*</b>
        </p>
      ),
      inclusions: (
        <>
          <p>
            Access to the General Admission area of the show PLUS access to the Deck which includes
            antipasto platter, option to purchase additional food items, undercover area, private
            bar, private toilets, limited restaurant seating. Scenic deck over the lake with views
            of the winery and surrounding valley.
          </p>
          <br />
          <br />
          <p>
            <em>NOTE: There are no direct views towards the stage from the Deck</em>
          </p>
        </>
      ),
    },
    {
      id: "vip-restaurant",
      title: "VIP + Restaurant Experience",
      prices: (
        <p>
          <b>$379*</b>
        </p>
      ),
      inclusions: (
        <>
          <p>
            Access to the GA area of the show PLUS access to Isabella&apos;s Restaurant with a
            3-course meal: antipasto board + alternate plated main meal + shared dessert platter,
            private bar, indoor toilets, air conditioning & outdoor undercover terrace
          </p>
        </>
      ),
    },
    {
      id: "transport",
      title: "Transport",
      prices: (
        <p>
          <b>From $42 return</b>
        </p>
      ),
      inclusions: (
        <ul>
          <li>
            Make your way to Timeless Summer Tour Yarra Valley with ease with Melbourne on the move.
          </li>
          <li>
            {" "}
            Book a return bus ticket when you purchase your ticket from Ticketfairy. With multiple
            pick up locations and times around Melbourne.
          </li>
        </ul>
      ),
    },
  ],
};
const hunter_valley = {
  title: "Hunter Valley",
  slug: "hunter-valley",
  time: "JAN 25;3:30PM-10PM",
  order: 2,
  tiers: [
    {
      id: "golden-views",
      title: "Platinum",
      prices: (
        <ul>
          <li>
            Seat: <b>$399*</b>
          </li>
          <li>
            Seat + 4 course dinner: <b>$799*</b>
          </li>
        </ul>
      ),
      inclusions: (
        <>
          <p>
            Best seat in the house, allocated seating in the front rows, express early entry- $399
          </p>
          <p>Add on an ultimate 4 course dinner and drinks package - $799</p>
          <p>
            Dinner on restaurant decks overlooking the stage. 4 course meal, Includes 5-hour
            beverage package (beer, wine, soft drink). Moet served on arrival.
          </p>
        </>
      ),
    },
    {
      id: "golden-allocated",
      title: "Gold Allocated Seating",
      prices: (
        <p>
          <b>$299*</b>
        </p>
      ),
      inclusions: <p>Close to stage allocated seating, Express early entry</p>,
    },
    {
      id: "silver-allocated",
      title: "Silver Allocated Seating",
      prices: (
        <ul>
          <li>
            Silver seating first release: <b>$219*</b>
          </li>
          <li>
            Silver seating final release: <b>$239*</b>
          </li>
        </ul>
      ),
      inclusions: (
        <p>
          Allocated seating, a little further back but still with fantastic views of the stage,
          Express early entry
        </p>
      ),
    },
    {
      id: "ga",
      title: "General Admission - Standing",
      prices: (
        <ul>
          <li>
            GA (Earlybird): <b>$169*</b>
          </li>
          <li>
            GA (Final Release): <b>$189*</b>
          </li>
        </ul>
      ),
      inclusions: (
        <>
          <p>
            Access to the General Admission areas of the venue. Patrons may bring their own picnic
            rug, as no seating is provided in this area.
          </p>
        </>
      ),
    },

    {
      id: "addon",
      title: "Venue Addons",
      prices: <></>,
      inclusions: (
        <ul>
          <li className="mb-7">
            3.5 hour cocktail party in front of the cellar door with view of the stage. Party begins
            from gates. Includes beverage (beer, wine, soft drink) and hot and cold cocktail food -
            <b>$200*</b>
          </li>
          <li>
            {" "}
            Hamper for 2 people - <b>$129*</b>
          </li>
          <li>
            {" "}
            Hamper Gluten free or vegetarian options-<b> $139*</b>
          </li>
        </ul>
      ),
    },
  ],
};

const sandstone = {
  title: "Sandstone",
  time: "JAN 27;1PM-8:30PM",
  slug: "sandstone",
  order: 3,
  tiers: [
    {
      id: "ga",
      title: "General Admission",
      prices: (
        <ul>
          <li>
            GA (Earlybird): <b>$189*</b>
          </li>
          <li>
            GA (1st Release): <b>$219*</b>
          </li>
          <li>
            GA (Final Release): <b>$239*</b>
          </li>
        </ul>
      ),
      inclusions: (
        <p>
          Access to the General Admission areas of the venue. Patrons are requested to bring a camp
          chair or small rug to the event as no seating is provided in this area.
        </p>
      ),
    },
    {
      id: "golden",
      title: "Golden views experience ",
      prices: (
        <p>
          Front of stage, express entry:
          <b>$299*</b>
        </p>
      ),
      inclusions: (
        <p>
          Access to the General Admission and Premium GA areas (front of stage). Patrons are
          requested to bring a camp chair or small rug to the event as no seating is provided in
          these areas.
        </p>
      ),
    },
    {
      id: "vip-garden",
      title: "VIP – waterview and Oasis",
      prices: (
        <p>
          <b>$350*</b>
        </p>
      ),
      inclusions: (
        <ul>
          <li>Private viewing deck at the rear of the site</li>
          <li>Private bar and toilets</li>
        </ul>
      ),
    },
    {
      id: "vip-deck",
      title: "VIP – Deck view",
      prices: (
        <p>
          <b>$360*</b>
        </p>
      ),
      inclusions: (
        <ul>
          <li>Private viewing deck at the rear of the site</li>
          <li>Light canapes</li>
          <li>Private bar and toilets</li>
        </ul>
      ),
    },
    {
      id: "platinum",
      title: "Platinum VVIP",
      prices: (
        <p>
          <b>$450*</b>
        </p>
      ),
      inclusions: (
        <ul>
          <li>Private viewing deck at the rear of the site</li>
          <li>Light canapes</li>
          <li>Private bar and toilets</li>
          <li>Gourmet buffet</li>
          <li>4-hour beverage package (inc. Beer, wine, sparkling wine, soft drinks & water)</li>
        </ul>
      ),
    },
  ],
};

export const venues = [{ fields: yarra_valley }, { fields: hunter_valley }, { fields: sandstone }];
