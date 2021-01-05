import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./Home.css";
import SignUp from "./SignUp";
import { SignUpWizard } from "./wizard";

const Home = () => {
  const [placeholder, setPlaceholder] = useState("Hi");
  const [isWantTo, setIsWantTo] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    setIsWantTo(false);
    fetch("/hello")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setPlaceholder(data);
        // setPlaceholder(data.result);
      });
  }, []);

  const handleClick = () => {
    setIsWantTo(true);
  };

  const handleNextClick = () => {
    setIsNext(true);
  };

  const handleConfirmedClick = () => {
    setIsConfirmed(true);
  };

  return (
    <div>
      {isWantTo ? (
        // <SignUp
        //   isNext={isNext}
        //   onNextClicked={handleNextClick}
        //   confirmed={isConfirmed}
        //   onConfirmedClicked={handleConfirmedClick}
        // />
        <SignUpWizard />
      ) : (
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
            onClick={() => handleClick()}
          >
            Flask says: {placeholder}
          </Button>
        </div>
      )}
      {/* <p className="i-want-button">Flask says {placeholder}</p> */}
    </div>
  );
};

export default Home;
