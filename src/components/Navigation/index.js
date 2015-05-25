import React from 'react';
import bean from 'bean';
import classnames from 'classnames';

// Allowance to `fix` the navbar
// 50 == navbar height. check the css file in the same directory.
const ALLOWANCE = 50;

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }

  componentDidMount() {
    bean.on(window, 'scroll', this._handleScroll.bind(this));
    // Recalculate when a resize occurs.
    bean.on(window, 'resize', this._handleScroll.bind(this));
  }

  componentWillUnmount() {
    bean.off(window, 'scroll', this._handleScroll.bind(this));
    bean.off(window, 'resize', this._handleScroll.bind(this));
  }

  render() {
    let { fixed } = this.state;
    let classname = classnames('nav', {
      'nav--sticky': fixed,
      'nav--static-bottom': !fixed
    });

    return (
      <nav className={classname} role="navigation">
        <div className="nav__container">
          <div className="nav__heading">
            <a href="#">Vensil's Ventures</a>
          </div>
          <ul className="nav__navbar">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }

  _handleScroll() {
    // Set navbar to fixed if it has exceeded .home
    this.setState({ fixed: window.scrollY + ALLOWANCE >= window.innerHeight });
  }
}
