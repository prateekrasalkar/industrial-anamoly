import './HeroSection.css';

const checklist = ['Easy to use', 'Multiple ML models', 'Explainable results', 'Built for industrial data'];

const HeroSection = () => {
    return (
        <section className="hero-section" id="prediction">
            <div className="hero-copy">
                <div className="eyebrow">DATA-DRIVEN INDUSTRIAL RELIABILITY</div>
                <h2>
                    Detect Machine
                    <span className="highlight">Anomalies</span>
                    Before
                    <span className="highlight-block">They Cause Downtime</span>
                </h2>

                <p>
                    Upload your machine sensor data, analyze key parameters, and use trained
                    machine learning models to identify abnormal operating conditions early.
                </p>

                <div className="cta-row">
                    <button type="button" className="primary-btn">
                        ⤴ Upload Your Data →
                    </button>
                    <button type="button" className="secondary-btn">
                        ⎇ Explore Models →
                    </button>
                </div>

                <div className="checklist-row">
                    {checklist.map((item) => (
                        <span key={item} className="check-item">
                            <i>✓</i>
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            <div className="hero-visual" aria-label="Machine monitoring illustration">
                <div className="visual-panel normal-panel">
                    <div className="panel-header">
                        <span>Real-time Monitoring</span>
                        <span className="status-pill">● Normal</span>
                    </div>
                    <div className="mini-chart">
                        <span className="chart-line chart-line-1" />
                        <span className="chart-line chart-line-2" />
                    </div>
                </div>

                <div className="visual-panel danger-panel">
                    <div className="panel-header">
                        <span>Anomaly Detection</span>
                        <span className="status-pill danger-pill">! Anomaly</span>
                    </div>
                    <div className="mini-chart danger-chart">
                        <span className="chart-line danger-line" />
                    </div>
                </div>

                <div className="machine-scene">
                    <div className="pipe pipe-a" />
                    <div className="pipe pipe-b" />
                    <div className="pipe pipe-c" />
                    <div className="motor">
                        <div className="motor-ring" />
                        <div className="motor-casing" />
                    </div>
                    <div className="machine-base" />
                </div>

                <div className="metrics-panel">
                    <div className="metrics-row">
                        <span>Torque</span>
                        <strong>12.4</strong>
                        <em>Nm</em>
                    </div>
                    <div className="metrics-row">
                        <span>Tool Wear</span>
                        <strong>0.32</strong>
                        <em>mm</em>
                    </div>
                    <div className="metrics-row">
                        <span>Temperature</span>
                        <strong>68.5</strong>
                        <em>°C</em>
                    </div>
                    <div className="metrics-row">
                        <span>Speed</span>
                        <strong>1450</strong>
                        <em>rpm</em>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
