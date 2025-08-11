import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;

        var tech = technologies.map((technology, i) => {
          return (
            <Badge 
              pill 
              className="mr-2 mb-2" 
              key={i}
              style={{
                backgroundColor: "#AE944F",
                color: "white",
                fontSize: "0.9rem",
                padding: "8px 16px"
              }}
            >
              {technology}
            </Badge>
          );
        });

        return (
          <div 
            key={i} 
            className="mb-5 experience-card"
            style={{
              borderRadius: "12px",
              padding: "30px"
            }}
          >
            <div className="row">
              <div className="col-md-8">
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src={`/images/companies/${work.company.toLowerCase().replace(/\s+/g, '-')}-logo.png`}
                    alt={`${work.company} logo`}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                      marginRight: "20px",
                      borderRadius: "8px"
                    }}
                    onError={(e) => {
                      console.log(`Failed to load logo for ${work.company}`);
                      e.target.style.display = 'none';
                    }}
                    onLoad={(e) => {
                      console.log(`Successfully loaded logo for ${work.company}`);
                    }}
                  />
                  <div>
                    <h3 
                      style={{
                        fontSize: "2.2rem",
                        fontWeight: "bold",
                        marginBottom: "8px"
                      }}
                    >
                      {work.title}
                    </h3>
                    <h4 
                      style={{
                        fontSize: "1.8rem",
                        fontWeight: "600",
                        marginBottom: "15px"
                      }}
                    >
                      {work.company}
                    </h4>
                  </div>
                </div>
                <div 
                  style={{
                    fontSize: "1.4rem",
                    lineHeight: "1.6",
                    marginBottom: "20px",
                    textAlign: "left"
                  }}
                >
                  {work.company === "Wells Fargo" ? (
                    <ul style={{ margin: 0, paddingLeft: "20px" }}>
                      <li>Built a full-stack metrics dashboard for the Data API team that tracks usage statistics, data transfer volume, and health metrics for over 700 deployed APIs, enabling better monitoring and performance insights.</li>
                      <li>Developed backend services in Spring Boot to aggregate data from Splunk and Apigee and store it in a MongoDB database.</li>
                      <li>Integrated a Graphana frontend that visualized real-time API metric such as request volume, error rates, and data usage, through dynamic charts and diagrams, providing clear insights for leadership decision-making.</li>
                      <li>Performed load and performance testing using JMeter and Blaze Meter for services deployed in OpenShift containers hosted in in-house data centers and the Google Cloud Platform.</li>
                      <li>Configured 26 services to be deployed in OCP and use EPLX for deployment.</li>
                      <li>Collaborated in an Agile environment through sprint planning, daily standups, retrospectives, and code reviews, while using GitHub for version control and team-based development.</li>
                    </ul>
                  ) : (
                    <ul style={{ margin: 0, paddingLeft: "20px" }}>
                      <li>Developed a web application that streamlined deployment for 100+ internal users by integrating the GitLab API, reducing deployment time by over 50% through an automated system for deploying different application versions.</li>
                      <li>Leveraged AWS Lambda and Amazon RDS with SQL to manage user preferences, scalable data storage, and maintain backups of GitHub data, enabling seamless access to personalized settings and enhancing app reliability.</li>
                      <li>Created reusable React components that are now part of USAA's shared UI library, accelerating development and improving consistency across member-facing platforms.</li>
                      <li>Conducted comprehensive unit and integration testing, identified, and resolved bugs, and implemented improvements based on stakeholder feedback and Agile ceremonies.</li>
                      <li>Gained firsthand experience across the full Software Development Life Cycle while collaborating closely with engineers and product managers in a fast-paced Agile team.</li>
                    </ul>
                  )}
                </div>
              </div>
              <div className="col-md-4 text-md-right">
                <div>
                  <h5 
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                      marginBottom: "5px"
                    }}
                  >
                    Duration
                  </h5>
                  <p 
                    style={{
                      fontSize: "1.4rem",
                      margin: "0"
                    }}
                  >
                    {work.years}
                  </p>
                </div>
              </div>
            </div>
            
            <div style={{ marginTop: "20px" }}>
              <h6 
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  marginBottom: "15px"
                }}
              >
                Technologies Used:
              </h6>
              <div>
                {tech}
              </div>
            </div>
          </div>
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
        <div className="col-md-10 mx-auto">
          {work}
        </div>
        <div style={{ marginBottom: "6rem" }}></div>
      </section>
    );
  }
}

export default Experience;
