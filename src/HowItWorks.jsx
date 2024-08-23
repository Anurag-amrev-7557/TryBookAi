import "./HowItWorks.css";

export default function HowItWorks() {
    return (
        <div className="how-it-works">
            <h2>How It Works</h2>
            <div className="step-container">
                <div className="feature">
                    <a href="/"><button class="bn632-hover bn26" id="login" style={{width: "65px", height: "65px"}}><i class="fa-solid fa-wand-magic-sparkles"  style={{fontSize: "20px"}}></i></button></a>
                    <h3>Choose your Genre</h3>
                    <p>Select from a wide range of genres or create a custom blend</p>
                </div>
                <div className="feature">
                    <a href="/"><button class="bn632-hover bn26" id="login" style={{width: "65px", height: "65px"}}><i class="fa-solid fa-gears"  style={{fontSize: "20px"}}></i></button></a>
                    <h3>AI Generation</h3>
                    <p>Our advanced AI creates your book based on your inputs</p>
                </div>
                <div className="feature">
                    <a href="/"><button class="bn632-hover bn26" id="login" style={{width: "65px", height: "65px"}}><span class="material-symbols-outlined" style={{fontSize: "35px"}}>edit</span></button></a>
                    <h3>Provide Key Details</h3>
                    <p>Input main characters, plot points, or themes to guide the AI</p>
                </div>
                <div className="feature">
                    <a href="/"><button class="bn632-hover bn26" id="login" style={{width: "65px", height: "65px"}}><span class="material-symbols-outlined" style={{fontSize: "35px"}}>check_circle</span></button></a>
                    <h3>Review and Download</h3>
                    <p>Review your generated book and download in your preferred format</p>
                </div>
            </div>
        </div>
    )
}