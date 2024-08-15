import "./Header.css";
import Button from '@mui/material/Button';

export default function Header() {
    return (
        <header>
            <div className="logo">
                <div className="logo-icon-hover logo-icon" style={{width: "30px", height: "30px"}}></div>
                <img src="/logo.png" id="logo" alt="bookai-logo"></img>
                <span>BookAI</span>
            </div>
            <nav>
                <a href="">Features</a>
                <a href="">How It Works</a>
                <a href="">Roadmap</a>
                <a href="">API</a>
                <a href="">Price</a>
                <a href="">Models</a>
                <a href="/"><button class="bn632-hover bn26" id="login" style={{marginLeft: "-0.8rem"}}>Login / Sign Up</button></a>
            </nav>
        </header>
    )
}