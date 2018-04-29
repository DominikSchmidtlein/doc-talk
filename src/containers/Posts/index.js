import React, { Component } from 'react';
import { Badge, Button, Card, CardBody, CardHeader, CardText, Collapse } from 'reactstrap';


class Posts extends Component {
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
              let tags = posts[key].tags;
              return (
                <div key={key}>
                  <Card>
                    <CardHeader>
                      {tags.map(function(keyTag, i) {
                        return (<h7 key={i}><Badge color="secondary">{keyTag}</Badge>&nbsp;</h7>)
                      })}
                    </CardHeader>
                    <CardBody>
                      <CardText>{ posts[key].title }</CardText>
                    </CardBody>
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
