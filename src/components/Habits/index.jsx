import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink, Redirect } from 'react-router-dom';
import { Row, Col } from 'react-materialize';
import List from '../List';
import { loadMovies } from '../../actions/moviesActions';

class Habits extends Component {
  componentDidMount() {
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Row className="valign">
          <Col s={2}>
            <h4>Habits</h4>
          </Col>
          <Col s={10}>
            <NavLink to={`${match.url}/now_playing`} activeStyle={{ textDecoration: 'underline' }} >Now Playing</NavLink>
            <NavLink to={`${match.url}/upcoming`} activeStyle={{ textDecoration: 'underline' }} >Upcoming</NavLink>
            <NavLink to={`${match.url}/top_rated`} activeStyle={{ textDecoration: 'underline' }} >Top Rated</NavLink>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Route path={`${match.url}/:option`} render={props => (<List {...props} load={this.props.load} movies={this.props.movies} />)} />
            {/* <Redirect to={`${match.path}/now_playing`} /> */}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
});

const mapDispatchToProps = dispatch => ({
  load(querry, param) {
    dispatch(loadMovies(querry, param));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Habits);
