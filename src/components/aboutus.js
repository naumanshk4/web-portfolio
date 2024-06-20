import { useState } from "react";
import Accordion from "./accordion";
import Headers from "./header";
import webflowLogo from "../images/webflow_inc__logo.jpeg";
import Infini8AILogo from "../images/infini8ai_logo.jpeg";
import LukukuLogo from "../images/lukuku_logo.jpeg";
import QisstPayLogo from "../images/qisstpay_logo.jpeg";
import javascript from "../images/javascript.png";
import html from "../images/html.png";
import css from "../images/css.png";
import python from "../images/python.png";
import mongodb from "../images/mongodb.png";
import matplotlib from "../images/matplotlib.png";
import php from "../images/php.png";
import word from "../images/word.png";
import excel from "../images/excel.png";
import powerpoint from "../images/powerpoint.png";
import sql from "../images/sql.png";
import tabelu from "../images/tabelu.svg";
import pandas from "../images/pandas.png";
import numpy from "../images/numpy.png";
import mysql from "../images/mysql.png";
import jira from "../images/jira.png";
import trello from "../images/trello.png";
import github from "../images/github.png";
import gitlab from "../images/gitlab.png";
import bootstrap from "../images/bootstrap.png";
import apis from "../images/apis.png";
import twcss from "../images/tailwind-removebg.png";
import react from "../images/react.png";
import java from "../images/java.png";
import expressjs from "../images/expressjs.png";
import nodejs from "../images/nodejs.png";

import Skills from "./skills";

function About() {
  const [skills, setSkills] = useState([
    { key:1
      ,logoSrc: javascript, skillName: "Javascript", isactive:false },
    {
      key:2,logoSrc: python,
      skillName: "Python", isactive:false
    },
    {
      key:3,logoSrc: sql,
      skillName: "SQL", isactive:false
    },
    {
      key:4,logoSrc: php,
      skillName: "PHP", isactive:false
    },
    { key:5,logoSrc: java, skillName: "java" , isactive:false},
  ]);

  const [softwareeDev, setSoftwareDev] = useState([
    { key:1
      ,logoSrc: html, skillName: "HTML", isactive:false },
    {
      key:2,logoSrc: css,
      skillName: "CSS", isactive:false
    },
    {
      key:3,logoSrc: react,
      skillName: "ReactJs", isactive:false
    },
    {
      key:4,logoSrc: nodejs,
      skillName: "NodeJs", isactive:false
    },
    { key:5,logoSrc: mongodb, skillName: "MongoDB" , isactive:false},
    { key:6,logoSrc: expressjs, skillName: "ExpressJs" , isactive:false},
    { key:7,logoSrc: bootstrap, skillName: "Bootstrap" , isactive:false},
    { key:8,logoSrc: apis, skillName: "APIs" , isactive:false},
    
  ]);


  const [accordions, setAccordion] = useState([
    {
      key: 1,
      logoSrc: LukukuLogo,
      position: "ReactJS Developer",
      title: "Lukuku",
      data: `GeeksforGeeks is a one stop solution  
                  for all computer science students.`,
      isOpen: false,
    },
    {
      key: 2,
      logoSrc: QisstPayLogo,
      position: "ReactJS Developer",
      title: "QisstPay",
      data: `GeeksforGeeks offers Free Tutorials,  
                  Millions of Articles, Live, Online and  
                  Classroom Courses,Frequent Coding Competitions,  
                  Webinars by Industry Experts, Internship  
                  opportunities and Job Opportunities.`,
      isOpen: false,
    },
    {
      key: 3,
      logoSrc: Infini8AILogo,
      position: "MERN Stack Developer",
      title: "Infini8AI",
      data: `GeeksforGeeks is the best Computer Science portal  
                  for geeks. It contains well written, well thought  
                  and well explained computer science and programming  
                  articles.`,
      isOpen: false,
    },
    {
      key: 4,
      logoSrc: webflowLogo,
      position: "Webflow Developer",
      title: "Freelance",
      data: `GeeksforGeeks is the best Computer Science portal  
                  for geeks. It contains well written, well thought  
                  and well explained computer science and programming  
                  articles.`,
      isOpen: false,
    },
  ]);

  const toggleAccordion = (key) => {
    const updatedAcc = accordions.map((acc) => {
      if (acc.key === key) {
        return { ...acc, isOpen: !acc.isOpen };
      } else {
        return { ...acc, isOpen: false };
      }
    });
    setAccordion(updatedAcc);
  };

  return (
    <section className=" bg-dark relative pb-20 overflow-hidden">
      <div className="container relative px-4 mx-auto">
        <div className="text-start">
          <h1 className="text-2xl font-medium tracking-tight text-white sm:text-2xl md:text-4xl lg:text-6xl">
            Work Experience
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            A passionate ReactJS Developer dedicated to building responsive and
            <br />
            user-friendly web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 col-gap-[20px] md:grids-cols-2 lg:grid-cols-2">
          <div className="text-start">
            <h1 className=" mb-20 text-2xl font-medium tracking-tight text-white sm:text-2xl md:text-4xl lg:text-6xl">
              JOBS
            </h1>

            {accordions.map((accordion) => (
              <Accordion
                key={accordion.key}
                title={accordion.title}
                data={accordion.data}
                position={accordion.position}
                isOpen={accordion.isOpen}
                toggleAccordion={() => toggleAccordion(accordion.key)}
                logo={accordion.logoSrc}
              />
            ))}
          </div>

          <div>
            <h1 className="text-2xl font-medium tracking-tight text-white sm:text-2xl md:text-4xl lg:text-6xl">
              Skills & Technology
            </h1>
            <Skills skills={skills} setSkills={setSkills} softwareDev={softwareeDev} setSoftwareDev={setSoftwareDev} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
