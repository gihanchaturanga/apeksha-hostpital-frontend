import React from "react";
import ResponsiveAppBar from "../../common/TopNav/TopNav";
import Typography from "@mui/material/Typography";
import "./Main.css";
import { Button, Grid } from "@mui/material";
import { Footer } from "../../common/Footer/Footer";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { DonateComponent } from "../../common/DonateComponent/DonateComponent";
import { DonatePopup } from "../../common/DonatePopup/DonatePopup";

function RenderHome() {
  const [open, setOpen] = React.useState(false);

  const handleChange = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div container direction="column" className="main-outer-container">
        <ResponsiveAppBar />
        <Grid container xs={12} className="main-body-container">
          <Grid item xs={12} sm={7} md={8} className="bg-img"></Grid>
          <Grid display="flex" className="text-box" direction="column" item xs>
            <h1 className="main-text">Your Donations</h1>
            <p className="main-text">Have the Power to</p>
            <h4 className="main-text">Make a Difference..!</h4>
            <Button
              variant="outlined"
              startIcon={<VolunteerActivismIcon />}
              id="donate-btn"
              onClick={handleChange}
            >
              DONATE
            </Button>
          </Grid>
        </Grid>
      </div>

      <Grid container className="main-page-card-wrpper">
        <Grid item md={7} xs={10}>
          <Typography
            variant="h3"
            component="div"
            sx={{
              mr: 2,
              mb: 5,
              mt: 5,
              fontFamily: "ItimBold",
              fontWeight: 900,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            What we are doing to help
          </Typography>
          <Typography
            variant="p"
            component="div"
            sx={{
              mr: 2,
              fontFamily: "ItimBold",
              color: "inherit",
              fontSize: 20,
            }}
          >
            We at Volunteer Sri Lanka have been working hard to put an end to
            medicine shortage. Every human being in Sri Lanka deserves access to
            medicine and basic sanitation, which we take for granted. Humaniti’s
            NGO partners are on the ground to give access to those who don't
            have those. We provide support by providing medicinal supplies,
            sanitary items, & more.
          </Typography>
          <br />
          <Typography
            variant="p"
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "ItimBold",
              color: "inherit",
              fontSize: 20,
            }}
          >
            We feel a responsibility to our brothers and sisters in need. But we
            need your help. Together, we can work towards a country where
            everyone has access to medicines, no matter the circumstance.
            Together, we can help. Will you help us?
          </Typography>
        </Grid>
        <Grid item md={4} xs={12} display="flex" justifyContent="center">
          <DonateComponent />
        </Grid>
      </Grid>
      <DonatePopup open={open} onClose={handleClose} />
      <Footer />
    </div>
  );
}
export default RenderHome;
