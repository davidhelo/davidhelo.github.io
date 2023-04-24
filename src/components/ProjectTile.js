function ProjectTile ({projectInfo}) {

    return (
        <div className="projectTile">
            <p className="title">
                {projectInfo.title}
            </p>
            <a className="project-link"
                href={projectInfo.liveLink}
                target="_blank">
                <img className="preview"
                height="100%"
                src={`${process.env.PUBLIC_URL}${projectInfo.image}`}
                alt="Project image preview"
            />
            </a>
            <p className="description">
                {projectInfo.description}
            </p>
            <a className="project-link"
                href={projectInfo.liveLink}
                target="_blank">
                See live page
            </a>
        </div>
    );
}

export default ProjectTile;