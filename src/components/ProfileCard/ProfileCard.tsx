import {
  ProfileCardComponent,
  ProfileCardTitle,
  ProfileCardText,
  ProfileCardImg,
} from "./styles";
import { User } from "./types";

function ProfileCard() {
  const userData: User = {
    avatar:
      "https://img.freepik.com/premium-vector/student-avatar-illustration-user-profile-icon-youth-avatar_118339-4406.jpg?w=740",
    userName: "Alex Parker",
    profession:
      "Software Engineer specializing in artificial intelligence and robotics",
    hobbies: ["Reading ", "creating autonomous robots ", "Traveling "],
  };

  return (
    <ProfileCardComponent>
      <ProfileCardImg src={userData.avatar}></ProfileCardImg>
      <ProfileCardTitle>{userData.userName}</ProfileCardTitle>
      <ProfileCardText>{userData.profession}</ProfileCardText>
      <ProfileCardText>{userData.hobbies[0]}</ProfileCardText>
    </ProfileCardComponent>
  );
}

export default ProfileCard;
