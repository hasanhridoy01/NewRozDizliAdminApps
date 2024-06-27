import {
  Button,
  Card,
  CardContent,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Form, useNavigate } from "react-router-dom";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);

  //Navigate On Another Page................!
  const navigate = useNavigate();

  //Handle Password Methods.................!
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleTogglePasswordVisibilityTwo = () => {
    setShowPasswordTwo((prevShowPassword) => !prevShowPassword);
  };

  //handleForm....................!
  const handleForm = (e) => {
    e.preventDefault();

    //get value for form......................!
    const password = e.target.password.value;
    const resetPassword = e.target.resetPassword.value;

    //Password Validation.....................!
    const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    const containsUppercase = /[A-Z]/.test(password);
    const containsLowercase = /[a-z]/.test(password);
    const containsNumber = /\d/.test(password);

    //password validation................!
    if (password == resetPassword) {
      if (password.length < 8) {
        alert("Your password must be at least 8 characters long.");
      } else if (!specialCharacterRegex.test(password)) {
        alert(
          "Your password must include at least one special character (e.g., !, @, #)."
        );
      } else if (!containsUppercase) {
        alert(
          "Your password must include at least one uppercase letter (e.g., A, B, C)."
        );
      } else if (!containsLowercase) {
        alert(
          "Your password must include at least one lowercase letter (e.g., a, b, c)."
        );
      } else if (!containsNumber) {
        alert(
          "Your password must include at least one number (e.g., 1, 2, 3)."
        );
      } else {
        navigate("/");
      }
    } else {
      alert("password and resetPassword not match");
    }
  };
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
            marginTop: "100px",
          }}
        >
          <Card
            sx={{
              height: "450px",
              width: "390px",
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
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <ArrowBackIcon style={{ marginRight: "8px" }} />
                  Create a new password
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    marginTop: "34px",
                    fontWeight: "400",
                    textAlign: "left",
                  }}
                >
                  Do not use previous password as your new password
                </Typography>

                <Form onSubmit={handleForm}>
                  <div
                    className=""
                    style={{ alignItems: "left", marginTop: "24px" }}
                  >
                    <label
                      htmlFor=""
                      style={{
                        float: "left",
                        fontWeight: "500",
                        fontFamily: "sans-serif",
                      }}
                    >
                      New Password
                    </label>
                    <TextField
                      className="inputStyle"
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Password"
                      name="password"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockClockOutlinedIcon />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            onClick={handleTogglePasswordVisibility}
                            style={{ cursor: "pointer" }}
                          >
                            <VisibilityOutlinedIcon />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ marginTop: "18px", width: "370px" }}
                    />
                  </div>

                  <div
                    className=""
                    style={{ alignItems: "left", marginTop: "24px" }}
                  >
                    <label
                      htmlFor=""
                      style={{
                        float: "left",
                        fontWeight: "500",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Re-enter Password
                    </label>
                    <TextField
                      className="inputStyle"
                      type={showPasswordTwo ? "text" : "password"}
                      required
                      placeholder="Reset Password"
                      name="resetPassword"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockClockOutlinedIcon />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            onClick={handleTogglePasswordVisibilityTwo}
                            style={{ cursor: "pointer" }}
                          >
                            <VisibilityOutlinedIcon />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ marginTop: "18px", width: "370px" }}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      marginTop: "20px",
                      width: "370px",
                      height: "55px",
                      backgroundColor: "#d2d2d2",
                      color: "gray",
                      textTransform: "none",
                    }}
                  >
                    Continue
                  </Button>
                </Form>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default Registration;
