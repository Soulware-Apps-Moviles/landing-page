import HeroSection from "@/components/sections/HeroSection";
import NavBar from "@/components/nav/NavBar";
import {Version} from "@/i18n/routing";
import './Pages.css';
import FeatureCard from "@/components/FeatureCard";

type PageLayoutProps = {
  version: Version;
};

export default function PageLayout({ version }: PageLayoutProps) {
    return (<>
            <div className={`pageLayoutFirstDiv ${version}`}>
                <NavBar version={version}/>
                <HeroSection version={version}/>
            </div>
            <FeatureCard
                header="Gestión simple"
                text="Administra tus productos y ventas con facilidad desde un solo lugar."
                imageSrc="/images/dashboard-preview.webp"
                orientation="right"
            />
        </>
    );
}

