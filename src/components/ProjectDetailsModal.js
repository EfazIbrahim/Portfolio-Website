import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class ProjectDetailsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0
    };
  }

  nextImage = () => {
    this.setState(prevState => ({
      currentImageIndex: (prevState.currentImageIndex + 1) % this.props.data.images.length
    }));
  };

  prevImage = () => {
    this.setState(prevState => ({
      currentImageIndex: prevState.currentImageIndex === 0 
        ? this.props.data.images.length - 1 
        : prevState.currentImageIndex - 1
    }));
  };
  render() {
    let technologies = null;
    let tech = null;
    let img = null;
    let title = null;
    let description = null;
    let url = null;
    
    if (this.props.data) {
      technologies = this.props.data.technologies;
      title = this.props.data.title;
      description = this.props.data.description;
      url = this.props.data.url;
      
      if (technologies && technologies.length > 0) {
        tech = technologies.map((techItem, i) => {
          return (
            <span key={i} className="modal-technology-badge" style={{ fontSize: "1rem", padding: "10px 18px" }}>
              <i className={techItem.class} style={{ fontSize: "1.3rem" }}></i>
              <span className="modal-tech-name" style={{ fontSize: "1rem", fontWeight: "500" }}>{techItem.name}</span>
            </span>
          );
        });
      }
      
      if (this.props.data.images) {
        console.log('Project images:', this.props.data.images);
        img = this.props.data.images;
        console.log('Processed image elements:', img);
      }
    }
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
          <div className="col-md-10 mx-auto" style={{ marginTop: "10px" }}>
            {/* Custom Image Slider */}
            {img && img.length > 0 && (
              <div className="custom-image-slider" style={{ position: 'relative', textAlign: 'center' }}>
                <img 
                  src={`${process.env.PUBLIC_URL}${img[this.state.currentImageIndex]}`}
                  alt={`${title} - ${this.state.currentImageIndex + 1} of ${img.length}`}
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '400px', 
                    objectFit: 'contain',
                    border: '1px solid #ddd',
                    borderRadius: '8px'
                  }} 
                />
                
                {/* Navigation Arrows */}
                {img.length > 1 && (
                  <>
                    <button 
                      onClick={this.prevImage}
                      style={{
                        position: 'absolute',
                        left: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0,0,0,0.7)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        fontSize: '18px',
                        cursor: 'pointer'
                      }}
                    >
                      ‹
                    </button>
                    <button 
                      onClick={this.nextImage}
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0,0,0,0.7)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        fontSize: '18px',
                        cursor: 'pointer'
                      }}
                    >
                      ›
                    </button>
                  </>
                )}
                
                {/* Image Counter */}
                {img.length > 1 && (
                  <div style={{ 
                    marginTop: '10px', 
                    fontSize: '14px', 
                    color: '#666' 
                  }}>
                    {this.state.currentImageIndex + 1} / {img.length}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="col-md-10 mx-auto">
            <h3 style={{ padding: "5px 5px 0 5px", fontSize: "2rem", fontWeight: "600" }}>
              {title}
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i
                    className="fas fa-external-link-alt"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </a>
              ) : null}
            </h3>
            <p className="modal-description" style={{ fontSize: "16px", lineHeight: "1.6" }}>{description}</p>
            
            {/* Technologies Display */}
            {tech && (
              <div className="modal-technologies-inline" style={{ paddingBottom: "20px" }}>
                {tech}
              </div>
            )}
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;