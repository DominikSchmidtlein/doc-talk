import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';


class AddPost extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    title: '',
    tags: [],
    support: 0
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
      tags: Object.assign({}, this.state.tags),
      support: this.state.support
    });

    this.setState({
      title: '',
      tags: [],
      support: 0
    });

    window.location = window.location.href.split('add-post')[0];
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
                  <Checkbox value="#upliftingnews" /><label>#upliftingnews</label><br/>
                  <Checkbox value="#pride" /><label> #pride</label><br/>
                  <Checkbox value="#gratitude" /><label> #gratitude</label>
                </CheckboxGroup>
              </Col>
              <Col xs="3">
                <CheckboxGroup name="tags" value={this.state.tags} onChange={this.handleCheck}>
                  <Checkbox value="#feelingmindful" /><label> #feelingmindful</label><br/>
                  <Checkbox value="#putasmileonmyface" /><label> #putasmileonmyface</label><br/>
                  <Checkbox value="#worklifebalance" /><label> #worklifebalance</label>
                </CheckboxGroup>
              </Col>
              <Col xs="3">
                <CheckboxGroup name="tags" value={this.state.tags} onChange={this.handleCheck}>
                  <Checkbox value="#dealingwithdeath" /><label> #dealingwithdeath</label><br/>
                  <Checkbox value="#getthisoffmychest" /><label> #getthisoffmychest</label><br/>
                  <Checkbox value="#support" /><label> #support</label>
                </CheckboxGroup>
              </Col>
              <Col xs="3">
                <CheckboxGroup name="tags" value={this.state.tags} onChange={this.handleCheck}>
                  <Checkbox value="#feelingisolated" /><label> #feelingisolated</label><br/>
                  <Checkbox value="#feelingburnout" /><label> #feelingburnout</label><br/>
                  <Checkbox value="#cantsleep" /><label> #cantsleep</label>
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
