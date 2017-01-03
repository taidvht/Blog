import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {

  static contextTypes = {
    router : PropTypes.object
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => { this.context.router.push('/'); })
  }

  render() {

    const { post } = this.props;

    if (!this.props.post) {
      return <div>Loading ...</div>
    }

    return (
      <div className="row">
        <div className="col-md-9">
          <h3>{post.title}</h3>
          <h6>Category: {post.categories}</h6>
          <p>{post.content}</p>
        </div>
        <div className="col-md-1"><Link to="/"><button className="btn btn-primary">Back</button></Link></div>
        <div className="col-md-1">
          <button
            className="btn btn-danger pull-xs-right"
            onClick={this.onDeleteClick.bind(this)}>
              Delete
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { post : state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
