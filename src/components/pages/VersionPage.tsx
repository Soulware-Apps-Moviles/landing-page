import HeroSection from "@/components/sections/HeroSection";
import NavBar from "@/components/nav/NavBar";
import {Version} from "@/i18n/routing";
import './Pages.css';
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import Footer from "@/components/sections/Footer";
import VideoSection from "@/components/sections/VideoSection";

type PageLayoutProps = {
  version: Version;
};

export default function VersionPage({ version }: PageLayoutProps) {
    return (<>
            <div className={`pageLayoutFirstDiv ${version}`}>
                <NavBar version={version}/>
                <HeroSection version={version}/>
            </div>
            <Features version={version}/>
            <Reviews version={version}/>
            <VideoSection labelKey={"aboutTheProduct"} videoId={"-SMuIGjA4Ko"}/>
            <VideoSection labelKey={"aboutTheTeam"} videoId={"jlXk9r3kpmY"}/>
            <Footer version={version}/>
        </>
    );
}

