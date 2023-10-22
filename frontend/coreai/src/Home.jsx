import {Typography, Button, TextField} from '@mui/material'
import Courseslist from './Courseslist'
import Aboutus from './Aboutus'
import Companies from './Companies'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import Avatar from '@mui/material/Avatar';

function Home() {

    return <>
    <div>
        <Frontbanner/>
        <Aboutus/>
        <Companies/>
        <Courses/>
        <Mentors/>
        <Studentfeedback/>
        <Joinwithus/>
    </div>
    </>
}

function Frontbanner() {

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

    return <>
    <div className='paddingLR flexSwitch' style={{
        display: 'flex',
        background: '#0f0c20',
        paddingTop: '5%',
        paddingBottom: '10%'
    }}>
        <div className='changeWidth width60 mobileTopBottomSpace'>
            <div>
                <div className='mainHeadingWeb' style={{
                    background: 'linear-gradient(to right, #7549F2, #DE53F7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    <Typography variant='h2' style={{fontFamily: 'Bold'}}>Learn to Code Generative AI like ChatGPT from Experienced AI Developers</Typography>
                </div>
                <div className='mainHeadingMobile' style={{
                    background: 'linear-gradient(to right, #7549F2, #DE53F7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>
                    <Typography variant='h3' style={{fontFamily: 'Bold'}}>Learn to Code Generative AI like ChatGPT from Experienced AI Developers</Typography>
                </div>
                <br />
                <br />
                <Typography style={{
                    color: '#676e83 ',
                    fontFamily: 'Regular'
                }}>Provide you with latest online learning system and material that helps your knowledge and growing</Typography>
                <br />
                <br />
                <Button variant='contained' style={{
                    borderRadius: '50px',
                    background: '#0f0c20',
                    border: '1.5px solid #fe7f21',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/courses')
                }}>Join Now <div style={{color: '#fe7f21', marginLeft: 5}}>&gt;</div></Button>
            </div>
        </div>
        <div className='changeWidth width40 mobileTopBottomSpace' style={{
            display: 'flex',
            justifyContent: 'center',
            height: 'auto'
        }}>
            {/* <img style={{width: '60%'}} src="./src/assets/images/student4.png" alt="student pic" /> */}
            {/* <img style={{width: '60%'}} src="./src/assets/images/student5.png" alt="student pic" /> */}
            <div style={{
            background: '#6837f5',
            width: '90%',
            borderRadius: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '5%',
            paddingBottom: '5%',
            height: 500
        }}>
            {/* <img style={{width: '30%'}} src="./src/assets/images/student3.png" alt="" /> */}
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
    </>
}

function Courses() {
    const navigate = useNavigate()

    return <>
    <div className='paddingLR flexSwitch mobileTopBottomSpace' style={{
        background: '#f7f8f9',
        paddingTop: '5%',
        paddingBottom: '7%'
    }}>
        <center>
            <Typography variant='h4' style={{
                fontFamily: 'Regular'
            }}>Our Courses</Typography>
            <br />
            <div style={{
                    background: 'linear-gradient(to right, #7549F2, #DF58D2, #ED787C)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
            <Typography variant='h4' style={{fontFamily: 'Regular'}}><strong>Develope expertise through online courses, certifications offered by core.ai</strong></Typography>
            <br />
            </div>
            <Typography style={{
                color: '#86868B',
                fontFamily: 'Regular'
            }}>At CoreAI, our courses are meticulously crafted to empower you with the latest industry-relevant skills in Python, Machine Learning, Data Science, and more. Our comprehensive curriculum, designed and taught by seasoned experts, provides you with a solid foundation and practical experience. Whether you're a beginner or a professional looking to upskill, our courses cater to diverse skill levels, ensuring you're well-prepared for a successful career in the technology-driven world. Join our courses to unlock your potential and thrive in the ever-evolving tech landscape.</Typography>
            <br />
            <br />
            <Courseslist></Courseslist>
            <br />
            <br />
            <Button variant='contained' style={{
                textTransform : 'capitalize',
                borderRadius : '50px',
                background: '#6837f5',
                boxShadow: 'none',
                fontFamily: 'LufgaR'
            }} onClick={() => {
                navigate('/courses')
            }}>See all courses</Button>
        </center>

    </div>
    </>
}

function Mentors() {
    return <>
        <div className='paddingLR flexSwitch' style={{
            display: 'flex',
            background: '#f7f8f9',
            paddingBottom: '5%'
        }}>
            <div className='changeWidth mobileTopBottomSpace'>
                <Typography variant='h4' style={{
                    fontFamily: 'Regular'
                }}>Mentors</Typography>
                <br />
                <Typography variant='h4' style={{
                    fontFamily: 'Regular'
                }}>We have experienced quality instructors to ensure that best learning opportunities</Typography>
                <br />
                <p style={{
                    fontFamily: 'Regular',
                    color: '#86868B'
                }}>Our mentors are industry experts with extensive experience, providing invaluable guidance and support to our students and helping them navigate their educational and career journeys. They offer personalized insights, fostering a collaborative and nurturing learning environment where students can flourish and reach their full potential.</p>
            </div>
            <div className='changeWidth mobileTopBottomSpace'>
                <img style={{
                    width: '100%'
                }} src="./public/images/mentor.jpg" alt="" />
            </div>
        </div>
    </>
}

function Studentfeedback() {

    const navigate = useNavigate()

    return <>
    <div className='paddingLR mobileTopBottomSpace' style={{
        background: '#f7f8f9',
        paddingBottom: '5%'
    }}>
        <center>
            <Typography variant='h4' style={{
                fontFamily: 'Regular'
            }}>Student Feedback</Typography>
            <br />
            <Typography variant='h4'>Inspiring Growth, Fostering Excellence</Typography>
            <br />
            <p style={{
                color: '#86868B',
                fontFamily: 'Regular'
            }}>Customer satisfaction is at the heart of our values, and the positive feedback we receive from our clients reflects our unwavering commitment to delivering exceptional services and experiences. Their testimonials are a testament to our dedication to their success.</p>
            <br />
            <div className='flexSwitch increaseHeightFeedback' style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
                <div className='testimonyCard' style={{
                    background: '#ffffff',
                    padding : 30,
                    borderRadius: 20,
                    height: 300,
                    boxShadow: '0px 0px 30px 4px rgba(230,230,230,1)'
                }}>
                    <Avatar alt="Remy Sharp" src="./src/assets/images/indianstudent.jpeg" />
                    <br />
                    <Typography style={{
                fontFamily: 'Regular'
            }}>Transformative Data Science Education</Typography>
                    <p style={{
                fontFamily: 'Regular',
                color: '#86868B'
            }}>"CoreAI's courses transformed my understanding of data science. The hands-on approach and the guidance of experienced instructors have been instrumental in my career growth."</p>
                    <Button variant='contained' style={{
                        borderRadius: 50,
                        background: '#6837f5',
                        textTransform: 'capitalize',
                        boxShadow: 'none'
                    }} onClick={() => {
                        navigate('/courses')
                    }}>Get Started</Button>
                </div>
                <div className='testimonyCard' style={{
                    padding : 30,
                    borderRadius: 30,
                    height: 300,
                    boxShadow: '0px 0px 30px 4px rgba(220,220,220,1)'
                }}>
                    <Avatar alt="Remy Sharp" src="./src/assets/images/indianstudent2.jpeg" />
                    <br />
                    <Typography style={{
                fontFamily: 'Regular'
            }}>Building Confidence in Machine Learning</Typography>
                    <p style={{
                fontFamily: 'Regular',
                color: '#86868B'
            }}>"I was skeptical about switching to a career in Machine Learning, but CoreAI's mentors and practical projects gave me the confidence and skills I needed to succeed."</p>
                    <Button variant='contained' style={{
                        borderRadius: 50,
                        background: '#f7f8f9',
                        color: '#6837f5',
                        border: '1.5px solid #6837f5',
                        textTransform: 'capitalize',
                        boxShadow: 'none'
                    }} onClick={() => {
                        navigate('/courses')
                    }}>Get Started</Button>
                </div>
                <div className='testimonyCard' style={{
                    padding : 30,
                    borderRadius: 30,
                    height: 300,
                    boxShadow: '0px 0px 30px 4px rgba(220,220,220,1)'
                }}>
                    <Avatar alt="Remy Sharp" src="./src/assets/images/indianstudent3.jpeg" />
                    <br />
                    <Typography style={{
                fontFamily: 'Regular'
            }}>Seamless Transition with Mentor Support</Typography>
                    <p style={{
                fontFamily: 'Regular',
                color: '#86868B'
            }}>"The internship opportunities provided by CoreAI gave me the real-world experience I needed. The guidance and support from mentors made the transition into a new field seamless."</p>
                    <Button variant='contained' style={{
                        borderRadius: 50,
                        background: '#f7f8f9',
                        color: '#6837f5',
                        border: '1.5px solid #6837f5',
                        textTransform: 'capitalize',
                        boxShadow: 'none'
                    }} onClick={() => {
                        navigate('/courses')
                    }}>Get Started</Button>
                </div>
            </div>
        </center>
    </div>
    </>
}

function Joinwithus() {
    return <>
    <div className='paddingLR flexSwitch' style={{
        display: 'flex',
        background: '#f7f8f9',
        paddingBottom: '7%'
    }}>
        <div className='changeWidth mobileTopBottomSpace'>
            <Typography variant='h4'>Join with us</Typography>
            <br />
            <Typography variant='h4'>Embark on a journey toward achieving your personal and professional aspirations through Creative skills</Typography>
            <br />
            <p style={{fontFamily: 'Regular', color: '#86868B'}}>Join us today to embark on a transformative educational journey with CoreAI. Experience the power of expert guidance, diverse course offerings, and a supportive community, all aimed at equipping you with the skills and knowledge you need to excel in the dynamic world of technology and innovation. Your success story begins here, with us.</p>
        </div>
        <div className='changeWidth mobileTopBottomSpace'>
            <img style={{
                width: '100%'
            }} src="./public/images/join.jpg" alt="" />
        </div>
    </div>
    </>
}

function Stayinformed() {
    return <>
    <div className='paddingLR' style={{
        background: '#f7f8f9',
        paddingBottom: '7%'
    }}>
            <center>
                <div style={{
                        background: 'linear-gradient(to right, #7549F2, #DF58D2, #ED787C)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                    <Typography variant='h4' style={{
                        fontFamily: 'Regular'
                    }}>Contact Us</Typography>
                </div>
                <br />
                <hr />
                <br />
                <div style={{
                    width: '45%'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <Typography variant='h5' style={{
                            color: 'black',
                            fontFamily: 'LufgaR'
                        }}>Your message</Typography>
                        <Typography  style={{
                            color: 'black',
                            fontFamily: 'LufgaR'
                        }}>Livechat</Typography>
                    </div>
                    <br />
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                    <TextField label="Your name" variant='outlined' InputLabelProps={{style: {fontFamily: 'LufgaR'}}}></TextField>
                    <TextField label="Your email" variant='outlined' InputLabelProps={{style: {fontFamily: 'LufgaR'}}}></TextField>
                    </div>
                </div>
                <br />
                <Button variant='contained' style={{
                    borderRadius: 50,
                    background: '#ff7d6a',
                    textTransform: 'capitalize'
                }}>Send your message!</Button>
            </center>
    </div>
    </>
}

function Infobanner() {
    return <>
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '15%',
        paddingRight: '15%',
        background: '#f7f8f9',
    }}>
        <div>
            core ai
        </div>
        <div>
            useful link
        </div>
        <div>
            support
        </div>
        <div>
            Contact info
        </div>
    </div>
    </>
}
export default Home