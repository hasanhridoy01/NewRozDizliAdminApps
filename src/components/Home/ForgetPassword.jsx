import {
  Button,
  Card,
  CardContent,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Form, useNavigate, useParams } from "react-router-dom";

function ForgetPassword() {
  const navigate = useNavigate();
  const params = useParams();

  //handleForm.......................!
  const handleForm = (e) => {
    e.preventDefault();

    //get value for input filed...............!
    const email = e.target.email.value;

    //validation...............!
    if (!email) {
      alert("please enter your email!");
    } else {
      //navigate to another page............!
      navigate(`/otp/${email}`);
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
              height: "340px",
              width: "380px",
              padding: "50px",
              borderRadius: "15px",
            }}
          >
            <CardContent>
              <Form onSubmit={handleForm}>
                <div
                  style={{
                    justifyContent: "left",
                    alignItems: "center",
                    marginTop: "30px",
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ display: "flex", alignItems: "center", cursor: 'pointer' }}
                  >
                    <ArrowBackIcon style={{ marginRight: "8px" }} />
                    Forget Password
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      marginTop: "34px",
                      fontWeight: "400",
                      textAlign: "left",
                    }}
                  >
                    Enter the email address associated with your Dizli account
                  </Typography>

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
                      Email Address
                    </label>
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
                      sx={{ width: "340px", float: "left", marginTop: "10px" }}
                    />
                  </div>

                  <Button
                    color="primary"
                    type="submit"
                    variant="contained"
                    sx={{
                      width: "340px",
                      marginTop: "20px",
                      height: "55px",
                      float: "left",
                      textTransform: 'none'
                    }}
                  >
                    Continue
                  </Button>
                </div>
              </Form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default ForgetPassword;
