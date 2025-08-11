import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;

        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
              width: "80px",
              height: "80px",
            }}
            icon={<i className="fas fa-briefcase experience-icon"></i>}
            key={i}
            contentStyle={{
              padding: "25px",
              margin: "20px 0",
              minHeight: "200px"
            }}
            dateStyle={{
              fontSize: "5rem !important",
              fontWeight: "bold !important",
              color: "#333 !important"
            }}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {work.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {work.company}
            </h4>
            <p style={{ textAlign: "left", marginTop: "15px", marginBottom: "15px" }}>
              {work.description}
            </p>
            <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="experience">
        <div className="col-md-12">
          <h1 style={{ color: "black", fontSize: "4rem", marginBottom: "4rem" }}>
             <span>{sectionName}</span>
          </h1>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
