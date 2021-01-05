import { Form, FormGroup, FormLabel } from "react-bootstrap";
import femaleImage from "../../images/female.png";
import maleImage from "../../images/male.png";
import unicornImage from "../../images/whatever.png";

import "./IdInfo.css";

const IdInfo = ({
  gender,
  age,
  neighborhood,
  image,
  onInputChanged,
  errors,
}) => {
  return (
    <div className="center">
      <h3>Personal Info</h3>
      <FormGroup>
        <p>I am a...</p>
        <FormLabel>
          <Form.Control
            type="radio"
            name="gender"
            value="male"
            onChange={onInputChanged}
          />
          <img alt="a" src={maleImage} />
        </FormLabel>
        <FormLabel>
          <Form.Control
            type="radio"
            name="gender"
            value="female"
            onChange={onInputChanged}
          />
          <img alt="b" src={femaleImage} />
        </FormLabel>
        <FormLabel>
          <Form.Control
            type="radio"
            name="gender"
            value="whatever"
            onChange={onInputChanged}
          />
          <img alt="c" src={unicornImage} />
        </FormLabel>
      </FormGroup>
      <p style={{ color: "red" }}>{errors.gender}</p>
      <FormGroup>
        <FormLabel>
          Age
          <Form.Control
            type="number"
            name="age"
            value={age}
            onChange={onInputChanged}
          ></Form.Control>
        </FormLabel>
        <p style={{ color: "red" }}>{errors.age}</p>
      </FormGroup>
      <FormGroup>
        <FormLabel>
          I live in...
          <Form.Control
            as="select"
            onChange={onInputChanged}
            name="neighborhood"
            value={neighborhood}
          >
            <option hidden>Choose...</option>
            <option value="rehavia">rehavia</option>
            <option value="oldkatamon">Old Katamon</option>
            <option value="nachlaot">Nachlaot</option>
            <option value="frenchhill">French Hill</option>
            <option value="Nayot">Nayot</option>
            <option value="Arnona">Arnona</option>
          </Form.Control>
        </FormLabel>
        <p style={{ color: "red" }}>{errors.neighborhood}</p>
      </FormGroup>
      <FormGroup>
        <FormLabel>
          Let's see your beautiful face..
          <Form.Control
            type="file"
            name="image"
            value={image}
            onChange={onInputChanged}
          />
        </FormLabel>
        <p style={{ color: "red" }}>{errors.image}</p>
      </FormGroup>
    </div>
  );
};

export default IdInfo;
