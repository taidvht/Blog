import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={'posts/' + post.id}>
            <strong>{post.title}</strong>
          </Link>
        </li>
      )
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-10">
          <h3>List Post</h3>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
        </div>
        <div className="col-md-2">
          <Link to="/posts/new" className="btn btn-primary">Add post</Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts : state.posts.all };
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
