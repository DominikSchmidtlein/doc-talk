import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class AddPost extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    title: ''
  };

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    this.props.firebase.ref('posts').push({
      title: this.state.title,
      upvote: 0,
      downvote: 0
    });

    this.setState({
      title: ''
    });
  }

  render() {
    return (
      <div className="container">
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
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  onChange={this.handleCheck}
                  defaultChecked={this.state.checked} />{' '}
                Tag 1
              </Label>
            </FormGroup>
            <Button 
              type="submit"
              color="success"
              onClick={ this.handleSubmit }
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default AddPost;
