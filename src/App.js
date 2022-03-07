import LogoBar from './components/LogoBar';
import HeroBannerContent from './components/HeroBannerContent';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
        <LogoBar />
        <HeroBannerContent />
        <div className="card-main-container">
            <Card
                img="../assets/images/swimming.png"
                name="Life lessons with Katie Zaferes"
                price={136}
                location="USA"
                review="5.0"
                reviewCount={6}
                status="SOLD OUT"
            />
            <Card
                img="../assets/images/wedding.png"
                name="Learn wedding photography"
                price={125}
                location="USA"
                review="5.0"
                status="ONLINE"
                reviewCount={30}
            />
            <Card
                img="../assets/images/bike.png"
                name="Group Mountain Biking"
                price={50}
                location="CND"
                review="4.8"
                status="SOLD OUT"
                reviewCount={2}
            />
        </div>
    </div>
  );
}

export default App;
