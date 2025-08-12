import React, { Component } from "react";
import Typical from "react-typical";

class Header extends Component {
  titles = []

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);
    const profilePic = 'images/profile_pic.jpg';

    return (
             <header id="home" style={{ height: window.innerHeight - 200, display: 'block' }}>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
                             <img 
                                   src={`${process.env.PUBLIC_URL?.replace(/^\//, '')}${profilePic}`} 
                 alt="Profile" 
                                   style={{ 
                    width: '350px', 
                    height: '350px', 
                    borderRadius: '50%', 
                    objectFit: 'cover',
                    marginBottom: '1rem',
                    border: '5px solid #333'
                  }} 
               />
               <br/>
                             <h1 className="mb-0" style={{ fontSize: '6rem', fontWeight: 'bold', margin: '0.5rem 0' }}>
                <Typical steps={[name]} wrapper="p" />
              </h1>
                             <div className="title-container" style={{ fontSize: '2rem', fontWeight: '500', marginBottom: '2rem' }}>
                 <HeaderTitleTypeAnimation />
               </div>
               
               {/* Social Links */}
               {this.props.sharedData && this.props.sharedData.social && (
                 <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                   {this.props.sharedData.social.map(function (network) {
                     return (
                       <span key={network.name} className="m-3">
                                                   <a href={network.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '3.5rem', color: 'inherit' }}>
                           <i className={network.class}></i>
                         </a>
                       </span>
                     );
                   })}
                 </div>
               )}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
