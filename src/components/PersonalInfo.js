import { FormLabel, Form, FormGroup } from "react-bootstrap";
import "./PersonalInfo.css";

const PersonalInfo = ({ confirmed, onConfirmedClicked }) => {
  return (
    <div className="center">
      <h3>Personal Info</h3>
      <FormGroup>
        <p>I am a...</p>
        <FormLabel>
          <Form.Control type="radio" name="test" value="male" checked />
          <img
            alt="a"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymxOxKrVr-pirzBIVIwspDCsViqJvDIVOHQ&usqp=CAU"
          />
        </FormLabel>
        <FormLabel>
          <Form.Control type="radio" name="test" value="female" />
          <img
            alt="b"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jLFIMaK1Kd-mNEoTeHWayXo4fi5fGqWikQ&usqp=CAU"
          />
        </FormLabel>
        <FormLabel>
          <Form.Control type="radio" name="test" value="whatever" />
          <img
            alt="b"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Y4FX20ICFuc1W3FAslfwAXX9zcQBDj0uvw&usqp=CAU"
          />
        </FormLabel>
      </FormGroup>
      <FormGroup>
        <FormLabel>
          Birthday
          <Form.Control type="date" name="birthday"></Form.Control>
        </FormLabel>
      </FormGroup>
      <FormGroup>
        <FormLabel>
          I live in...
          <Form.Control as="select" defaultValue="Choose...">
            <option hidden>Choose...</option>
            <option value="rehavia">rehavia</option>
            <option value="oldkatamon">Old Katamon</option>
            <option value="nachlaot">Nachlaot</option>
            <option value="frenchhill">French Hill</option>
            <option value="Nayot">Nayot</option>
            <option value="Arnona">Arnona</option>
          </Form.Control>
        </FormLabel>
      </FormGroup>
      <FormGroup>
        <FormLabel>
          Let's see your beautiful face..
          <Form.File />
        </FormLabel>
      </FormGroup>
      {/* <Form.Check
        className="gender"
        type="radio"
        name="gender"
        // id="gender"
        label="I am a..."
      ></Form.Check> */}
    </div>
  );
};

export default PersonalInfo;
