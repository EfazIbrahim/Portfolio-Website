import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-6"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <div className="modern-project-card" onClick={() => detailsModalShow(projects)}>
              <div className="project-image-container">
                <img
                  src={projects.images[0]}
                  alt="projectImages"
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="view-project-btn">
                    <i className="fas fa-eye"></i>
                    <span>View Project</span>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <span className="project-date">{projects.startDate}</span>
                  <h3 className="project-title">{projects.title}</h3>
                </div>
                
                {/* Technologies Display */}
                {projects.technologies && projects.technologies.length > 0 && (
                  <div className="project-technologies">
                    {projects.technologies.slice(0, 4).map((tech, index) => (
                      <span key={index} className="technology-badge">
                        <i className={tech.class}></i>
                        <span className="tech-name">{tech.name}</span>
                      </span>
                    ))}
                    {projects.technologies.length > 4 && (
                      <span className="technology-badge more-tech">
                        +{projects.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 style={{ color: "black", fontSize: "4rem", marginBottom: "4rem" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
