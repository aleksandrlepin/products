import React, {Component} from 'react';
import { Collection, CollectionItem, Row, Col, } from 'react-materialize';
import Pagination from '../Pagination';

class List extends Component {

  componentDidMount() {
    this.props.load(this.props.match.params.option, 'language = en - US & page=1')
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.option != nextProps.match.params.option) {
      this.props.load(nextProps.match.params.option, 'language = en - US & page=1')
    }
  }

  render() {
    console.log('render: ', this.props.movies);
    const option = this.props.match.params.option;
    return (
      <div>
        {this.props.movies.data.results !== undefined && this.props.movies.data.results.map(item =>
          <Col s={4}>
            <div className="card">
              <div className="card-image">
                <img src={`http://image.tmdb.org/t/p/w300/${item.backdrop_path}`}/>
                <span className="card-title card_title--custom"> {item.title} </span>
              </div>
              <div className="card-content">
                <p>Release date {item.release_date}</p>
                <p>Rating {item.vote_average}/10</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </Col>
        )}
        <Pagination active={this.props.movies.data.page} total={this.props.movies.data.total_pages} />
      </div>
    )
  }
}

export default List;