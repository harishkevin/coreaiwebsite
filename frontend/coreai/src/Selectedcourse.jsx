import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {Typography, Button, TextField} from '@mui/material'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// const host = window.location.host
const host = 'localhost:3000'


function Selectedcourse() {
    const {courseId} = useParams()
    const [course, setCourse] = useState([])
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate()

    const sendEmail = (e) => {
    
        e.preventDefault();

        // Your Email.js service ID, template ID, and user ID
        const serviceID = 'service_cd77sil';
        const templateID = 'template_kf1unc3';
        const userID = '8yfksu4z0DA2_KPvJ';

        emailjs.send(serviceID, templateID, {
            user_name: name,
            message: message,
            user_email: email,
            user_phone: phone
        }, userID)
            .then((response) => {
            console.log('Email sent successfully:', response);
            }, (error) => {
            console.error('Email could not be sent:', error);
            });

        // Clear the form fields after sending the email
        setName('');
        setEmail('');
        setMessage('');

    }

    const request = async() => {
        try {
            const res = await fetch(`http://${host}/user/course/` + courseId,{
                method: 'GET',
                headers : {
                    'content-type': 'application/json'
                }
            })

            const data = await res.json()
            console.log(data)
            setCourse(data.course)
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
        request()
        console.log(course)
        console.log('hihi')
    },[])

    return <>
    <div className="paddingLR flexSwitch" style={{
        background: '#0f0c20',
        color: 'white',
        display: 'flex',
        paddingTop: '5%',
        paddingBottom: '5%'
    }}>
        <br />
        <br />
        <div className="changeWidth width60 mobileTopBottomSpace">
            <Typography variant="h2" style={{
                fontFamily: 'Regular',
                textTransform: 'capitalize'
            }}>{course.title}</Typography>
            <br />
            <Typography style={{
                    color: '#676e83 ',
                    fontFamily: 'Regular'
                }}>{course.description}</Typography>
            <br />
            <Button variant='contained' style={{
                    borderRadius: '50px',
                    background: '#0f0c20',
                    border: '1.5px solid #fe7f21',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/plan')
                }}>Register<div style={{color: '#fe7f21', marginLeft: 5}}>&gt;</div></Button>
            
        </div>
        <div className="changeWidth width40 mobileTopBottomSpace" style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div style={{
            background: '#6837f5',
            width: '90%',
            borderRadius: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '5%',
            height: 500
        }}>
            {/* <img style={{width: '30%'}} src="../assets/student3.png" alt="" /> */}
            <br />
            <Typography variant='h5' style={{
                color: 'white',
                fontFamily: 'LufgaR'
            }}>Contact us now</Typography>
            <br />
            <TextField label="name" variant='outlined' size='small' type="text" name="user_name" style={{
                        width: '85%'
                        }} InputLabelProps={{style: {fontFamily: 'LufgaR', color: 'white'}}}  onChange={(e) => {
                            setName(e.target.value)
                        }}/>
                    <br />
                    <TextField label="phone" variant='outlined' size='small' type="text" name="user_phone" style={{
                        width: '85%'
                        }} InputLabelProps={{style: {fontFamily: 'LufgaR', color: 'white'}}}  onChange={(e) => {
                            setPhone(e.target.value)
                        }}/>
                    <br />
                    <TextField label="email" variant='outlined' size='small' type="text" name="user_email" style={{
                        width: '85%'
                        }} InputLabelProps={{style: {fontFamily: 'LufgaR', color: 'white'}}}  onChange={(e) => {
                            setEmail(e.target.value)
                        }}/>
                    <br />
                    <TextField label="Your message" multiline rows={4} defaultValue=""  size='small' type="text" name="user_name" style={{
                        width: '85%'
                        }} InputLabelProps={{style: {fontFamily: 'LufgaR', color: 'white'}}}  onChange={(e) => {
                            setMessage(e.target.value)
                        }}/>
                    <br />
                    <Button variant='contained' style={{
                    textTransform : 'none',
                    borderRadius : '50px',
                    background: '#fe7f21',
                    fontFamily: 'LufgaR',
                    boxShadow: 'none',
                    width: '85%'
                        }} value='Send' type='submit' onClick={sendEmail}>Send your message</Button>
                    <Typography style={{
                    color: '#86868B',
                    fontFamily: 'LufgaR',
                    paddingTop: 6
                }}>or</Typography>
                <Typography style={{
                    color: 'white',
                    fontFamily: 'LufgaR',
                    paddingTop: 6
                }}>write us here: <a style={{color: '#fe7f21'}} href="mailto:michael@coreai.in?subject=course%20enquiry" target='_blank'>michael@coreai.in</a></Typography>
        </div>
        </div>
    </div>
    {/* <Module module={course.module}/> */}
    <Cards1 curriculum={course.curriculum} project={course.project} guidance={course.project} tools={course.tools} career={course.career}></Cards1>
    <Tools title={course.title}/>
    <Keyfeatures/>
    </>
}

function Module(props) {
    console.log(props.module)
    const expertise = ['beginner', 'intermediate', 'advanced','expert']

    if(props.module){
        return <>
    <div style={{
        background: '#0f0c20',
        color: 'white',
        paddingLeft: '15%',
        paddingRight: '15%',
        display: 'flex',
        paddingBottom: '7%'
    }}>
        <div style={{
            width: '50%'
        }}>
            {props.module.map((mod, index) => {
                return <div>
                    <Accordion style={{
                width: '90%',
                background: 'purple',
                color: 'white',
                boxShadow: 'none',
                marginTop: 5,
                marginBottom: 5
            }}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:'white'}}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography style={{fontFamily: 'Regular', textTransform: 'capitalize'}}>{expertise[index]} module</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
                </div>
            })}
        </div>
        <div style={{
            width: '50%'
        }}>
            
        </div>
    </div>
    </>
    } else {
        return<>
        loading...
        </>
    }
    
}

function Keyfeatures() {
    return <>
    <div style={{
        background: '#0f0c20',
        color: 'white',
        paddingLeft: '15%',
        paddingRight: '15%',
        display: 'flex',
        paddingBottom: '10%',
        paddingTop: '5%'
    }}>
        
        <div style={{
            height: '60%'
        }}>
            <br />
            <Typography variant="h4" style={{
        fontFamily: 'Regular'
    }}>Key features</Typography>
    <br />
    <br />
            <Typography style={{fontFamily: 'Regular'}}>&#x2713; Live Sessions and Recorded Sessions</Typography>
            <br />
            <Typography style={{fontFamily: 'Regular'}}>&#x2713; 2 coreai's Real World Project</Typography>
            <br />
            <Typography style={{fontFamily: 'Regular'}}>&#x2713; Certificate of completion</Typography>
            <br />
            <Typography style={{fontFamily: 'Regular'}}>&#x2713; Professional Portfolio Building</Typography>
            <br />
            <Typography style={{fontFamily: 'Regular'}}>&#x2713; Placaemnt masterclass with 4 Step Framework to land a Job</Typography>
            <br />
            <Typography style={{fontFamily: 'Regular'}}>&#x2713; 100% Placement Assistance Sessions</Typography>
                </div>
    </div>
    </>
}

function Cards1(props) {
    return <>
        <div className="paddingLR mobHeight" style={{
        background: '#0f0c20',
        color: 'white',
        paddingBottom: '7%',
    }}>
            <div className="flexSwitch mobHeight" style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                color: 'black'
            }}>
                <div className="selectedCourseCard" style={{
                    background: '#f4f4f4',
                    borderRadius: '30px',
                    padding: '20px',
                    height: 250
                }}>
                    
                    <center>
                        <Typography variant='h6' style={{fontFamily: 'LufgaR'}}>Comprehensive Curriculum</Typography>
                        <br />
                        <Typography style={{
                    color: '#86868B',
                    fontFamily: 'Regular'
                }}>{props.curriculum}</Typography>
                    </center>
                </div>
                <div className="selectedCourseCard" style={{
                    background: '#f4f4f4',
                    borderRadius: '30px',
                    padding: '20px',
                    height: 250
                }}>
                    <center>
                        <Typography variant='h6' style={{fontFamily: 'LufgaR'}}>Real-World Projects</Typography>
                        <br />
                            <Typography style={{
                        color: '#86868B',
                        fontFamily: 'Regular'
                                        }}>{props.project}</Typography>
                    </center>
                </div>
                <div className="selectedCourseCard" style={{
                    background: '#f4f4f4',
                    borderRadius: '30px',
                    padding: '20px',
                    height: 250
                }}>
                    <center>
                        <Typography variant='h6' style={{fontFamily: 'LufgaR'}}>Expert Guidance</Typography>
                        <br />
                            <Typography style={{
                        color: '#86868B',
                        fontFamily: 'Regular'
                                        }}>{props.guidance}</Typography>
                    </center>
                </div>
                <div className="selectedCourseCard" style={{
                    background: '#f4f4f4',
                    borderRadius: '30px',
                    padding: '20px',
                    height: 250
                }}>
                    <center>
                        <Typography variant='h6' style={{fontFamily: 'LufgaR'}}>Career Opportunities</Typography>
                        <br />
                            <Typography style={{
                        color: '#86868B',
                        fontFamily: 'Regular'
                                        }}>{props.career}</Typography>
                    </center>
                </div>
                
            </div>
    </div>
    </>
}

function Tools(props) {
    return <>
    <br />
    <div>
    <Typography variant='h4' style={{fontFamily: 'Regular', color: 'black', textAlign: 'center'}}>Toolls you'll learn</Typography>
    <div style={{
        width: '100%',
        height: '13vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // filter: 'grayscale(90%)'
    }}>
        <img className="selectedCourseImg" style={{
            width: 'auto' 
        }} src={"../assets/icon/"+props.title + ' 1'+'.svg'} alt="" />
        <img className="selectedCourseImg" style={{
            width: 'auto'
        }} src={"../assets/icon/"+props.title + ' 2'+'.svg'} alt="" />
        <img className="selectedCourseImg" style={{
            width: 'auto'
        }} src={"../assets/icon/"+props.title + ' 3'+'.svg'} alt="" />
        <img className="selectedCourseImg" style={{
            width: 'auto'
        }} src={"../assets/icon/"+props.title + ' 4'+'.svg'} alt="" />
        <img className="selectedCourseImg" style={{
            width: 'auto'
        }} src={"../assets/icon/"+props.title + ' 5'+'.svg'} alt="" />
        <img className="selectedCourseImg" style={{
            width: 'auto'
        }} src={"../assets/icon/"+props.title + ' 6'+'.svg'} alt="" />
        <img className="selectedCourseImg" style={{
            width: 'auto'
        }} src={"../assets/icon/"+props.title + ' 7'+'.svg'} alt="" />
    </div>
    </div>
    </>
}

export default Selectedcourse