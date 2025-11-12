import PrivacyPage from "@/components/pages/PrivacyPage";
import {Version} from "@/i18n/routing";

export default async function Page(props: Omit<LayoutProps<'/[locale]/[version]'>, 'children'>) {
    const { version } = await props.params;

    return <PrivacyPage version={version as Version}/>;
}