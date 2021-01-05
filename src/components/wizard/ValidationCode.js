import { Form, Button, FormLabel } from "react-bootstrap";
import PersonalInfo from "./PersonalInfo";

const ValidationCode = ({ validationCode, onInputChanged, errors }) => {
  return (
    <div className="content">
      <h3>LET us know it's you</h3>
      <p>bla bla bla</p>
      <Form>
        <FormLabel>Confirmation Code</FormLabel>
        <Form.Control
          type="text"
          name="validationCode"
          placeholder="123456"
          value={validationCode}
          onChange={onInputChanged}
        />
        <p style={{ fontSize: "12px" }}>
          Didn't recieve an Email? <a href="#">Click Here</a> to resend
        </p>
        <p style={{ color: "red" }}>{errors.validationCode}</p>
      </Form>
    </div>
  );
};

export default ValidationCode;
