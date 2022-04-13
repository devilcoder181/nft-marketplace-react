import bgImage from "../../assets/images/urv-404-bg.jpg";
import centerImage from "../../assets/images/404-image.svg";
import "./error.scss";
import { ButtonGroup, UILinkButton } from "../../components/button/button";

const UIError = ({type})=> {
    return (
        <main className="error_page">

            <div className="bg_">
                <picture>
                    <source srcSet={bgImage} />
                    <img src={bgImage} />
                </picture>
            </div>

            <div className="container">
                <div className="error_wrapper">
                    <h2>Look like you're lost in space</h2>
                    <img src={centerImage} />
                    <ButtonGroup align="center_">
                        <UILinkButton link="/" title="Back To Home" />
                    </ButtonGroup>
                </div>
            </div>
        </main>
    )
}

export default UIError;