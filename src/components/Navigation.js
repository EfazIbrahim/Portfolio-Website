import React, { Component } from "react";
import Switch from "react-switch";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTheme: 'light',
      checked: false
    };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  componentDidMount() {
    // Get initial theme
    this.updateTheme();
    // Listen for theme changes
    this.observer = new MutationObserver(() => {
      this.updateTheme();
    });
    this.observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  updateTheme() {
    const theme = document.body.getAttribute('data-theme') || 'light';
    const checked = theme === 'dark';
    this.setState({ currentTheme: theme, checked });
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

  scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  render() {
    const { currentTheme, checked } = this.state;
    const isDark = currentTheme === 'dark';

    return (
      <div className={`navigation-container ${isDark ? 'navigation-dark' : 'navigation-light'}`}>
        <nav>
          <ul className="navigation-list">
            <li className="navigation-item">
              <button
                onClick={() => this.scrollToSection('home')}
                className={`navigation-button ${isDark ? 'navigation-button-dark' : 'navigation-button-light'}`}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                <span className="navigation-icon" role="img" aria-label="Home">🏠</span>
                Home
              </button>
            </li>
            
            <li className="navigation-item">
              <button
                onClick={() => this.scrollToSection('about')}
                className={`navigation-button ${isDark ? 'navigation-button-dark' : 'navigation-button-light'}`}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                <span className="navigation-icon" role="img" aria-label="About">👤</span>
                About
              </button>
            </li>
            
            <li className="navigation-item">
              <button
                onClick={() => this.scrollToSection('experience')}
                className={`navigation-button ${isDark ? 'navigation-button-dark' : 'navigation-button-light'}`}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                <span className="navigation-icon" role="img" aria-label="Experience">💼</span>
                Experience
              </button>
            </li>
            
            <li className="navigation-item">
              <button
                onClick={() => this.scrollToSection('portfolio')}
                className={`navigation-button ${isDark ? 'navigation-button-dark' : 'navigation-button-light'}`}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                <span className="navigation-icon" role="img" aria-label="Projects">🚀</span>
                Projects
              </button>
            </li>
            
            <li className="navigation-item">
              <button
                onClick={() => this.scrollToSection('skills')}
                className={`navigation-button ${isDark ? 'navigation-button-dark' : 'navigation-button-light'}`}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                <span className="navigation-icon" role="img" aria-label="Skills">⚡</span>
                Skills
              </button>
            </li>

            {/* Theme Toggle */}
            <li className="navigation-item theme-toggle-item">
              <div className="theme-toggle-container">
                <Switch
                  checked={checked}
                  onChange={this.onThemeSwitchChange}
                  offColor="#baaa80"
                  onColor="#353535"
                  className="react-switch"
                  width={60}
                  height={30}
                  uncheckedIcon={
                    <span
                      className="iconify"
                      data-icon="twemoji:owl"
                      data-inline="false"
                      style={{
                        display: "block",
                        height: "100%",
                        fontSize: 18,
                        textAlign: "end",
                        marginLeft: "15px",
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
                        fontSize: 18,
                        textAlign: "end",
                        marginLeft: "8px",
                        color: "#353239",
                      }}
                    ></span>
                  }
                  id="icon-switch"
                />
                <span className="theme-toggle-label">Theme</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
