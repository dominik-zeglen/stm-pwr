import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

interface AppointmentDetailsProps {}

const AppointmentDetails: React.SFC<AppointmentDetailsProps> = () => (
  <Card>
    <CardContent>
      <Typography variant="caption">Termin</Typography>
      <Typography>02.9.2018</Typography>

      <Typography variant="caption">Lekarz</Typography>
      <Typography>Grzesznik Jan</Typography>

      <Typography variant="caption">Opis wizyty</Typography>
      <Typography>
        Pacjent cierpi na poważne bóle końcowego odcinka jelita grubego.
      </Typography>

      <Typography variant="caption">Rozpoznanie</Typography>
      <Typography>Prolapsus recti et ani</Typography>

      <Typography variant="caption">Zwolnienia</Typography>
      <Typography>02.9.2018 - 02.11.2018</Typography>

      <Typography variant="caption">Recepty</Typography>
      <Typography>Rectix Max 180mg</Typography>

      <Typography variant="caption">Skierowania</Typography>
      <Typography>Kolonoskopia, dr med. Jakub Rozpruwacz</Typography>
    </CardContent>
  </Card>
);
export default AppointmentDetails;
