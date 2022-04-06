import React from "react";
import { Box, Card, Typography, InputLabel, Select, MenuItem } from "@material-ui/core";

import { FlightStatuses } from "../../models/flight.model";

interface FlightCardProps {
  code: string;
  origin: string;
  destination: string;
  passengers?: string[];
  status: FlightStatuses;
}

const mapFlightStatusToColor = (status: FlightStatuses) => {
  const mappings = {
    [FlightStatuses.Arrived]: "#1ac400",
    [FlightStatuses.Delayed]: "##c45800",
    [FlightStatuses["On Time"]]: "#1ac400",
    [FlightStatuses.Landing]: "#1ac400",
    [FlightStatuses.Cancelled]: "#ff2600",
  };

  return mappings[status] || "#000000";
};

export const FlightCard: React.FC<FlightCardProps> = (
  props: FlightCardProps
) => {

  const handleStatusChange = (event: React.ChangeEvent<
    {
    name?: string | undefined;
    value: unknown;
}>) => {
    console.log(event?.target.value)
  }

  return (
    <Card
      style={{
        backgroundColor: "#f5f5f5",
        margin: "15px",
        padding: "35px",
        justifyContent: "center",
      }}
    >
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5">{props.code} </Typography>
        <Typography style={{ color: mapFlightStatusToColor(props.status) }}>
          Status: {props.status}
        </Typography>
      </Box>

      <Box>
        <Typography>Origin: {props.origin}</Typography>
      </Box>
      <Box>
        <Typography>Destination: {props.destination}</Typography>
      </Box>

      <Box>
        <Typography>Origin: {props.origin}</Typography>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={props.status}
            label="Status"
            onChange={handleStatusChange}
          >
            {
              Object.entries(FlightStatuses).map(([key, value]) => {
                return (<MenuItem id={key} value={value}>{value}</MenuItem>)
              })
            }
          </Select>
      </Box>
    </Card>
  );
};
