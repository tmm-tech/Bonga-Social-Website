// import profilePic from '/public/assets/person/5.jpeg'
import '../friends.css';

const Oldfriends = () => {
  return (
    <div className="friendsCont">

      <div className="full">
        <div className="friendsLinks">
          <p>My Friends <span> 56 </span></p>
          <p>Frirend Request <span> 67 </span></p>
        </div>
        <div className="oneFriend">
          <div className="duopart">
            <img src='../public/assets/person/5.jpeg' alt="pro" srcset="" />
            <div className="profiledetails">
              <h3>Persons Name</h3>
              <p>career</p>
            </div>
          </div>
          <div className="friendsButton">
            <button>unfriend</button>
            <button>add friend</button>
          </div>
        </div>

      </div>



    </div>
  );
}

export default Oldfriends;