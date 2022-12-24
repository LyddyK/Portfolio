import skills from '../Assets/skills.png';
import rct from '../Assets/rct.png';
import visual from '../Assets/visual.png'

export const Skills = () => {
    return (
        <div id="skills">
            <h1 className="headers">Skills</h1>
            <div id="icons">
                <img id="skill-logo" src={skills} alt="HTML-CSS-JAVASCRIPT" />
                <img id="rct" src={rct} alt="REACT" />
                <img id="visual" src={visual} alt="VISUAL_STUDIO"/>
            </div>
                <p id="skills-p">   </p>
        </div>
    )
}