import LogoBar from './components/LogoBar';
import HeroBannerContent from './components/HeroBannerContent';
import Card from './components/Card';
import './App.css';
import cardsData from './components/CardData';

function App() {
    return (
        <div className="App">
            <LogoBar />
            <div className="main-content">
                <HeroBannerContent />

                <div className="card-main-container">
                    {cardsData.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                {...item}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
