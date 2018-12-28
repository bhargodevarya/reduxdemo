import React from "react";
import Form from "react-bootstrap/lib/Form";
import FormControl from "react-bootstrap/lib/FormControl";
import FormGroup from "react-bootstrap/lib/FormGroup";
import Col from "react-bootstrap/lib/Col";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import Button from "react-bootstrap/lib/Button";
import { connect } from "react-redux";
import * as action from "../actions/actions";

import { CustomTable } from "./Table";

class SearchBar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        name: '',
        userMail: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCreateUser = this.handleCreateUser.bind(this)
    this.createTable = this.createTable.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getAllUsers();
    console.log(">> props", this.props);
    this.setState({name: '',userMail: ''})
  }

  handleCreateUser(event) {
      event.preventDefault()
      this.props.createUser(this.state.name, this.state.userMail)
  }

  handleEmailChange(event) {
      this.setState({userMail:event.target.value})
  }

  handleNameChange(event) {
      this.setState({name: event.target.value})
  }

  createTable(users) {
    return <CustomTable users={users} />;
  }

  render() {
    console.log(">> from render", this.props.user);
    const userTable = this.createTable(this.props.user);
    return (
      <div>
        <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={5}>
              <FormControl type="text" value={this.state.name} placeholder={"name"} onChange={this.handleNameChange}/>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={5}>
              <FormControl type="text" value={this.state.userMail} placeholder={"email"} onChange={this.handleEmailChange} />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={5}>
              <Button onClick={this.handleCreateUser}>addUser</Button>
            </Col>
          </FormGroup>
        </Form>
        <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={5}>
              <FormControl type="text" placeholder="Email" />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={5}>
              <Button>
                search
              </Button>
              <Button type="submit" onClick={this.handleSubmit}>showAll</Button>
            </Col>
          </FormGroup>
        </Form>
        {userTable}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllUsers: () => dispatch(action.getAllUsersAction()),
    createUser: (name, email) => dispatch(action.createUser(name, email))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
