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
                <Button variant="contained" id="subscribe">Subscribe</Button>
            </div>
        </div>
    )
}