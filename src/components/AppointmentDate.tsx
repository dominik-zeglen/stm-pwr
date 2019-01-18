import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Navigator from "./Navigator";
import { TextField, Button } from "@material-ui/core";
import Form from "./Form";

export interface AppointmentDateProps {
  clinic: string;
}

const initialForm = {
  date: ""
};
const AppointmentDate: React.SFC<AppointmentDateProps> = ({ clinic }) => (
  <Navigator>
    {navigate => (
      <Form
        initial={initialForm}
        onSubmit={formData =>
          navigate("/appointment/" + clinic + "/" + formData.date.split("-")[2])
        }
      >
        {({ change, data, submit, hasChanged }) => (
          <>
            <Card>
              <CardContent>
                <TextField
                  label="Dzień wizyty"
                  name={"date" as keyof typeof data}
                  type="date"
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={change}
                  value={data.date}
                  fullWidth
                />
              </CardContent>
            </Card>
            <Button
              disabled={!hasChanged}
              style={{ marginTop: 16 }}
              variant="raised"
              color="primary"
              onClick={submit}
            >
              Pokaż dostępne terminy
            </Button>
          </>
        )}
      </Form>
    )}
  </Navigator>
);
export default AppointmentDate;
