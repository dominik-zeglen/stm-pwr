import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Navigator from "./Navigator";
import { clinics } from "../data";

interface AppointmentProps {}

const styles = {
  card: {
    cursor: "pointer",
    margin: "24px auto",
    width: 576,
    "&:hover": {
      backgroundColor: "#f3f3f3"
    }
  },
  root: {
    alignItems: "center",
    display: "flex"
  }
};

const Appointment = withStyles(styles, {
  name: "Appointment"
})(({ classes }: AppointmentProps & WithStyles<typeof styles>) => (
  <Navigator>
    {navigate => (
      <>
        {clinics.map((clinic, clinicIndex) => (
          <div className={classes.root}>
            <Card
              className={classes.card}
              onClick={() => navigate("/appointment/" + clinicIndex)}
            >
              <CardContent>
                <Typography variant="button">{clinic.name}</Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </>
    )}
  </Navigator>
));
export default Appointment;
