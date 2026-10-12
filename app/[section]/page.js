import { notFound } from 'next/navigation';
import { AboutView, DatasetsView, ModelsView, PredictionView, ReportsView } from '../components/DashboardViews';

const sectionViews = {
    prediction: PredictionView,
    datasets: DatasetsView,
    models: ModelsView,
    reports: ReportsView,
    about: AboutView,
};

export function generateStaticParams() {
    return Object.keys(sectionViews).map((section) => ({ section }));
}

export default async function SectionPage({ params }) {
    const { section } = await params;
    const View = sectionViews[section];

    if (!View) notFound();

    return <View />;
}
