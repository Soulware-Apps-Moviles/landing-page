import HeroSection from "@/components/sections/HeroSection";
import NavBar from "@/components/nav/NavBar";
import {Version} from "@/i18n/routing";
import './Pages.css';
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import Footer from "@/components/sections/Footer";

type PageLayoutProps = {
  version: Version;
};

export default function PageLayout({ version }: PageLayoutProps) {
    return (<>
            <div className={`pageLayoutFirstDiv ${version}`}>
                <NavBar version={version}/>
                <HeroSection version={version}/>
            </div>
            <Features version={version}/>
            <Reviews version={version}/>
            <Footer version={version}/>
        </>
    );
}

