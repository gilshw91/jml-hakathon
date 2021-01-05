import { Form, Button, FormLabel } from "react-bootstrap";
import PersonalInfo from "./PersonalInfo";

import "./ValidateCode.css";

const ValidateCode = ({ confirmed, onConfirmedClicked }) => {
  return !confirmed ? (
    <div className="center">
      <h3>LET us know it's you</h3>
      <p>bla bla bla</p>
      <Form>
        <FormLabel>Confirmation Code</FormLabel>
        <Form.Control placeholder="123456" />
        <Button onClick={onConfirmedClicked}> Next &gt;</Button>
      </Form>
    </div>
  ) : (
    <PersonalInfo />
  );
};

export default ValidateCode;
