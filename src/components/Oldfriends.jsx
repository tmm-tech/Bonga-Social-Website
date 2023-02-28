
import '../friends.css';
import { Users } from '../dummyData';

const Oldfriends = () => {
  return (
    <div className="friendsCont">

      <div className="full">
        <div className="friendsLinks">
          <p>My Friends <span> 56 </span></p>
          <p>Frirend Request <span> 67 </span></p>
        </div>
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



    </div>
  );
}

export default Oldfriends;