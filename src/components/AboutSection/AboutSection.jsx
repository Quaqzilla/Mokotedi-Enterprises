import './AboutSection.css';
import {Parallax, Background} from 'react-parallax';

const AboutSection = () => {
    return(
        <div className="about-section">

            <div className="about-1">
                <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width="800"
                height="450"
                src="https://embed.figma.com/design/AwHM7Fg6qkNs3Tw7DUzymW/iPhone-14-Pro---Phone-Template--Community-?node-id=0-1&embed-host=share"
                allowFullScreen
                title="Figma Design"
                />
            </div>

        </div>
    )
}

export default AboutSection;