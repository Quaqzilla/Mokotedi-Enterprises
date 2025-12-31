import './AboutSection.css';
import city from './../../assets/images/city.png';
import {Parallax, Background} from 'react-parallax';

const AboutSection = () => {
    return(
        <div className="about-section">
            <div className="about-image">
                
            </div>

            <div className="about-content">

                <div className="about-story">
                    <div className="heading">
                        <h1>About Us</h1>
                    </div>

                    <p data-aos = "fade-up" data-aos-duration = "3000">At <b>Mokotedi Enterprises</b>, we believe that technology should be both empowering and personal. 
                        We are more than just a website design & development company—we are your creative partner in building sleek, 
                        secure, and user-first websites that bring your vision to life.
                        Born from a desire to close the digital divide and uplift local businesses, we craft websites
                        that are both beautifully designed and fairly priced, so every client feels seen, supported, and special.
                    </p>
                </div>

                <div className="about-mission">
                    <div className="heading">
                        <h1>Our Mission</h1>
                    </div>

                    <p data-aos = "fade-up" data-aos-duration = "3000">
                    To design comprehensive, professional websites that not only meet modern digital 
                    standards but also reflect the soul of your brand—all while keeping things accessible 
                    and affordable.
                    </p>
                </div>

                <div className="about-values">
                    <div className="heading">
                        <h1>Our Values</h1>
                    </div>

                    <div className="value-summary">
                        <p data-aos = "fade-up" data-aos-duration = "3000">
                        At the heart of our work is a simple truth: every client matters. Whether you're a 
                        startup founder, a growing enterprise, or a passionate community builder, you deserve
                        a digital partner who sees your vision, respects your story, and delivers with 
                        excellence. Our values guide every interaction, every line of code, and every finished site.
                        </p>
                    </div>

                    <div className="value">
                        <div className="value-heading">
                            <h3>Client-Centric Care</h3>
                        </div>

                        <div className="value-text" data-aos = "fade-right" data-aos-duration = "2500">
                            <p>
                            We don’t just build websites—we build relationships. Your story and goals shape our 
                            solutions. We’re here to listen, guide, and tailor every detail to fit your needs.  
                            </p>
                        </div>
                    </div>

                    <div className="value">
                        <div className="value-heading">
                            <h3>Trust & Transparency</h3>
                        </div>

                        <div className="value-text" data-aos = "fade-right" data-aos-duration = "2500">
                            <p>
                            We earn trust the honest way: through clear communication, fair pricing, and reliable
                            delivery. No hidden fees, no tech jargon smokescreens—just mutual respect and professionalism.
                            </p>
                        </div>
                    </div>

                    <div className="value">
                        <div className="value-heading">
                            <h3>Thoughtful Craftsmanship</h3>
                        </div>

                        <div className="value-text" data-aos = "fade-right" data-aos-duration = "2500">
                            <p>
                            Design matters. Functionality matters. Your feeling about the final product matters most.
                            That’s why we sweat the small stuff—because it all adds up to a site that feels just right. 
                            </p>
                        </div>
                    </div>

                    <div className="value">
                        <div className="value-heading">
                            <h3>Empowerment Through Technology</h3>
                        </div>

                        <div className="value-text" data-aos = "fade-right" data-aos-duration = "2500">
                            <p>
                                We’re passionate about making digital accessibility a reality—for clients, communities,
                                and causes. Whether it’s secure hosting or a mobile-first interface, our solutions 
                                are built with care, so you stay confident and in control.
                            </p>
                        </div>
                    </div>

                    <div className="value">
                        <div className="value-heading">
                            <h3>People Over Platforms</h3>
                        </div>

                        <div className="value-text" data-aos = "fade-right" data-aos-duration = "2500">
                            <p>
                            Tech is a tool, not the hero. You are. Every project begins with human
                            connection and ends with a digital presence that puts your mission front and center.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="about-founder">
                    <div className="heading">
                        <h1>Our Founder's Story</h1>
                    </div>

                    <p data-aos = "fade-up" data-aos-duration = "3000">
                    Hi, I’m <b>Phemelo</b>, and this business is personal.
                    I started this venture with a clear and deeply felt motivation: 
                    to make <b>premium</b> digital experiences available to everyone—especially
                    those overlooked by inflated pricing or impersonal service.
                    As someone who's spent countless hours refining branding details, 
                    coding secure platforms, and advocating for digital access through 
                    community tech labs—I know how important the online experience is. 
                    Not just for businesses, but for dreams, ideas, and impact.
                    </p>

                    <ul>
                        <li data-aos = "zoom-in" data-aos-duration = "2500">To offer comprehensive websites that don’t cut corners</li>
                        <li data-aos = "zoom-in" data-aos-duration = "2500">At fair rates that respect your budget</li>
                        <li data-aos = "zoom-in" data-aos-duration = "2500">And with a process that makes you—the client—the hero of the story</li>
                    </ul>

                    <p>Every line of code, every font choice, every layout decision is made with intention.
                    <b>Because your brand isn’t just a product—it’s a promise</b>. And I’m here to help you 
                    deliver it, beautifully.
                    </p>
                </div>


            </div>


        </div>
    )
}

export default AboutSection;