import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import About from "../components/About/About";
import Title from "../components/Title/Title";
import ListCards from "../components/ListCards/ListCards";

const page = () => {
  return (
    <div>
      <Navbar />
      <Title />
      <ListCards />
      {/* <About /> */}
    </div>
  );
};
export default page;
