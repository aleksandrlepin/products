import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = ({ navLinks }) => (
  <header>
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {navLinks.map(item => {
            if (item.path === "/") {
              return (
                <li key={item.title}>
                  <NavLink
                    exact
                    to={item.path}
                    className="nav-link"
                    activeClassName="nav-link--active"
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            }
            return (
              <li key={item.title}>
                <NavLink
                  to={item.path}
                  className="nav-link"
                  activeClassName="nav-link--active"
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  navLinks: PropTypes.instanceOf(Array).isRequired
};

const mapStateToProps = state => ({
  navLinks: state.navLinks
});

export default connect(
  mapStateToProps,
  null
)(Header);
