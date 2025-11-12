import VersionPage from "@/components/pages/VersionPage";
import {Version} from "@/i18n/routing";

export default async function Page(props: Omit<LayoutProps<'/[locale]/[version]'>, 'children'>) {
    const { version } = await props.params;

    return (
        <VersionPage version={version as Version}/>
    );
}