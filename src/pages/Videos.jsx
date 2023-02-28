import Followers from "../components/followers";
import Shortcuts from "../components/Shortcuts";
import Videogrid from "../components/Videogrid";

const Videos = () => {
    return (
        <div className="videos">
            <div className="maincontainer">
                <div className="cont1">
                    <Shortcuts/>
                </div>
                <div className="cont2">
                    <Videogrid />
                </div>
                <div className="cont3">
                    <Followers />
                </div>
            </div>
        </div>
    );
}

export default Videos;