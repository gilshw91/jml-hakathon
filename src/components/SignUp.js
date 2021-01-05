import useState from "react";
import { Form, FormLabel, Row, Col, Button } from "react-bootstrap";
import "./SignUp.css";
import ValidateCode from "./ValidateCode";

const SignUp = ({ isNext, onNextClicked, confirmed, onConfirmedClicked }) => {
  return !isNext ? (
    <Form className="content" onClick={() => console.log("Submit")}>
      <Row>
        <Col>
          <FormLabel>First Name</FormLabel>
          <Form.Control
            type="text"
            name="first-name"
            placeholder="Please fill your first name"
            // ref={register({ required: "Required" })}
          />
        </Col>
        <Col>
          <FormLabel>Last Name</FormLabel>
          <Form.Control
            type="text"
            name="last-name"
            placeholder="Please fill your last name"
            // ref={register({ required: "Required" })}
          />
        </Col>
      </Row>
      <FormLabel>Email Address</FormLabel>
      <Form.Control
        type="email"
        name="email"
        placeholder="Please fill your Email"
        // ref={register({ required: "Required" })}
      />
      <FormLabel>Password</FormLabel>
      <Form.Control
        type="password"
        name="password"
        placeholder="Please choose password"
        // ref={register({ required: "Required" })}
      />
      <FormLabel>Confirm Password</FormLabel>
      <Form.Control
        type="password"
        name="confirm-password"
        placeholder="Please enter your password again"
        // ref={register({ required: "Required" })}
      />
      <Form.Group>
        <Form.Check
          type="checkbox"
          name="terms"
          label="I Agree to terms & services"
          // ref={register({ required: "Required" })}
        />
        <Form.Check
          type="checkbox"
          name="updates"
          label="I Agree to recieve Emails containing updates and news about my account"
          // ref={register({ required: "Required" })}
        />
      </Form.Group>
      <Button href="#" variant="primary" onClick={() => onNextClicked(true)}>
        Next &gt;
      </Button>
    </Form>
  ) : (
    <ValidateCode
      confirmed={confirmed}
      onConfirmedClicked={onConfirmedClicked}
    />
  );
};
export default SignUp;
