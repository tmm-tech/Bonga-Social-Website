import Followers from "../components/followers";
import OtherHeader from "../components/OtherHeader";
import Shortcuts from "../components/Shortcuts";
import '../friends.css';
import Allfriends from "../components/Allfriends";

const Friends = () => {
  return (
    <div className="fullFriends">
      <OtherHeader/>
      <div className="maincontainer">
        <div className="cont1">
          <Shortcuts/>
        </div>
        <div className="cont2">
          <Allfriends />
        </div>
        <div className="cont3">
          <Followers />
        </div>
      </div>
      
      
    </div>
  );
}

export default Friends;