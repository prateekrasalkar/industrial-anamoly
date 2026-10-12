import './homepage.css';
import Header from './Header';
import HeroSection from './HeroSection';
import FeatureGrid from './FeatureGrid';
import WorkflowSection from './WorkflowSection';

const Homepage = () => {
    return (
        <div className="homepage-shell" id="home">
            <Header />
            <main className="page-main">
                <HeroSection />
                <FeatureGrid />
                <WorkflowSection />
            </main>
        </div>
    );
};

export default Homepage;