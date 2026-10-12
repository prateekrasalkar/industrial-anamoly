import './WorkflowSection.css';

const workflowSteps = [
    {
        number: '1',
        title: 'Upload Data',
        text: 'Provide your machine sensor data in CSV or Excel format.',
        accent: 'teal',
    },
    {
        number: '2',
        title: 'Preprocess',
        text: 'Validate, clean and transform the data for analysis.',
        accent: 'purple',
    },
    {
        number: '3',
        title: 'Predict',
        text: 'Use trained ML models to detect abnormal operating conditions.',
        accent: 'cyan',
    },
    {
        number: '4',
        title: 'Interpret Results',
        text: 'View anomaly probability, key sensor contributors, and recommended actions.',
        accent: 'gold',
    },
];

const WorkflowSection = () => {
    return (
        <section className="workflow-section" id="about">
            <h3>How It Works</h3>
            <p>From raw sensor data to actionable insights in a few simple steps.</p>

            <div className="workflow-grid">
                {workflowSteps.map((step) => (
                    <div key={step.number} className="workflow-item">
                        <div className={`step-badge ${step.accent}`}>
                            {step.number}
                        </div>
                        <div className="workflow-card">
                            <div className={`workflow-icon ${step.accent}`}>
                                {step.title === 'Upload Data' ? '◫' : step.title === 'Preprocess' ? '✦' : step.title === 'Predict' ? '◌' : '▣'}
                            </div>
                            <h4>{step.title}</h4>
                            <p>{step.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkflowSection;
