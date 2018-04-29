import React, { Component } from 'react';
import { Badge, Button, Card, CardBody, CardHeader, CardText, CardFooter, Col, Container, FormGroup, Input, Row } from 'reactstrap';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
import AddPost from '../AddPost'
import './main.css';

class Posts extends Component {
  state = { textArea: { open: false } };

  handleSupport = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      support: post.support + 1,
      tags: post.tags
    });
  }

  handleClose = () => {
    this.setState({ textArea: { open: false } });
  }

  handleOpen = () => {
    this.setState({ textArea: { open: true } });
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
              { _this.state.textArea.open ? 
                (
                  <AddPost
                    firebase={_this.props.firebase}
                    handle={this.handleClose.bind(this)}>
                  </AddPost>
                ) : 
                (
                  <FormGroup>
                    <Input
                      onClick={ _this.handleOpen }
                      type="add_post"
                      name="text"
                      id="post_texts"
                      placeholder="Share your story..."/>
                  </FormGroup>
                )}
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
