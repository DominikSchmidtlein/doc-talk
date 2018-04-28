import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, CardText, Collapse } from 'reactstrap';


class Posts extends Component {
  constructor() {
    super();
    // this.state = { collapse: false };
    this.toggle = this.toggle.bind(this);
  }

  state = { collapse: {} };

  toggle = (key) => {
    var old = {...this.state.collapse};
    console.log(old);
    old[key] = !old[key];
    console.log(old);
    this.setState({ collapse: old }, () => console.log(this.state.collapse));
    console.log(key);
  }

  render() {
    let posts = this.props.posts;
    let _this = this;

    if (!posts) {
      return false;
    }

    if (this.props.loading) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    return (
      <div className="container">
          <Button color="primary" href="/add-post">New Post</Button>
        <div className="Posts">
          <br/>
          { Object.keys(posts).map(function(key) {
              let old = {..._this.state.collapse};
              old[key] = true;
              _this.state.collapse = old;
              return (
                <div key={key}>
                  <Card>
                    <CardHeader onClick={ (e) => _this.toggle(key) }>
                      <h3>
                        Header
                      </h3>
                    </CardHeader>
                    <Collapse isOpen={_this.state.collapse[key]}>
                      <CardBody>
                        <CardText>{ posts[key].title }</CardText>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <br/>
                </div>
              );
          })}
        </div>
      </div>
    );
  }
}

export default Posts;
