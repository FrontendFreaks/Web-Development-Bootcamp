/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

const Resume = () => {
  return (
    <><section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />} />
    </section>
    <iframe
  src={process.env.PUBLIC_URL + "/Resume_naveen.pdf"}
  width="100%"
  height="100%"
  title="Embedded PDF"
  className="pdf-iframe"
>
  Your browser does not support embedded PDFs.
</iframe>
    </>
  );
};  
export default Resume;
