import Skill1 from "./assets/skill1.png";
import Skill2 from "./assets/skill2.png";
import Skill3 from "./assets/skill3.png";
import Skill4 from "./assets/skill4.png";
import "./Skills.css";

export default function Skills () {
    const Skills = [
        {image: Skill1, title: "Customer Centric"},
        {image: Skill2, title: "Operational Excellence"},
        {image: Skill3, title: "Innovation"},
        {image: Skill4, title: "Integrity"}
    ];
    return (
        <div className="box">
            <h1>We Offer Seamless Experience</h1>
            <div className="skills-container">
            {Skills.map((Skill, index) => (
                <div key={index} className="skill-item">
                    <img src={Skill.image} alt={`Skill ${index + 1}`} />
                    <h3>{Skill.title}</h3>
                </div>
            ))}
        </div>
        </div>
    );
}
