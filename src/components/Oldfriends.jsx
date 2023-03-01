
import '../friends.css';
import { Users } from '../dummyData';

const Oldfriends = () => {
  return (
    <div className="friendsCont">



      {Users.map((person) => {
        return <div className="oneFriend">
          <div className="duopart">
            <img src={process.env.PUBLIC_URL + person.profilePicture} alt="pro" srcset="" />
            <div className="profiledetails">
              <h3>{person.username}</h3>
              <p>career</p>
            </div>
          </div>
          <div className="friendsButton">
            <button>Unfriend</button>
            <button>Message</button>
          </div>
        </div>
      })}





    </div>
  );
}

export default Oldfriends;