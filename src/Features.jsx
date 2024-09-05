import "./Features.css";

export default function Features () {
    return(
        <div className="feature-container">
            <div className="feature">
                <a href="/"><button class="bn632-hover bn26" id="login" style={{width: "65px", height: "65px"}}><span class="material-symbols-outlined" style={{fontSize: "35px"}}>smart_toy</span></button></a>
                <h3>AI-Powered Writing</h3>
                <p>Generate high-quality content with advanced AI technology</p>
            </div>
            <div className="feature">
                <a href="/"><button class="bn632-hover bn26" id="login" style={{width: "65px", height: "65px"}}><span class="material-symbols-outlined" style={{fontSize: "35px"}}>book</span></button></a>
                <h3>Custom Genres</h3>
                <p>Create stories in any genre or blend multiple styles</p>
            </div>
            <div className="feature">
                <a href="/"><button class="bn632-hover bn26" id="login" style={{width: "65px", height: "65px"}}><span class="material-symbols-outlined" style={{fontSize: "35px"}}>download</span></button></a>
                <h3>Instant Download</h3>
                <p>Get your completed book in various formats instantly</p>
            </div>
            <div className="feature">
                <a href="/"><button class="bn632-hover bn26" id="login" style={{width: "65px", height: "65px"}}><span class="material-symbols-outlined">translate</span></button></a>
                <h3>Multilingual</h3>
                <p>Generate content in multiple languages effortlessly</p>
            </div>
        </div>
    )
}