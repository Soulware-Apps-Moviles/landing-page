import PageLayout from "@/components/pages/PageLayout";
import {Version} from "@/i18n/routing";

export default async function Page(props: Omit<LayoutProps<'/[locale]/[version]'>, 'children'>) {
    const { version } = await props.params;

    return (
        <PageLayout version={version as Version}/>
    );
}