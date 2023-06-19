import { makeStyles } from '@mui/styles';
import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { ThemeContext } from '../../../contexts/theme-context';
import './experience.css';

function ExperienceCard({id, company, jobtitle, blurb, startYear, endYear, companyImage}) {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        experienceCard : {
            backgroundColor:theme.quaternary,
        },
    }));

    const classes = useStyles();


    return (
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                <div className="expcard-img" style={{backgroundColor: theme.quaternary}}>
                    {companyImage && <img src={companyImage} alt="" />}
                </div>
                <div className="experience-details">
                    <h6 style={{color: theme.secondary}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.secondary}}>{company}</h4>
                    <h7 style={{color: theme.secondary}}>{jobtitle}</h7>                    
                    <p style={{color: theme.secondary}}>{blurb}</p>
                </div>
            </div>
        </Fade>   
    )
}

export default ExperienceCard;
