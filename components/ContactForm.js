"use client";
import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
const items = {
  Australia: {
    locations: ["Queensland", "New South Wales", "Western Australia", "Victoria"],
  },
  "New Zealand": {
    locations: ["CHRISTCHURCH", "WELLINGTON", "TAURANGA", "AUCKLAND"],
  },
};
export default function ContactForm() {
  const [submitted, setSumbitted] = useState(false);
  const [country, setCountry] = useState("Country");
  const [location, setLocation] = useState("Location");
  const addMergeField = async () => {
    await axios.get("/api/maichimp-add-merge-field");
  };
  const handleSubmit = async (e) => {
    const formData = new FormData(e.target);
    e.preventDefault();
    if (formData.get("check")) {
      console.log(formData.get("check"));
      return;
    }

    await axios
      .post("/api/arep-create", {
        email: formData.get("emailr"),
        fname: formData.get("fname"),
        lname: formData.get("lname"),
        tag: formData.get("invite")?.toLowerCase(),
        country,
        location,
      })
      .then((res) => {
        if (res.status === 200) {
          setSumbitted(true);
          // localStorage.setItem("submitDate", new Date().toISOString());
          console.log(res.data);
        }
        if (res.status === 500) {
          alert("Whoops,something went wrong:(");
        }
      });
  };
  useEffect(() => {
    if (window) {
      const submitDate = localStorage?.getItem("submitDate");
      const today = new Date();
      const twentyFourHoursInMilliseconds = 1000 * 60 * 60 * 24;
      const is24HoursPassed = today >= submitDate + twentyFourHoursInMilliseconds;
      setSumbitted(!is24HoursPassed);
    }
  }, []);
  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.1 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-4 lg:gap-6 gradient p-5 xl:p-10   w-full  lg:text-40  darma-e text-2xl relative">
      {!submitted ? (
        <>
          <input
            id="emails"
            placeholder="quantity"
            className="absolute opacity-0 w-0 h-0 bottom-0 pointer-events-none BORDER_black"
            type="text"
            name="check"
          />
          <input
            id="email_real"
            placeholder="email"
            className="border border-white h-12 lg:h-16   bg-transparent w-full  px-3 xl:px-6 placeholder:uppercase placeholder:text-white text-mustard caret-mustard uppercase outline-none "
            type="email"
            name="emailr"
            required
          />

          <div className="flex gap-4">
            <input
              id="name"
              placeholder="First Name"
              className="border border-white  h-12 lg:h-16    bg-transparent w-full  px-3 xl:px-6 placeholder:uppercase placeholder:text-white text-mustard caret-mustard uppercase outline-none "
              type="text"
              name="fname"
              required
            />
            <input
              id="name"
              placeholder="Last name"
              className="border border-white  h-12 lg:h-16   bg-transparent w-full  px-3 xl:px-6 placeholder:uppercase placeholder:text-white text-mustard caret-mustard uppercase outline-none "
              type="text"
              name="lname"
              required
            />
          </div>
          <div className="w-full grid grid-cols-2 gap-4 uppercase">
            <Dropdown
              triggerEl={
                <div className="border border-white cursor-pointer  h-12 lg:h-16   bg-transparent w-full  px-3 xl:px-4 flex items-center uppercase">
                  {country}
                </div>
              }>
              <div
                onClick={() => {
                  setCountry("Australia");
                  setLocation(items?.["Australia"]?.locations[0]);
                }}
                className="px-4 py-1 leading-none cursor-pointer hover:bg-white/40 text-2xl uppercase">
                Australia
              </div>
              <div
                className="px-4 py-1 leading-none cursor-pointer hover:bg-white/40 text-2xl uppercase"
                onClick={() => {
                  setCountry("New Zealand");
                  setLocation(items?.["New Zealand"]?.locations[0]);
                }}>
                New Zealand
              </div>
            </Dropdown>
            <Dropdown
              position="bottomRight"
              triggerEl={
                <div className="w-full border border-white  cursor-pointer h-12 lg:h-16    bg-transparent  px-3 xl:px-6 flex items-center uppercase">
                  <p className="whitespace-nowrap overflow-hidden overflow-ellipsis uppercase">
                    {location}
                  </p>
                </div>
              }>
              {items?.[country]?.locations &&
                items?.[country]?.locations.map((location) => (
                  <div
                    className="px-4 py-1 leading-none cursor-pointer hover:bg-white/40 text-2xl"
                    key={location}
                    onClick={() => {
                      setLocation(location);
                    }}>
                    {location}
                  </div>
                ))}
            </Dropdown>
          </div>
          <input
            id="invite"
            placeholder="Who do you wanna see?"
            className="border border-white h-12 lg:h-16   bg-transparent w-full  px-3 xl:px-6 placeholder:uppercase placeholder:text-white text-mustard caret-mustard uppercase outline-none "
            type="text"
            name="invite"
          />
          <button
            type="submit"
            disabled={submitted}
            className="bg-black text-center h-14  w-full  text-white lg:text-40 px-3 xl:px-6  lg:px-8 flex-shrink-0 uppercase    ">
            <span className="submit">
              {submitted ? "Thank You for application" : "STAY UPDATED"}
            </span>
          </button>
        </>
      ) : (
        <p className="text-3xl lg:text-40 leading-none  tracking-[2%] text-center uppercase text-balance  py-5 ">
          You will be one of the first to receive updates and announcements for Timeless Fest
          &apos;25. 📢🎉
        </p>
      )}
    </motion.form>
  );
}
