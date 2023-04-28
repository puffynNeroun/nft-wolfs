import './App.css'
import Header from "./components/header/Header.jsx";
import Cards from "./components/header/cards/Cards.jsx";
import TeamsSection from "./components/teamsSection/TeamsSection.jsx";



function App() {
    return (
        <div className="root">
            <Header />
            <Cards />
            <TeamsSection/>
        </div>
    )
}

export default App
