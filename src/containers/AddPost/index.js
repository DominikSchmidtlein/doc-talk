import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';


class AddPost extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    title: '',
    tags: []
  };

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleCheck = (newTags) => {
    this.setState({ tags: newTags });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    this.props.firebase.ref('posts').push({
      title: this.state.title,  
      tags: Object.assign({}, this.state.tags)
    });

    this.setState({
      title: '',
      tags: []
    });
  }

  render() {
    return (
      <Container>
        <div className="AddPost">
          <Form>
           <FormGroup>
              <Label for="message">Message</Label>
              <Input
                type="textarea"
                name="text"
                id="message"
                placeholder="Write your message..." 
                onChange={ this.handleChange } 
                value={ this.state.title } />
            </FormGroup>
            <Row>
              <Col xs="3">
                <CheckboxGroup name="tags" value={this.state.tags} onChange={this.handleCheck}>
                  <Checkbox value="tag1" /><label> Tag1</label><br/>
                  <Checkbox value="tag2" /><label> Tag2</label><br/>
                  <Checkbox value="tag3" /><label> Tag3</label>
                </CheckboxGroup>
              </Col>
              <Col xs="3">
                <CheckboxGroup name="tags" value={this.state.tags} onChange={this.handleCheck}>
                  <Checkbox value="tag4" /><label> Tag4</label><br/>
                  <Checkbox value="tag5" /><label> Tag5</label><br/>
                  <Checkbox value="tag6" /><label> Tag6</label>
                </CheckboxGroup>
              </Col>
              <Col xs="3">
                <CheckboxGroup name="tags" value={this.state.tags} onChange={this.handleCheck}>
                  <Checkbox value="tag7" /><label> Tag7</label><br/>
                  <Checkbox value="tag8" /><label> Tag8</label><br/>
                  <Checkbox value="tag9" /><label> Tag9</label>
                </CheckboxGroup>
              </Col>
              <Col xs="3">
                <CheckboxGroup name="tags" value={this.state.tags} onChange={this.handleCheck}>
                  <Checkbox value="tag10" /><label> Tag10</label><br/>
                  <Checkbox value="tag11" /><label> Tag11</label><br/>
                  <Checkbox value="tag12" /><label> Tag12</label>
                </CheckboxGroup>
              </Col>
            </Row>
            <Button 
              type="submit"
              color="success"
              onClick={ this.handleSubmit }
            >
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default AddPost;
