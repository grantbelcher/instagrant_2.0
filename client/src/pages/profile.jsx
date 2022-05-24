import React from "react";
import ProfileContainer from "../containers/Profile";
import GridContainer from "../containers/Grid";
import styled from "styled-components";
const Page = styled.div`
  @media (min-width: 735px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default function ProfilePage() {
  return (
    <Page>
      <ProfileContainer />
      <GridContainer />
    </Page>
  );
}
