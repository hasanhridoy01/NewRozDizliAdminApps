import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  FormControlLabel,
  Typography,
} from "@mui/material";
import "./Home.css";
import { InputAdornment, TextField } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

const Home = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  //Handle Password Methods.................!
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  //Handle Email verification...................!
  const handleFormSubmit = (e) => {
    e.preventDefault();

    //get value for Form.................!
    const email = e.target.email.value;
    const password = e.target.password.value;

    //form validation.....................!
    if (!email) {
      alert("please insert a email");
    } else if (!password) {
      alert("please enter a password");
    } else {
      alert();
      //form reset for user...............!
      document.getElementById("FormId").reset();
    }
  };

  //Handle Forget Password.....................!
  const handleForgetPassword = (e) => {
    e.preventDefault();

    //navigate to another page....................!
    navigate("/forgetPassword");
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
          <Card sx={{ height: "530px", width: "500px" }}>
            <CardContent>
              <Form onSubmit={handleFormSubmit} id="FormId">
                <div className="" style={{ margin: "auto" }}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      marginTop: "20px",
                      color: "#002B49",
                      fontWeight: "700",
                      marginBottom: "30px",
                    }}
                  >
                    عطيني
                  </Typography>

                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      marginTop: "20px",
                      color: "#002B49",
                      fontWeight: "500",
                      marginBottom: "50px",
                    }}
                  >
                    Login
                  </Typography>

                  <TextField
                    className="inputStyle"
                    type="text"
                    name="email"
                    required
                    placeholder="Email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailOutlineIcon />
                        </InputAdornment>
                      ),
                    }}
                  />

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
                    sx={{ marginTop: "25px" }}
                  />

                  <div
                    className=""
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      marginTop: "26px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Remember Me"
                      sx={{ marginRight: "56px" }}
                    />
                    <Typography
                      variant="body1"
                      onClick={handleForgetPassword}
                      sx={{
                        marginLeft: "2px",
                        "&:hover": {
                          color: "#00a1a1",
                          cursor: "pointer",
                          textDecoration: "underline",
                        },
                        marginRight: "0px",
                      }}
                    >
                      Forgot Password?
                    </Typography>
                  </div>

                  <Button
                    color="primary"
                    type="submit"
                    variant="contained"
                    sx={{
                      width: "400px",
                      marginTop: "20px",
                      height: "50px",
                      textTransform: "none",
                      fontSize: '18px'
                    }}
                  >
                    Sign In
                  </Button>
                </div>
              </Form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default Home;
