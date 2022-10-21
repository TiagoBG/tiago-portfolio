import './styles.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import projects from '../../api/projects.json';

const ProjectsSection = () => {
    return (
        <div>
            {projects.map(project => <ProjectCard key={project.id}/>)}
        </div>
    );
}

export default ProjectsSection;
