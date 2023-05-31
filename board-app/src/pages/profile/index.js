import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ProfileSideNav from "./components/profile-side-nav";

const Profile = () => {
  return (
    <S.ProfileContainer>
      <ProfileSideNav />
      <Outlet />
    </S.ProfileContainer>
  );
};
const ProfileContainer = styled.div`
  display: flex;
`;

const S = { ProfileContainer };
export default Profile;
