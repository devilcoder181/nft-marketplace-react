import UIDashboardBanner from "./banner/dashboardBanner";
import bannerImg from "../../assets/images/dashboard-bg.png";
import {useAuthContext} from "../../../store/authContext";
import "./dashboard.scss";

const UIDashboard = ()=> {

    const {userInfo} = useAuthContext();

    return (
        <main className="dashboard_">
            <UIDashboardBanner bg={bannerImg} userData={userInfo}/>
        </main>
    )
}

export default UIDashboard;