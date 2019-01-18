import * as React from "react";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Navigator from "./Navigator";

interface HomeProps {}

const styles = createStyles({
  card: {
    cursor: "pointer",
    margin: "24px auto",
    width: 768,
    "&:hover": {
      backgroundColor: "#f3f3f3"
    }
  },
  root: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
  }
});

const Home = withStyles(styles, {
  name: "Home"
})(({ classes }: HomeProps & WithStyles<typeof styles>) => (
  <Navigator>
    {navigate => (
      <div className={classes.root}>
        <Card className={classes.card} onClick={() => navigate("/appointment")}>
          <CardContent>
            <Typography variant="button">Zarejestruj wizytę</Typography>
          </CardContent>
        </Card>
        <Card
          className={classes.card}
          onClick={() => navigate("/appointments")}
        >
          <CardContent>
            <Typography variant="button">Nadchodzące wizyty</Typography>
          </CardContent>
        </Card>
        <Card
          className={classes.card}
          onClick={() => navigate("/appointment-history")}
        >
          <CardContent>
            <Typography variant="button">Historia wizyt</Typography>
          </CardContent>
        </Card>
      </div>
    )}
  </Navigator>
));
export default Home;
