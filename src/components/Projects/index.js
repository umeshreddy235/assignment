import React,{useState} from 'react'
import './index.css'
// import Photo from '../../Assets/Images/yogi.png'
// import Photo2 from '../../Assets/Images/Recta.png'
// import photo3 from "../../Assets/Images/project3.png"
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoMail } from "react-icons/io5";


const Projects = () => {

  const [projectName, setProjectName] = useState('');
  const [projectURL, setProjectURL] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectsList, setProjectsList] = useState([]);

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleProjectURLChange = (e) => {
    setProjectURL(e.target.value);
  };

  const handleProjectDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
  };
  

  const handleAddProject = () => {
    if (projectName.trim() !== '' && projectURL.trim() !== '' && projectDescription.trim() !== '') {
      const newProject = {
        name: projectName,
        url: projectURL,
        description: projectDescription
      };
      setProjectsList([...projectsList, newProject]);
      setProjectName('');
      setProjectURL('');
      setProjectDescription('');
    }
  };

  return (
    <>
      <div >
        <div className='homecontainer'>
            <div>
                <h1 className='add'>Add Projects</h1>
            </div>
            <div className='centerone'>
              <div>
                <h1 className='name'>Project Name</h1>
                <input type='text' className='border' value={projectName} onChange={handleProjectNameChange}/>
              </div>
              <div>
                <h1 className='name'>Project Link</h1>
                <input type='text' className='border' value={projectURL} onChange={handleProjectURLChange}/>
              </div>
              <div>
                <h1 className='name'>Description</h1>
                <input type="text" id="text" name="text_name" size="50" className='textar border' value={projectDescription} onChange={handleProjectDescriptionChange} />

              </div>
            </div>
            <button className='addcolo' onClick={handleAddProject}>Add</button>
            {/* projects */}

              <div>
              <h2 className='add mt-5'>Projects View</h2>

                    <ul>
                      {projectsList.map((project, index) => (
                        <li key={index} className='cardof'>
                          <h3 className='pname'>{project.name}</h3>
                          <p className='papara'>{project.description}</p>
                          <p className='pbut' ><a href={project.url}>{project.url}</a></p>
                        </li>
                      ))}

                    </ul>
                
               </div>
  
                  
               </div>
             </div>

             <div className='icons'>
                  <AiFillInstagram className='ai'/>
                  <FaLinkedin className='ai' />
                  <IoMail />
                  <h1 className='copy'>Copyright © 2024.  All rights reserved</h1>
             </div>

             <div className='last'>

             </div>
          
    </>
  )
}

export default Projects