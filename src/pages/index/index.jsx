import HomeBanner from "../../components/banner/homeBanner";
import UISection from "../../components/section/pageSection";
import UISectionTitle from "../../components/sectionTitle/sectionTitle";
const IndexHome = ()=> {
    return (
        <main>

            <HomeBanner />
            <UISection>
                <div className="container">
                    <UISectionTitle title="Top Collections" />
                </div>
            </UISection>

        </main>
    )
}

export default IndexHome;