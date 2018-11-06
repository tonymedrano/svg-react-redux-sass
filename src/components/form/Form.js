import React from "react"
import { connect } from "react-redux"
import { Container, Divider, Message } from "semantic-ui-react"

import FormProfile from "../form-profile/FormProfile"

const Form = props => (
    <Container>
        <Divider hidden />
        <FormProfile onSubmit={() => console.log("FormProfile was submitted")} />
        <Message>
            <Message.Header>Form data:</Message.Header>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </Message>
    </Container>
)

const mapStateToProps = state => {
    return state.form.profile
        ? {
            values: state.form.profile.values,
            submitSucceeded: state.form.profile.submitSucceeded
        }
        : {}
}

export default connect(mapStateToProps)(Form)
