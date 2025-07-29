import './display.css';
import works from './../../hooks/work';

const Display = () => {

    return(
        <div className="workpage-component">
            
            {works.map((project) => (
                <div className="workpage-display" key={project.id} data-aos="fade-right" data-duration="2500">
                    <img src={project.image} alt="project image" />
                    <p>
                        {project.description}
                    </p>
                    <a 
                    href={project.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    >Link To Website</a>
                </div>

            ))}
            

        </div>
    )
}

export default Display;