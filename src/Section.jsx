import "./Section.css";

export default function Section() {
    return (
        <section className="hero">
            <div class="main">
                <h1>Explore the Possibilities of 
                    <div class="roller" style={{display: "inline-block"}}>
                        <i>
                        <span id="rolltext">Curiosity<br/><br />
                        Wisdom<br/><br />
                        AI<br/><br />
                        Creativity
                        </span>
                        </i>
                    </div>
                     with BookAI
                </h1>
            </div>
            <div className="subtitle">
                <p>Unleash the power of AI to create captivating books in minutes.</p>
                <p>Download, Distribute wherever you want. Generate unlimited free books</p>
            </div>
            <div id="getstarted">
            <a href="/"><button class="bn632-hover bn26" id="login">Get Started</button></a>
            <a href="/"><button class="bn632-hover bn26" id="login">Get API Access</button></a>
            </div>
            <p style={{color: "#b3ac48", marginTop: "3rem"}} id="attention">Attention:TryBookAI has been acquired by Indicus AI. Indicus LLM will be used for text and image generation</p>
        </section>
    )
}
