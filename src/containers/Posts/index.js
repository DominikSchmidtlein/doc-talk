import React, { Component } from 'react';
import { Badge, Button, Card, CardBody, CardHeader, CardText, CardFooter, Col, Container, FormGroup, Input, Row } from 'reactstrap';
import './main.css';

class Posts extends Component {
  handleSupport = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      support: post.support + 1,
      tags: post.tags
    });
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
      <Container>
        <div className="Posts">
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <FormGroup>
                <a href="/add-post">
                  <Input
                    type="add_post"
                    name="text"
                    id="post_texts"
                    placeholder="Share your story..."/>
                </a>
              </FormGroup>
              <br/>
              { Object.keys(posts).reverse().map(function(key) {
                  let tags = posts[key].tags || [];
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
                        <CardFooter>
                          <div>
                            <Button size="sm">Flag</Button>{' '}
                            <Button size="sm">Read Similar</Button>{' '}
                            <Button
                              size="sm"
                              onClick={ _this.handleSupport.bind(this, posts[key], key) }>
                              Show Support</Button>
                            <span className="float-right">Support: { posts[key].support }</span>
                          </div>
                        </CardFooter>
                      </Card>
                      <br/>
                    </div>
                  );
              })}
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Posts;
