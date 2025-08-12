import React, { Component } from "react";

class Skills extends Component {
  render() {
    let skillSections = null;
    
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      
      // Group skills by category
      const skillCategories = {
        "Programming Languages": ["Java", "Python", "JavaScript", "TypeScript", "C", "C++", "HTML 5", "CSS 3"],
        "Frameworks & Libraries": ["React", "React Native", "Node.js", "Express.js", "Spring Boot", "Tailwind CSS", "TensorFlow", "Scikit-learn", "OpenCV"],
        "Cloud & Databases": ["PostgreSQL", "MongoDB", "Amazon RDS", "AWS Lambda", "AWS RDS", "AWS Amplify", "Firebase", "Firestore", "AWS", "GCP"],
        "Tools & IDEs": ["Git", "GitHub", "JMeter", "Blaze Meter", "Postman", "Swagger", "IntelliJ IDEA", "Android Studio", "Grafana"]
      };

      const renderSkillCategory = (categoryName, skillNames) => {
        const skills = this.props.sharedSkills.icons.filter(skill => 
          skillNames.includes(skill.name)
        );

        return (
          <div key={categoryName} className="skill-category">
            <h3 className="category-title">{categoryName}</h3>
            <div className="skills-grid">
              {skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-content">
                    <i className={skill.class} style={{ fontSize: "2.5rem", marginRight: "15px" }}></i>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      };

      skillSections = Object.entries(skillCategories).map(([category, skills]) => 
        renderSkillCategory(category, skills)
      );
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 style={{ color: "black", fontSize: "4rem", marginBottom: "4rem" }}>
              <span>{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12">
            {skillSections}
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
