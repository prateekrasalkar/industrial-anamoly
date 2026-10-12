import './FeatureGrid.css';

const featureCards = [
    {
        id: 'datasets',
        title: 'Upload & Analyze',
        text: 'Upload CSV/Excel files with machine sensor readings.',
        icon: '📊',
    },
    {
        id: 'models',
        title: 'Multiple ML Models',
        text: 'Use trained models such as Logistic Regression, Random Forest, XGBoost and CatBoost.',
        icon: '⚙',
    },
    {
        id: 'prediction-explanations',
        title: 'Explainable Predictions',
        text: 'See anomaly probability and the most important sensor features.',
        icon: '⌕',
    },
    {
        id: 'reports',
        title: 'Detailed Reports',
        text: 'Generate visualizations and reports for further analysis.',
        icon: '▣',
    },
];

const FeatureGrid = () => {
    return (
        <section className="features-grid">
            {featureCards.map((card) => (
                <article key={card.title} id={card.id} className="feature-card">
                    <div className="feature-icon">{card.icon}</div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                </article>
            ))}
        </section>
    );
};

export default FeatureGrid;
