import Followers from "../components/followers";
import Oldfriends from "../components/Oldfriends";
import Notify from '../components/Notify'

const Friends = () => {
  return (
   <div className="fullFriends">
      <Oldfriends/>
      <Followers/>
      <Notify />
   </div>
  );
}

export default Friends;