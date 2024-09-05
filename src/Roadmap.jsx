import "./Roadmap.css";

export default function Roadmap() {
    return (
        <div className="roadmap">
            <h2>Roadmap</h2>
            <div className="roadmap-container">
                <div className="slot-1" style={{display: "flex", justifyContent: "space-evenly"}}>
                        <div className="road">
                            <a href="/"><button class="bn632-hover bn26" id="login" style={{width: "65px", height: "65px"}}><span class="material-symbols-outlined" style={{fontSize: "30px"}}>contacts_product</span></button></a>
                            <div className="roadmap-content">
                                <h3>Advanced Character Development</h3>
                                <p>AI-powered tool for creating deep, complex characters</p>
                            </div>
                        </div>
                        <div className="road">
                            <a href="/"><button class="bn632-hover bn26" id="login" style={{width: "65px", height: "65px"}}><span class="material-symbols-outlined" style={{fontSize: "30px"}}>storefront</span></button></a>
                            <div className="roadmap-content">
                                <h3>E-book Platform Integration</h3>
                                <p>Seamless publishing to popular e-book platforms</p>
                            </div>
                        </div>
                </div>
                <div className="slot-1" style={{display: "flex", justifyContent: "space-evenly"}}>
                    <div className="road" style={{marginRight: "1rem"}}>
                        <a href="/"><button class="bn632-hover bn26" id="login" style={{width: "65px", height: "65px"}}><span class="material-symbols-outlined" style={{fontSize: "30px"}}>groups</span></button></a>
                        <div className="roadmap-content">
                           <h3>Collaborative Writing</h3>
                            <p>Co-create stories with other authors or AI assistants</p>
                        </div>
                    </div>
                    <div className="road">
                        <a href="/" style={{marginLeft: "0.5rem"}}><button class="bn632-hover bn26" id="login" style={{width: "65px", height: "65px"}}><span class="material-symbols-outlined" style={{fontSize: "30px"}}>brush</span></button></a>
                        <div className="roadmap-content">
                            <h3>AI Cover Art Generation</h3>
                            <p>Create stunning book covers with AI-generated art</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}