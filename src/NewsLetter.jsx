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
                <a href="/" style={{textDecoration: "none"}}><button class="bn632-hover bn26" id="subscribe" style={{width: "115px", height: "40px", borderRadius: "2rem", fontSize: "1.01rem", padding: "1rem", display: "flex", justifyContent: "center", alignItems: "center"}}>Subscribe</button></a>
            </div>
        </div>
    )
}