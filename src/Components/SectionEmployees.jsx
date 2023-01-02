import Employee from "./Employee";
import React from "react";
import pies1 from './Assets/pies1.jpg';
import pies2 from './Assets/pies2.png';

const employees = [
    {
        name: "Gonzo",
        surname: "Kowalski",
        position: "dyrektor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
        image: pies1
    },
    {
        name: "Burek",
        surname: "Nowak",
        position: "manager",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
        image: pies2
    }
];

function SectionEmployees() {
    return (
        <section className="section-employees" id="us">
            <div className="container ">
                <div className="specialists">Nasi specjaliści</div>

                <div className="employees-list">
                   { employees.map((employee, index) => (
                        <Employee key={index} 
                                  name={employee.name} 
                                  title={employee.surname}
                                  position={employee.position}
                                  description={employee.description}
                                  image={employee.image}/>
                   ))}

                </div>
                       
            </div>
        </section> 
    )
}
export default SectionEmployees;