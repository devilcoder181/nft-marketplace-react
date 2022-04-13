import UIButton, { ButtonGroup } from "../../../components/button/button";
import { useAuthContext } from "../../../../store/authContext";
import "./dashboardBanner.scss";

const UIDashboardBanner = (props)=> {

    const bgImage = props.bg;
    const userData = props.userData;

    const {logOutFun} = useAuthContext();

    const logOut = (event)=> {
        logOutFun();
    }

    return (
        <section className="dashboard_banner">

            {
                bgImage &&
                <div className="bg_">
                    <picture>
                        <source srcSet={bgImage}></source>
                        <img src={bgImage} loading="lazy" />
                    </picture>
                </div>
            }

            {
                userData &&
                <div className="dashboard_banner_wrapper">
                    <div className="pro_pic">
                        <picture>
                            <source srcSet={userData.photoURL} />
                            <img src={userData.photoURL} loading="lazy" />
                        </picture>
                    </div>

                    <div className="profile_title">
                        <h2>Welcome back, <span>{userData.displayName}</span></h2>
                        <p>{userData.email}</p>
                        <ButtonGroup align="center_">
                            <UIButton title="Logout" triggerClick={logOut} />
                        </ButtonGroup>
                    </div>
                </div>
            }
            
        </section>
    )
}

export default UIDashboardBanner;