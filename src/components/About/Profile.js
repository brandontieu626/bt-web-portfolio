import { IoMdNotificationsOutline } from "react-icons/io";

const Profile = ({source}) => {
  const profileStyle= {
    borderRadius:'25px',
    display:'flex',
    height:'400px',
    width:'400px',
    boxShadow: '2px 2px 20px rgba(80, 78, 78, 0.5)',
  }

  return (
    <img style={profileStyle} src={source}/>
  )
}

export default Profile;