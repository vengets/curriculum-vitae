import React, {useRef} from 'react';
import {Profile} from "../../model/Profile";
import './CurriculumVitae.css';

export function CurriculumVitae(props: {profile: Profile}) {
    const inputRef = useRef(null);
    return (
        <>
            {/*<Heading title={props.profile.name}/>*/}
            <div className="page" ref={inputRef} id="resume">
                <div className="title">
                    <span className="left-title">
                    <h1 >{props.profile.name}</h1>
                    <h3 >{props.profile.designation}</h3>
                    </span>
                    <span className="right-title">
                    <h4 >{props.profile.phone}</h4>
                        <h4>{props.profile.email}</h4>
                    </span>
                </div>
                <div className="content">
                    <div className="left-content">
                        {props.profile.summary}
                        <h3>Experience</h3><hr/>
                        {props.profile.experience.map(exp =>
                        <div className="experience ">
                        <div className="experience-left">
                            {exp.workingFrom}-{exp.workingTill}
                        </div>

                        <span className="experience-right">
                          <h4 className="experience-heading">{exp.designation}</h4>
                            <h5 className="experience-heading">{exp.company} - {exp.location}</h5>
                            <ul>
                            {exp.description.map(dcr =>
                                <li>{dcr}</li>
                            )}
                            </ul>
                        </span>
                        </div>
                        )}
                    </div>
                    <div className="right-content">
                        <h4>Accomplishment</h4><hr/><ul className="accomplishment-title">
                        {props.profile.certification.map(ach =>
                                <span>
                         <li className="accomplishment">{ach.name}</li>
                        </span>
                        )}
                    </ul>

                        <h4>Education </h4><hr/>
                        {props.profile.education.map(ed =>
                         <span>
                             <h5 className="inline"> {ed.degree}</h5>
                             <small className="inline"> - {ed.college}</small>
                             <h6 className="inline"> - {ed.yearOfPassing}</h6><br/> <br/>
                         </span>

                        )}


                    </div>
                </div>
            </div>
        </>
    );
}
