import ProjectTile from "./ProjectTile";
import projectDataBank from "../projectData";

function ProjectSection () {
    const projects = projectDataBank.map(info => <ProjectTile projectInfo={info} />);
    return (
        <div className="projectSection">
            {projects}
        </div>
    );
}

export default ProjectSection;