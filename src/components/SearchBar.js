import React from 'react'
import Form from 'react-bootstrap/lib/Form'
import FormControl from 'react-bootstrap/lib/FormControl'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Button from 'react-bootstrap/lib/Button'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as action from '../actions/actions';

class SearchBar extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.props.action)
        this.props.action.getAllUsers()
    }

    render() {
        return <div><Form horizontal >
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
            {this.props.user.name}
            </div>
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user:state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(Object.assign({}, action), dispatch)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);