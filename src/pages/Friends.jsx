import Followers from "../components/followers";
import Oldfriends from "../components/Oldfriends";
import Notify from '../components/Notify'
import Shortcuts from "../components/Shortcuts";
import '../friends.css';

const Friends = () => {
  return (
    <div className="fullFriends">
      <div className="maincontainer">
        <div className="cont1">
          <Shortcuts/>
        </div>
        <div className="cont2">
          <Oldfriends />
        </div>
        <div className="cont3">
          <Followers />
        </div>
      </div>
      <Followers />
      <Notify />
    </div>
  );
}

export default Friends;