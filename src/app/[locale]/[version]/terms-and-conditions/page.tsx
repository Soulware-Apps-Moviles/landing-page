
import {Version} from "@/i18n/routing";
import TermsPage from "@/components/pages/TermsPage";

export default async function Page(props: Omit<LayoutProps<'/[locale]/[version]'>, 'children'>) {
    const { version } = await props.params;

    return <TermsPage version={version as Version}/>;
}