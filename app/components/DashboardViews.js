'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';

const modelNames = ['Logistic Regression', 'Random Forest', 'XGBoost', 'CatBoost', 'SVM'];
const sampleRows = [
    ['2020-02-01 00:00:00', '0.42', '1.15', '0.98', '-0.21', '0.35'],
    ['2020-02-01 00:01:00', '0.41', '1.13', '1.02', '-0.19', '0.34'],
    ['2020-02-01 00:02:00', '0.40', '1.12', '1.01', '-0.18', '0.36'],
    ['2020-02-01 00:03:00', '0.43', '1.14', '0.99', '-0.20', '0.35'],
    ['2020-02-01 00:04:00', '0.42', '1.13', '1.00', '-0.17', '0.34'],
];

function PageHeading({ title, subtitle, eyebrow }) {
    return (
        <div className="page-heading">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
        </div>
    );
}

function UploadDropzone({ onFile }) {
    const [dragging, setDragging] = useState(false);
    const inputRef = useRef(null);

    const takeFile = (file) => {
        if (file) onFile(file);
    };

    return (
        <div
            className={`dropzone${dragging ? ' is-dragging' : ''}`}
            onDragOver={(event) => { event.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={(event) => {
                event.preventDefault();
                setDragging(false);
                takeFile(event.dataTransfer.files?.[0]);
            }}
        >
            <input
                ref={inputRef}
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange={(event) => takeFile(event.target.files?.[0])}
                hidden
            />
            <span className="drop-icon" aria-hidden="true">↑</span>
            <p>Drag and drop your CSV or Excel file here</p>
            <span className="drop-or">or</span>
            <button className="button button-primary button-small" type="button" onClick={() => inputRef.current?.click()}>
                Browse files
            </button>
            <small>Supported formats: .csv, .xlsx, .xls <span>|</span> Max file size: 100 MB</small>
        </div>
    );
}

function DataTable({ rows = sampleRows, compact = false }) {
    return (
        <div className={`table-scroll${compact ? ' table-compact' : ''}`}>
            <table>
                <thead>
                    <tr><th>Timestamp</th><th>DV_eletric</th><th>H1</th><th>COMP</th><th>TP2</th><th>Oil_level</th></tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={`${row[0]}-${rowIndex}`}>
                            {row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`}>{cell}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export function HomeView() {
    return (
        <main className="screen home-screen">
            <section className="home-hero">
                <div className="home-photo" aria-hidden="true" />
                <div className="home-copy">
                    <span className="eyebrow">Industrial AI for a more reliable tomorrow</span>
                    <h2>Detect Machine<br />Anomalies <em>Before</em><br />They Cause <em>Downtime</em></h2>
                    <p>Upload industrial machine sensor data, analyze key parameters, and identify abnormal operating conditions early.</p>
                    <div className="button-row">
                        <Link className="button button-primary" href="/prediction"><span aria-hidden="true">↑</span> Upload Data <span aria-hidden="true">→</span></Link>
                        <Link className="button button-outline" href="/about">Learn More</Link>
                    </div>
                </div>
                <div className="monitor-stack" aria-label="Machine monitoring preview">
                    <div className="monitor-card">
                        <div className="monitor-top"><strong>Real-time Sensor Monitoring</strong><span className="status status-normal">● Normal</span></div>
                        <div className="line-chart normal-chart"><i /><i /><i /><i /><i /><i /><i /><i /></div>
                    </div>
                    <div className="monitor-card">
                        <div className="monitor-top"><strong>Anomaly Detection</strong><span className="status status-alert">! Anomaly</span></div>
                        <div className="line-chart alert-chart"><i /><i /><i /><i /><i /><i /><i /><i /></div>
                    </div>
                </div>
                <div className="hero-benefits">
                    <div><span className="symbol-icon">◇</span><strong>Prevent Unexpected Downtime</strong></div>
                    <div><span className="symbol-icon">▥</span><strong>Data-Driven Insights</strong></div>
                    <div><span className="symbol-icon">⚙</span><strong>Multiple ML Models</strong></div>
                    <div><span className="symbol-icon">☼</span><strong>Explainable Results</strong></div>
                </div>
            </section>
            <section className="home-feature-row" aria-label="Platform capabilities">
                <Link href="/datasets" className="home-feature"><span className="symbol-icon">▥</span><span><strong>Upload &amp; Validate Data</strong><small>Upload CSV/Excel files with sensor readings.</small></span></Link>
                <Link href="/models" className="home-feature"><span className="symbol-icon">⚙</span><span><strong>Analyze with ML Models</strong><small>Use trained models to detect abnormal conditions.</small></span></Link>
                <Link href="/reports" className="home-feature"><span className="symbol-icon">⌕</span><span><strong>Understand the Results</strong><small>View failure probability and key contributors.</small></span></Link>
                <Link href="/reports" className="home-feature"><span className="symbol-icon">▤</span><span><strong>Generate Reports</strong><small>Access visualizations and historical results.</small></span></Link>
            </section>
        </main>
    );
}

export function PredictionView() {
    const [file, setFile] = useState(null);
    const [model, setModel] = useState('Logistic Regression (Recommended)');
    const [result, setResult] = useState('');

    return (
        <main className="screen">
            <PageHeading title="Upload and Predict" subtitle="Upload your machine sensor data and get anomaly prediction using trained models." />
            <div className="prediction-layout">
                <section className="panel prediction-main">
                    {file ? (
                        <div className="file-selected">
                            <span className="file-icon">▤</span>
                            <span><strong>{file.name}</strong><small>{(file.size / 1024).toFixed(1)} KB · Ready to analyze</small></span>
                            <button type="button" className="text-button" onClick={() => { setFile(null); setResult(''); }}>Remove</button>
                        </div>
                    ) : <UploadDropzone onFile={(nextFile) => { setFile(nextFile); setResult(''); }} />}
                    <h3 className="section-title">Example input format</h3>
                    <DataTable rows={sampleRows.slice(0, 2)} compact />
                    {result && <div className="result-banner"><span className="status status-normal">Prediction complete</span><strong>{result}</strong><span>Failure probability: 2.4% · Key drivers: DV_eletric, H1</span></div>}
                </section>
                <aside className="prediction-side">
                    <section className="panel model-select-panel">
                        <label htmlFor="model-select">Selected model</label>
                        <select id="model-select" value={model} onChange={(event) => setModel(event.target.value)}>
                            {modelNames.map((name) => <option key={name}>{name}{name === 'Logistic Regression' ? ' (Recommended)' : ''}</option>)}
                        </select>
                        <p>Best performance on unseen failure events using 11 sensor features.</p>
                        <div className="model-detail"><span>Model details:</span><ul><li>Algorithm: {model.replace(' (Recommended)', '')}</li><li>Input features: 11 sensors</li><li>Trained on MetroPT3 dataset</li><li>Evaluation: Time-ordered split</li></ul></div>
                        <button type="button" className="button button-primary run-button" disabled={!file} onClick={() => setResult('Normal operating condition')}>Run prediction <span aria-hidden="true">→</span></button>
                    </section>
                    <section className="panel tips-panel"><h3>Tips for best results</h3><ul><li>Use the same sensor parameters as training data.</li><li>Ensure correct column names and formats.</li><li>Upload continuous time-series data.</li><li>The model returns failure probability and key drivers.</li></ul></section>
                </aside>
            </div>
        </main>
    );
}

export function DatasetsView() {
    const [datasetName, setDatasetName] = useState('MetroPT3 Dataset');
    const inputRef = useRef(null);
    return (
        <main className="screen">
            <div className="heading-with-action">
                <PageHeading title="Dataset Information" subtitle="Explore the datasets used for training and evaluating the machine anomaly detection models." />
                <input ref={inputRef} type="file" accept=".csv,.xlsx,.xls" hidden onChange={(event) => event.target.files?.[0] && setDatasetName(event.target.files[0].name)} />
                <button className="button button-primary" type="button" onClick={() => inputRef.current?.click()}><span aria-hidden="true">↑</span> Upload Data</button>
            </div>
            <div className="dataset-grid">
                <section className="panel dataset-summary">
                    <h3>{datasetName} <span>(Primary)</span></h3>
                    <p>Real-world industrial dataset containing sensor readings and failure events from a water treatment plant.</p>
                    <dl><div><dt>Total records</dt><dd>1,516,948</dd></div><div><dt>Time period</dt><dd>Feb 2020 – Sep 2020</dd></div><div><dt>Number of features</dt><dd>15</dd></div><div><dt>Failure events</dt><dd>4</dd></div><div><dt>Failure class ratio</dt><dd>1.97%</dd></div></dl>
                    <button type="button" className="text-button" onClick={() => document.getElementById('dataset-preview')?.scrollIntoView({ behavior: 'smooth' })}>View details <span aria-hidden="true">→</span></button>
                </section>
                <section className="panel dataset-preview" id="dataset-preview"><h3>Dataset preview</h3><DataTable /></section>
                <section className="panel insight-panel"><h3>Dataset insights</h3><Insight icon="◉" title="Highly imbalanced" text="Failure class: 1.97%" /><Insight icon="⌘" title="Multiple sensor parameters" text="Electrical, pressure, temperature, flow, etc." /><Insight icon="◷" title="Time series data" text="Continuous sensor readings over 7 months" /><Insight icon="☼" title="Real failure events" text="4 documented failure periods" /></section>
            </div>
        </main>
    );
}

function Insight({ icon, title, text }) {
    return <div className="insight"><span className="symbol-icon">{icon}</span><span><strong>{title}</strong><small>{text}</small></span></div>;
}

export function ModelsView() {
    const [selected, setSelected] = useState('');
    const descriptions = ['Simple, interpretable model with strong performance.', 'Ensemble model with good generalization.', 'High performance gradient boosting model.', 'Gradient boosting model with categorical handling.', 'Support vector machine with RBF kernel.'];
    const scores = [['0.977', '0.7302', '0.9039', '0.8078', '0.9470'], ['0.9881', '0.6885', '0.7623', '0.7236', '0.8762'], ['0.9883', '0.7012', '0.7815', '0.7389', '0.8891'], ['0.9800', '0.6941', '0.7750', '0.7325', '0.8983'], ['0.9865', '0.6423', '0.7184', '0.6781', '0.8546']];
    return (
        <main className="screen">
            <PageHeading title="Machine Learning Models" subtitle="Explore the trained models, their performance, and historical results." />
            <section className="model-cards">
                {modelNames.map((name, index) => <article className={`panel model-card model-tone-${index + 1}`} key={name}><span className="model-symbol">{['⬡', '✿', '✥', '◈', '◇'][index]}</span><h3>{name}{index === 0 && <small> (Recommended)</small>}</h3><p>{descriptions[index]}</p><button type="button" className="button button-outline button-block" onClick={() => setSelected(name)}>View results</button></article>)}
            </section>
            {selected && <p className="inline-notice">Showing historical results for <strong>{selected}</strong>. <Link href="/reports">Open analysis reports →</Link></p>}
            <section className="panel performance-panel"><h3>Historical model performance</h3><div className="table-scroll"><table><thead><tr><th>Model</th><th>Features</th><th>Accuracy</th><th>Precision</th><th>Recall</th><th>F1 Score</th><th>Balanced Accuracy</th><th>ROC-AUC</th><th>PR-AUC</th><th>Trained on</th><th>Actions</th></tr></thead><tbody>{modelNames.map((name, index) => <tr key={name}><td>{name}</td><td>{index === 0 ? '11 (selected)' : '15'}</td>{scores[index].map((score, scoreIndex) => <td key={scoreIndex}>{score}</td>)}<td>0.9678</td><td>0.7054</td><td>MetroPT3</td><td><Link href="/reports" className="table-action">View details</Link></td></tr>)}</tbody></table></div></section>
        </main>
    );
}

export function ReportsView() {
    const [tab, setTab] = useState('Model Performance');
    return (
        <main className="screen">
            <div className="heading-with-action report-heading"><PageHeading title="Analysis Reports" subtitle="View and download historical results, visualizations, and analysis reports." /><label className="date-select"><span aria-hidden="true">▦</span><select aria-label="Report date range"><option>Feb 2020 – Sep 2020</option><option>Last 30 days</option><option>Last 7 days</option></select></label></div>
            <div className="report-tabs" role="tablist" aria-label="Report categories">{['Model Performance', 'Feature Importance', 'Confusion Matrices', 'Time Series Analysis', 'Failure Events'].map((label) => <button key={label} type="button" role="tab" aria-selected={tab === label} className={tab === label ? 'tab active-tab' : 'tab'} onClick={() => setTab(label)}>{label}</button>)}</div>
            <section className="report-grid">
                <article className="panel chart-panel performance-chart"><h3>{tab === 'Model Performance' ? 'Model comparison' : tab}</h3><div className="bar-chart" aria-label="Model score comparison chart">{modelNames.map((name, index) => <div className="bar-group" key={name}><div className="bars"><i style={{ height: `${78 + (index % 3) * 5}%` }} /><i style={{ height: `${64 + (index % 4) * 7}%` }} /><i style={{ height: `${54 + (index % 3) * 8}%` }} /><i style={{ height: `${72 - (index % 2) * 8}%` }} /></div><small>{name.replace(' ', '\n')}</small></div>)}</div><ChartLegend /></article>
                <article className="panel chart-panel importance-chart"><h3>Feature importance</h3><p className="chart-caption">Logistic Regression · 11 features</p>{[['DV_eletric', '91%'], ['H1', '67%'], ['COMP', '59%'], ['TP2', '43%'], ['Caudal_impulse', '34%'], ['DV_pressure', '27%']].map(([label, width]) => <div className="hbar-row" key={label}><span>{label}</span><div><i style={{ width }} /></div><b>{(parseInt(width, 10) / 18.5).toFixed(2)}</b></div>)}</article>
                <article className="panel chart-panel confusion-chart"><h3>Confusion matrix</h3><p className="chart-caption">Logistic Regression</p><div className="matrix-label">Predicted <span>Normal&nbsp;&nbsp;&nbsp; Failure</span></div><div className="matrix"><span>Actual<br />Normal</span><b>285,422</b><b className="matrix-light">3,210</b><span>Failure</span><b className="matrix-light">1,284</b><b>11,748</b></div></article>
            </section>
            <div className="report-footnote">Showing evaluation results for the MetroPT3 dataset.</div>
        </main>
    );
}

function ChartLegend() {
    return <div className="chart-legend"><span>Accuracy</span><span>Precision</span><span>Recall</span><span>F1 Score</span></div>;
}

export function AboutView() {
    return (
        <main className="screen about-screen">
            <section className="about-hero">
                <div className="about-copy"><PageHeading title="About the Project" /><p>Industrial Machine Anomaly Detection is a data-driven project focused on identifying abnormal operating conditions in industrial machines using machine learning. The system analyzes sensor data, predicts potential failures, and provides explainable results to support predictive maintenance and reduce unexpected downtime.</p></div>
                <div className="about-photo"><strong>Towards<br />safer, smarter<br />and more reliable<br />industrial operations.</strong></div>
            </section>
            <section className="about-feature-row"><Insight icon="▤" title="Real industrial data" text="Based on real-world machine sensor readings." /><Insight icon="⚙" title="Multiple ML models" text="Logistic Regression, Random Forest, XGBoost, CatBoost, SVM." /><Insight icon="☼" title="Explainable AI" text="Understand key sensor drivers behind predictions." /><Insight icon="✥" title="Practical impact" text="Helps in predictive maintenance and improved reliability." /></section>
        </main>
    );
}
