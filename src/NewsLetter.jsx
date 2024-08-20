import "./NewsLetter.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function NewsLetter() {
    return (
        <div className="newsletter">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for the latest AI writing tips and BookAI updates</p>
            <div className="input">
                <TextField id="standard-basic" label="Enter Your Email" variant="standard" className="custom-textfield" style={{marginRight: "2rem"}}/>
                <a href="/" style={{textDecoration: "none"}}><button class="bn632-hover bn26" id="subscribe" style={{width: "117px", height: "43px", borderRadius: "50px", fontSize: "1.05rem", padding: "1rem", display: "flex", justifyContent: "center", alignItems: "center"}}>Subscribe</button></a>
            </div>
        </div>
    )
}
