import React, { useState } from "react";
import Accordion from "./Accordion";
import "./FAQ.scss";
const FAQ = () => {
  return (
    <div>
      <div className="faq-section__container ">
        <section className="faq-section__wrapper container">
          <h2>Frequently Asked Questions?</h2>
          <Accordion
            title="What is the NextLeap Product Designer Fellowship?"
            answer="Our Product Designer Fellowship is a 12 week online course that helps learners transition into a career in UI/UX design in tech companies The entire fellowship is taught online via live sessions on Zoom. Our instructors and mentors are design leaders at top technology companies and they will not only teach you the fundamentals of product design and UI/UX but also help you with case studies, doubt resolution and feedback on your design portfolios. As it goes, the proof is in the pudding. Check out the hundreds of success stories of our Fellows who have successfully transitioned into UX design roles post this product design course. So, if you are looking to transition into UX design roles and are willing to devote the required time and effort to pick up the skills, you have come to the right place."
          />

          <Accordion
            title="What if I miss a live session?"
            answer="Recordings will be made available for all of the live sessions with instructors. Further, please note that we've designed our sessions to be participatory and interactive, and recommend that you attend all to make the most of them."
          />

          <Accordion
            title="How do I get started?"
            answer="The application process is very simple. Just fill out the form and we will get back to you as soon as possible."
          />
        </section>
      </div>
    </div>
  );
};

export default FAQ;
