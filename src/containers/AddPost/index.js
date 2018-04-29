import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, Container, Row, Col } from 'reactstrap';
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

    this.props.handle();
  }

  render() {
    return (
        <div className="AddPost">
            <Form>
             <FormGroup>
                <InputGroup>
                <Input
                  style={{height: '200px'}}
                  type="textarea"
                  name="text"
                  id="message"
                  placeholder="Share your story..."
                  onChange={ this.handleChange }
                  value={ this.state.title } />
                  <InputGroupAddon addonType="append">
                  <Button
                    type="submit"
                    color="success"
                    onClick={ this.handleSubmit }
                  >
                    Submit
                  </Button>
                  </InputGroupAddon>
                  </InputGroup>
              </FormGroup>
              <Row>
                <Col xs="3">
                  <CheckboxGroup name="tags" value={this.state.tags} onChange={this.handleCheck}>
                    <Checkbox value="#upliftingnews" /><label><font size="2"> #upliftingnews</font></label><br/>
                    <Checkbox value="#pride" /><label><font size="2"> #pride</font></label><br/>
                    <Checkbox value="#gratitude" /><label><font size="2"> #gratitude</font></label>
                  </CheckboxGroup>
                </Col>
                <Col xs="3">
                  <CheckboxGroup name="tags" value={this.state.tags} onChange={this.handleCheck}>
                    <Checkbox value="#feelingmindful" /><label><font size="2"> #feelingmindful</font></label><br/>
                    <Checkbox value="#putasmileonmyface" /><label><font size="2"> #putasmileonmyface</font></label><br/>
                    <Checkbox value="#worklifebalance" /><label><font size="2"> #worklifebalance</font></label>
                  </CheckboxGroup>
                </Col>
                <Col xs="3">
                  <CheckboxGroup name="tags" value={this.state.tags} onChange={this.handleCheck}>
                    <Checkbox value="#dealingwithdeath" /><label><font size="2"> #dealingwithdeath</font></label><br/>
                    <Checkbox value="#getthisoffmychest" /><label><font size="2"> #getthisoffmychest</font></label><br/>
                    <Checkbox value="#support" /><label><font size="2"> #support</font></label>
                  </CheckboxGroup>
                </Col>
                <Col xs="3">
                  <CheckboxGroup name="tags" value={this.state.tags} onChange={this.handleCheck}>
                    <Checkbox value="#feelingisolated" /><label><font size="2"> #feelingisolated</font></label><br/>
                    <Checkbox value="#feelingburnout" /><label><font size="2"> #feelingburnout</font></label><br/>
                    <Checkbox value="#cantsleep" /><label><font size="2"> #cantsleep</font></label>
                  </CheckboxGroup>
                </Col>
              </Row>
            </Form>
        </div>
    );
  }
}

export default AddPost;
