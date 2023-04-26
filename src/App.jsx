import './App.css'
import Header from "./components/header/Header.jsx";
import BurgerMenu from "./components/header/navbar/burgerMenu/BurgerMenu.jsx";
import Cards from "./components/header/cards/Cards.jsx";



function App() {
    return (
        <div className="root">
            <Header />
            <Cards />
        </div>
    )
}

export default App
