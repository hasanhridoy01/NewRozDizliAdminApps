import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { Form, useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Otp.css";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";

const Otp = () => {
  const params = useParams();
  const [isVisible, setIsVisible] = useState(true);
  const [isValidate, setIsValidate] = useState(true);
  // const [success, setSuccess] = useState(true);
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const [seconds, setSeconds] = useState(10);

  // Function to update the timer display
  function updateTimer() {
    setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
  }

  // Update the timer every second (1000 milliseconds)
  useEffect(() => {
    const timerInterval = setInterval(updateTimer, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    setSeconds(10);
    setIsVisible(true);

    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [otp]);

  // Format the time display...........................!
  const minutes = Math.floor(seconds / 10);
  const remainingSeconds = seconds % 10;
  const timeString = `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;

  //Handle verification form.........................!
  const handleVerified = (e) => {
    e.preventDefault();

    //get form data...................!
    const email = params.email;

    //validation.....................!
    if (!email) {
      setIsValidate(false);
    } else if (!otp) {
      setIsValidate(false);
    } else {
      navigate("/registration");
    }

    // const numberOne = e.target.numberOne.value;
    // const numberTwo = e.target.numberTwo.value;
    // const numberThree = e.target.numberThree.value;
    // const numberFour = e.target.numberFour.value;

    // //validation................!
    // if (!email) {
    //   setIsValidate(false);
    // } else if (!numberOne) {
    //   setIsValidate(false);
    // } else if (!numberTwo) {
    //   setIsValidate(false);
    // } else if (!numberThree) {
    //   setIsValidate(false);
    // } else if (!numberFour) {
    //   setIsValidate(false);
    // } else {
    //   //navigate to another page...............!
    //   navigate("/registration");
    //   setSuccess(false);
    // }
  };

  //handleNavigation......................!
  const handleNavigation = () => {
    navigate(-1);
  }

  return (
    <>
      <Container>
        <div
          className=""
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: 0,
            marginTop: "75px",
          }}
        >
          <Card
            sx={{
              height: "420px",
              width: "350px",
              padding: "50px",
              borderRadius: "15px",
            }}
          >
            <CardContent>
              <div
                style={{
                  justifyContent: "left",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ display: "flex", alignItems: "center", cursor: 'pointer' }}
                  onClick={handleNavigation}
                >
                  <ArrowBackIcon style={{ marginRight: "8px" }} />
                  Verification
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    marginTop: "34px",
                    fontWeight: "500",
                    textAlign: "left",
                  }}
                >
                  We texted you a code to verify your account
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    marginTop: "27px",
                    fontWeight: "400",
                    textAlign: "left",
                  }}
                >
                  Enter the security code we have sent to:{" "}
                </Typography>

                <Form onSubmit={handleVerified}>
                  <Typography
                    variant="body2"
                    name="email"
                    sx={{
                      marginTop: "7px",
                      fontWeight: "500",
                      textAlign: "left",
                      color: "#06b6d4",
                      fontSize: "16px",
                    }}
                  >
                    {params.email}
                  </Typography>

                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderSeparator={
                      <span style={{ marginRight: "13px" }}></span>
                    }
                    renderInput={(props) => (
                      <input
                        {...props}
                        style={{
                          width: "60px",
                          height: "50px",
                          marginTop: "20px",
                          fontSize: "24px",
                          textAlign: "center",
                          background: "#fafafa",
                          borderRadius: "5px",
                          border:
                            isVisible && isValidate
                              ? "#fafafa"
                              : "2px solid red",
                          backgroundColor:
                            isVisible && isValidate ? "#fafafa" : "#FFECEC",
                        }}
                        disabled={!isVisible}
                      />
                    )}
                  />

                  {isVisible ? (
                    <div
                      id="timer"
                      style={{
                        float: "right",
                        marginTop: "19px",
                        fontSize: "20px",
                        color: '#06b6d4',
                        fontWeight: '500',
                        WebkitFontSmoothing: 'antialiased'
                      }}                      
                    >
                      {timeString}
                    </div>
                  ) : (
                    <Typography
                      sx={{
                        marginTop: "16px",
                        fontWeight: "500",
                        textAlign: "left",
                        color: "red",
                      }}
                      variant="body2"
                    >
                      Time has expired
                    </Typography>
                  )}

                  {isVisible && !isValidate && (
                    <Typography
                      sx={{
                        marginTop: "16px",
                        fontWeight: "500",
                        textAlign: "left",
                        color: "red",
                      }}
                      variant="body2"
                    >
                      Please enter valid OTP
                    </Typography>
                  )}

                  <Typography
                    sx={{
                      marginTop: "20px",
                      fontWeight: "500",
                      textAlign: "left",
                    }}
                    variant="body2"
                  >
                    Did not receive a code?{" "}
                    {
                      !isVisible && <span style={{ textDecoration: "underline", color: "#06b6d4", cursor: 'pointer'  }}>RESEND</span>
                    }
                    {" "}
                  </Typography>

                  <Button
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      float: "left",
                      marginTop: "23px",
                      textTransform: "none",
                      color: isVisible ? "#06b6d4" : "#fff",
                      backgroundColor: isVisible ? "transparent" : "#06b6d4",
                      borderColor: isVisible ? "#06b6d4" : "transparent"
                    }}
                    type="submit"
                    variant={isVisible ? "outlined" : "contained"}
                    size="large"
                    disabled={!isVisible}
                  >
                    Verified
                  </Button>

                  {/* <div
                    className=""
                    style={{ float: "left", marginTop: "15px" }}
                  >
                    <Stack direction="row" spacing={2}>
                      <TextField
                        className="inputStyleTwo"
                        name="numberOne"
                        sx={{
                          fontSize: "30px",
                          border:
                            isVisible & isValidate ? "none" : "2px solid red",
                          backgroundColor:
                            isVisible & isValidate ? "#ffffff" : "#FFECEC",
                        }}
                      />
                      <TextField
                        className="inputStyleTwo"
                        name="numberTwo"
                        sx={{
                          fontSize: "30px",
                          border:
                            isVisible & isValidate ? "none" : "2px solid red",
                          backgroundColor:
                            isVisible & isValidate ? "#ffffff" : "#FFECEC",
                        }}
                      />
                      <TextField
                        className="inputStyleTwo"
                        name="numberThree"
                        sx={{
                          fontSize: "30px",
                          border:
                            isVisible & isValidate ? "none" : "2px solid red",
                          backgroundColor:
                            isVisible & isValidate ? "#ffffff" : "#FFECEC",
                        }}
                      />
                      <TextField
                        className="inputStyleTwo"
                        name="numberFour"
                        sx={{
                          fontSize: "30px",
                          border:
                            isVisible & isValidate ? "none" : "2px solid red",
                          backgroundColor:
                            isVisible & isValidate ? "#ffffff" : "#FFECEC",
                        }}
                      />
                    </Stack>

                    
                    {isVisible ? (
                      ""
                    ) : (
                      <Typography
                        sx={{
                          marginTop: "16px",
                          fontWeight: "500",
                          textAlign: "left",
                          color: "red",
                        }}
                        variant="body2"
                      >
                        Time has expired
                      </Typography>
                    )}

                    {isVisible && !isValidate && (
                      <Typography
                        sx={{
                          marginTop: "16px",
                          fontWeight: "500",
                          textAlign: "left",
                          color: "red",
                        }}
                        variant="body2"
                      >
                        Please enter valid OTP
                      </Typography>
                    )}

                    <Typography
                      sx={{
                        marginTop: "16px",
                        fontWeight: "500",
                        textAlign: "left",
                      }}
                      variant="body2"
                    >
                      Didn't receive a code?{" "}
                      <span style={{ textDecoration: "underline" }}>
                        RESEND
                      </span>{" "}
                    </Typography>

                    <Button
                      sx={{
                        alignItems: "left",
                        float: "left",
                        marginTop: "14px",
                      }}
                      type="submit"
                      variant="outlined"
                    >
                      Verified
                    </Button>
                  </div> */}
                </Form>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default Otp;
