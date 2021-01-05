import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Home.css";

const Home2 = () => {
  const history = useHistory();
  const handleButtonClick = () => history.push("/signup");
  return (
    <div>
      <h3 className="content center">
        Find new and
        <br />
        meaningful
        <br />
        connections
        <br />
        easily
      </h3>
      <p className="content-paragraph center">
        Create new friendships and meet
        <br />
        new people around you based on
        <br />
        your mutual interests and hobbies
      </p>
      <Button
        // href="/sign-up"
        variant="primary"
        onClick={() => handleButtonClick()}
      >
        Signup with us!
      </Button>
    </div>
  );
};

export default Home2;
