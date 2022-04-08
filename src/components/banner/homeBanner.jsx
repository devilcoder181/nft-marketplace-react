import { Link } from "react-router-dom";
import bgImage from "../../assets/images/banner-bg.jpg";
import bannerNft from "../../assets/images/banne_nft.jpg";
import { ButtonGroup, UILinkButton } from "../button/button";
import "./homeBanner.scss";

const HomeBanner = ()=> {
    return (
        <section className="home_banner">
            <div className="bg_">
                <picture>
                    <source srcSet={bgImage}></source>
                    <img src={bgImage} loading="lazy" />
                </picture>
            </div>

            <div className="container">

                <div className="banner_content_wrapper">
                    <div className="content_">
                        <h4>Greek Mythical Collection</h4>
                        <h1>Discover rare <span>artworks</span> by world class artists.</h1>
                        <p>Urbanvyali is the premier marketplace for NFT's, which are digital
                        items you can truly own. </p>
                        <ButtonGroup>
                            <UILinkButton link="/" title="Explore Collection" />
                        </ButtonGroup>
                        
                    </div>

                    <div className="collection_">
                        <Link to="/" className="link_">

                            <picture>
                                <source srcSet={bannerNft}></source>
                                <img src={bannerNft} alt="" />
                            </picture>
                            
                            <div className="text_">
                                <h4>Mighty Zeus</h4>
                                <label>@urbanvyali</label>
                            </div>

                        </Link>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default HomeBanner;