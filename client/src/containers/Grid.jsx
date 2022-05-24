import React from "react";
import { Grid } from "../components";
import { SquaresFour, DeviceTablet, BookmarkSimple } from "phosphor-react";

export default function GridContainer({ children, ...restProps }) {
  return (
    <Grid>
      <Grid.Select>
        <Grid.Option>
          <SquaresFour size={30} />
        </Grid.Option>
        <Grid.Option>
          <DeviceTablet size={30} />
        </Grid.Option>
        <Grid.Option>
          <BookmarkSimple size={30} />
        </Grid.Option>
      </Grid.Select>
    </Grid>
  );
}
