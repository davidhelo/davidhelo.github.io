import {useState} from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';                     
        
import ProjectTile from "./ProjectTile";
import projectDataBank from "../projectData";
import { Card } from 'primereact/card';
import {Button} from 'primereact/button';

function ProjectSection () {

    function generateFooter(linkLive, linkGitHub) { //it generates button depending if link is available
        return (<div>
            {linkLive === "" ? <div></div> : <a href={linkLive} target='_blank'>
                <Button type='button' label='See Live' severity='info' raised rounded />
            </a> }
            <a href={linkGitHub} target='_blank'>
                <Button type='button' label='See GitHub' severity='info'  raised rounded outlined />
            </a>
            
        </div>);
    }

    

    const projects = projectDataBank.map(projectInfo => 
        <Card 
            title={projectInfo.title}
            subTitle={projectInfo.subtitle}
            footer={generateFooter(projectInfo.liveLink, projectInfo.githubLink)}
            raised>
            <p className="m-0">
                {projectInfo.description}
            </p>
        </Card>
    );

    return (
        <div className="projectSection">
            {projects}
        </div>
    );
}

export default ProjectSection;