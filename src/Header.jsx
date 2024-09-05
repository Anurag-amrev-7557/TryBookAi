import "./Header.css";
import Button from '@mui/material/Button';

export default function Header() {
    return (
        <header>
            <div className="logo">
                <div className="logo-icon-hover logo-icon" style={{width: "30px", height: "30px"}}></div>
                <img src="/logo.png" id="logo" alt="bookai-logo"></img>
                <a href="/">BookAI</a>
            </div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">How It Works</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Roadmap</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">API</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Price</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Models</a>
                            </li>
                            <li class="nav-item">
                                <a href="/"><button class="bn632-hover bn26" id="login" style={{marginLeft: "-0.8rem"}}>Login / Sign Up</button></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <nav>
                <a href="">Features</a>
                <a href="">How It Works</a>
                <a href="">Roadmap</a>
                <a href="">API</a>
                <a href="">Price</a>
                <a href="">Models</a>
                <a href="/"><button class="bn632-hover bn26" id="login" style={{marginLeft: "-0.8rem"}}>Login / Sign Up</button></a>
            </nav> */}
        </header>
    )
}