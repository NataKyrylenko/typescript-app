import "./styles.css";

function ProfileCard() {
  const userData = {
    avatar: "https://img.freepik.com/premium-vector/student-avatar-illustration-user-profile-icon-youth-avatar_118339-4406.jpg?w=740",
    userName: "Alex Parker",
    profession: "Software Engineer specializing in artificial intelligence and robotics",
    hobbies: ["Reading ", "creating autonomous robots ", "Traveling "],
  };
  
  return (
    <div className="profileCard">
      <img src={userData.avatar}/>
      <h3 className="userTitle">{userData.userName}</h3>
      <p className="userPretitle">{userData.profession}</p>
      <p>{userData.hobbies[0]}</p>
    </div>
  );
}

export default ProfileCard;
