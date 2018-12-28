import React from 'react'
import Form from 'react-bootstrap/lib/Form'
import FormControl from 'react-bootstrap/lib/FormControl'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Button from 'react-bootstrap/lib/Button'
import { connect } from 'react-redux'
import * as action from '../actions/actions';

import { CustomTable } from './Table'

class SearchBar extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.createTable = this.createTable.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.getAllUsers()
        console.log(">> props", this.props)
    }

    createTable(users) {
        return <CustomTable users={users}></CustomTable>
    }

    render() {
        console.log(">> from render", this.props.user)
        const userTable = this.createTable(this.props.user)
        return <div>
            <Form horizontal >
                <FormGroup>
                    <Col componentClass = {ControlLabel} sm = {2} >
                        Email 
                    </Col> 
                    <Col sm = {5}>
                        <FormControl type = "email" placeholder = "Email" />
                    </Col> 
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm = {5}>
                        <Button type= "submit" onClick={this.handleSubmit}>search</Button>
                        <Button type= "submit">showAll</Button>
                    </Col>
                </FormGroup>
            </Form>
            {userTable}
            </div>
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllUsers: () => dispatch(action.getAllUsersAction())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);