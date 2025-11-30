import React from "react";
import Service from "./Services/Service";
import Content from "./Service-Contant/Content";
import Footers from "./Footer/Footers";
import Servicetop from "./Servicetop/Servicetop";

const Services = () => {
  return (
    <>
    <Servicetop />
    <Service />
    <Content />
    <Footers />
    </>
  );
};

export default Services;
