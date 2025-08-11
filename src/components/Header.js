import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);

    return (
             <header id="home" style={{ height: window.innerHeight - 200, display: 'block' }}>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
                             <img 
                 src="images/profile_pic.jpg" 
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
               
               <div style={{ marginTop: '2rem' }}>
                <Switch
                  checked={this.state.checked}
                  onChange={this.onThemeSwitchChange}
                  offColor="#baaa80"
                  onColor="#353535"
                  className="react-switch mx-auto"
                  width={90}
                  height={40}
                  uncheckedIcon={
                    <span
                      className="iconify"
                      data-icon="twemoji:owl"
                      data-inline="false"
                      style={{
                        display: "block",
                        height: "100%",
                        fontSize: 25,
                        textAlign: "end",
                        marginLeft: "20px",
                        color: "#353239",
                      }}
                    ></span>
                  }
                  checkedIcon={
                    <span
                      className="iconify"
                      data-icon="noto-v1:sun-with-face"
                      data-inline="false"
                      style={{
                        display: "block",
                        height: "100%",
                        fontSize: 25,
                        textAlign: "end",
                        marginLeft: "10px",
                        color: "#353239",
                      }}
                    ></span>
                  }
                  id="icon-switch"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
