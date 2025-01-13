import styles from './ProjectsStyles.module.css';
import todo from '../../assets/todo.png';
import employeeApp from '../../assets/employeeApp.png';
import LibraryManagementSystem_MongoDB from '../../assets/LibraryManagementSystem_MongoDB.png';
import recipe from '../../assets/recipe.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={todo}
          link="https://github.com/nkoebotse/Codetribe2024_Todo"
          h3="Todo"
          
        />
        <ProjectCard
          src={employeeApp}
          link="https://github.com/nkoebotse/Codetribe2024_employee"
          h3="employeeApp"
          
        />
        <ProjectCard
          src={LibraryManagementSystem_MongoDB}
          link="https://github.com/nkoebotse/Codetribe2024_LibraryManagementSystem_MongoDB?tab=readme-ov-file"
          h3="LibraryManagementSystem_MongoDB"
         
        />
        <ProjectCard
          src={recipe}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="recipe"
          
        />
      </div>
    </section>
  );
}

export default Projects;
