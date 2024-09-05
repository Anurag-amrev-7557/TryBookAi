import "./AiDemo.css";

export default function AiDemo() {
    return (
        <>
            <div className="ai-demo">
                <img src="/book2.png"></img>
                <div className="floating-ui-top-left">
                    <div className="logo-icon-hover logo-icon floating-icon" style={{width: "25px", height: "25px", marginRight: "1rem"}}></div>
                    <img src="/paradox.png"></img>
                </div>
                <div className="floating-ui-bottom-right">
                    <div className="logo-icon-hover logo-icon floating-icon" style={{width: "24px", height: "25px", marginRight: "1rem"}}></div>
                    <span>Chapter complete</span>
                </div>
            </div>
            
        </>
        
    )
}