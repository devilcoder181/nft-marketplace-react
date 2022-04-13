import { useLottie } from "lottie-react";
import loaderJson from "../../assets/lottie/authloader.json"
import "./commonloader.scss";

const UICommonLoader = ()=> {

    const options = {
        animationData: loaderJson,
        loop: true,
        autoplay: true,
    };
    
    const { View } = useLottie(options);

    return (
        <div className="common_loader">
            <div className="icon_">
                {View}
            </div>
        </div>
    )
}

export default UICommonLoader;