import "./Testimonials.css";

export default function Testimonials() {
    return (
        <div className="testimonials">
            <h2>What Our Users Say</h2>
            <div className="testimonial-container">
                <div className="testimonial">
                    <p>"BookAI revolutionized my writing process. I completed my debut novel in just two weeks!"</p>
                    <p><strong>- Sarah J., Author</strong></p>
                </div>
                <div className="testimonial">
                    <p>"The AI-generated ideas helped me overcome writer's block. It's like having a co-author at your fingertips."</p>
                    <p><strong>- Mark T., Aspiring Writer</strong></p>
                </div>
            </div>
        </div>
    )
}