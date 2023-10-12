import {Typography, Button, TextField} from '@mui/material'
import Courseslist from './Courseslist'

function Home() {
    return <>
    <div>
        <Frontbanner/>
        <Aboutus/>
        <Courses/>
        <Mentors/>
        <Studentfeedback/>
        <Joinwithus/>
        <Stayinformed/>
        <Infobanner/>
    </div>
    </>
}

function Frontbanner() {
    return <>
    <div style={{
        display: 'flex',
        background: '#0f0c20',
        paddingLeft: '15%',
        paddingRight: '15%',
        paddingTop: '5%',
        paddingBottom: '10%'
    }}>
        <div style={{
            width: '50%'
        }}>
            <div>
                <div style={{
                    background: 'linear-gradient(to right, #7549F2, #DE53F7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    <Typography variant='h2' style={{fontFamily: 'Bold'}}><strong>Up Your Skill To Advance Your Career</strong></Typography>
                </div>
                <br />
                <Typography style={{
                    color: '#676e83 ',
                    fontFamily: 'Regular'
                }}>Provide you with latest online learning system and material that helps your knowledge and growing</Typography>
                <br />
                <Button variant='contained' style={{
                    borderRadius: '50px',
                    background: '#0f0c20',
                    border: '1.5px solid #fe7f21',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }}>Sign up for free <div style={{color: '#fe7f21', marginLeft: 5}}>&gt;</div></Button>
            </div>
        </div>
        <div style={{
            width: '50%',
            display: 'flex',
            justifyContent: 'center'
        }}>
            {/* <img style={{width: '60%'}} src="../assets/student4.png" alt="student pic" /> */}
            {/* <img style={{width: '60%'}} src="../assets/student5.png" alt="student pic" /> */}
            <div style={{
            background: '#6837f5',
            width: '70%',
            borderRadius: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '5%',
            paddingBottom: '5%'
        }}>
            {/* <img style={{width: '30%'}} src="../assets/student3.png" alt="" /> */}
            <br />
            <Typography variant='h5' style={{
                color: 'white',
                fontFamily: 'LufgaR'
            }}>Contact us now</Typography>
            <br />
            <TextField style={{width: '85%'}} label="name" variant='outlined' size='small' type='text' InputLabelProps={{style: {fontFamily: 'LufgaR', color: 'white'}}} onChange={(e)=>{
                setUsername(e.target.value)
            }}></TextField>
            <br />
            <TextField style={{width: '85%'}} label="email" variant='outlined' size='small' type='text' InputLabelProps={{style: {fontFamily: 'LufgaR', color: 'white'}}} onChange={(e)=>{
                setPassword(e.target.value)
            }}></TextField>
            <br />
            <TextField style={{width: '85%'}} label="mobile number" variant='outlined' size='small' InputLabelProps={{style: {fontFamily: 'LufgaR', color: 'white'}}} onChange={(e) =>{
                setConfirmPassword(e.target.value)
            }}></TextField>
            <br />
            <TextField style={{width: '85%'}} label="Your message" multiline rows={4} defaultValue="Default Value" InputLabelProps={{style: {fontFamily: 'LufgaR', color: 'white'}}}/>
        <br />
            <Button variant='contained' style={{
                 textTransform : 'none',
                 borderRadius : '50px',
                 background: '#fe7f21',
                 fontFamily: 'LufgaR',
                 boxShadow: 'none',
                 width: '85%'
            }} onClick={()=>{
                if (password === confirmPassword) {
                    fetch('http://localhost:3000/user/signup',{
                    method: 'POST',
                    body: JSON.stringify({
                        username: username,
                        password: password
                    }),
                    headers: {
                        'content-type': 'application/json'
                    }
                }).then((res) =>{
                    res.json().then((data) =>{
                        console.log(data)
                        setUser({
                            isLoading: false,
                            userEmail: username
                        })
                        navigate('/')
                    })
                })
                } else {
                    console.log('password does not match')
                }
            }}>Send your message</Button>
        </div>
        </div>
    </div>
    </>
}

function Courses() {
    return <>
    <div style={{
        background: '#f7f8f9',
        paddingLeft: '15%',
        paddingRight: '15%',
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
            }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias maiores sit repellendus unde illum. Magni neque labore amet cupiditate aspernatur ut minus iusto, esse qui repellat molestias ad libero iure vitae voluptates quibusdam recusandae maxime in? Tempore, harum excepturi eius aliquam illo aperiam accusamus ipsam nam, voluptas voluptatum vitae dolorem.</Typography>
            <br />
            <Courseslist></Courseslist>
            <br />
            <Button variant='contained' style={{
                textTransform : 'capitalize',
                borderRadius : '50px',
                background: '#6837f5',
                boxShadow: 'none',
                fontFamily: 'LufgaR'
            }}>See all courses</Button>
        </center>

    </div>
    </>
}

function Aboutus() {
    return <>
    <div style={{
        display: 'flex',
        paddingLeft: '15%',
        paddingRight: '15%',
        background: '#0f0c20',
        paddingBottom: '10%'
    }}>
        <div style={{
            width: '50%'
        }}>
            <div>
                <Typography variant='h4' style={{
                    color: 'white',
                    fontFamily: 'Regular'
                }}>About us</Typography>
                <br />
                <div style={{
                    background: 'linear-gradient(to right, #7549F2, #DF58D2, #ED787C)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    <Typography variant='h4' style={{fontFamily: 'Regular'}}>Unlocking a world of learning</Typography>
                </div>
                <br />
                <Typography style={{
                    color: '#86868B',
                    fontFamily: 'Regular'
                }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, possimus consectetur perferendis animi soluta earum eveniet fugit fugiat, dignissimos inventore, enim ipsum? Molestiae architecto facere modi. Maiores amet sapiente eum?</Typography>
            </div>
            

        </div>
        <div style={{
            width: '50%'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <div style={{
                    background: '#f4f4f4',
                    borderRadius: '30px',
                    padding: '20px',
                    width: '35%',
                    height: 250
                }}>
                    
                    <center>
                        <img style={{
                            width: '80%',
                            borderRadius: 50,
                            height: 60,
                            objectFit: 'cover',
                            objectPosition: '0 1%'
                        }} src="../assets/instructor1.jpeg" alt="" />
                        <Typography variant='h6' style={{fontFamily: 'LufgaR'}}>Experienced Instructor</Typography>
                    </center>
                </div>
                <div style={{
                    background: '#f3c7c5',
                    borderRadius: '30px',
                    padding: '20px',
                    width: '35%',
                    height: 250
                }}>
                    <Typography variant='h6' style={{fontFamily: 'LufgaR'}}>Diverse Course Catlogue</Typography>
                </div>
                {/* <div style={{
                    background: '#b6d7fe',
                    borderRadius: '30px',
                    padding: '20px'
                }}>
                    <Typography variant='h6'>Supportive Community</Typography>
                </div> */}
            </div>
        </div>
    </div>
    </>
}

function Mentors() {
    return <>
        <div style={{
            display: 'flex',
            paddingLeft: '15%',
            paddingRight: '15%',
            background: '#f7f8f9',
            paddingBottom: '5%'
        }}>
            <div style={{
                width: '50%'
            }}>
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
                }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, sint quod nihil error, dignissimos mollitia cumque at, ipsam a quos beatae architecto sapiente porro laboriosam facere pariatur laborum doloremque consequatur similique placeat cum. Illo, quis? Maiores dolore, sint architecto non repudiandae deleniti, officia perspiciatis eligendi unde ex rem assumenda sapiente!</p>
                <Button>Join now</Button>
            </div>
            <div style={{
                width: '50%'
            }}>
                img
            </div>
        </div>
    </>
}

function Studentfeedback() {
    return <>
    <div style={{
        paddingLeft: '15%',
        paddingRight: '15%',
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
            }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum, quo ipsam eos optio ut esse dolores libero aliquid quasi.</p>
            <br />
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <div style={{
                    background: '#ffffff',
                    padding : 30,
                    borderRadius: 20,
                    width: '22%',
                    height: 300
                }}>
                    <Typography>Best course of my life</Typography>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda eaque nesciunt velit temporibus sint modi natus quae voluptate quidem.</p>
                    <Button variant='contained' style={{
                        borderRadius: 50,
                        background: '#6837f5',
                        textTransform: 'capitalize',
                        boxShadow: 'none'
                    }}>Get Started</Button>
                </div>
                <div style={{
                    padding : 30,
                    borderRadius: 30,
                    width: '22%',
                    height: 300
                }}>
                    <Typography>Best course of my life</Typography>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda eaque nesciunt velit temporibus sint modi natus quae voluptate quidem.</p>
                    <Button variant='contained' style={{
                        borderRadius: 50,
                        background: '#f7f8f9',
                        color: '#6837f5',
                        border: '1.5px solid #6837f5',
                        textTransform: 'capitalize',
                        boxShadow: 'none'
                    }}>Get Started</Button>
                </div>
                <div style={{
                    padding : 30,
                    borderRadius: 30,
                    width: '22%',
                    height: 300
                }}>
                    <Typography>Best course of my life</Typography>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda eaque nesciunt velit temporibus sint modi natus quae voluptate quidem.</p>
                    <Button variant='contained' style={{
                        borderRadius: 50,
                        background: '#f7f8f9',
                        color: '#6837f5',
                        border: '1.5px solid #6837f5',
                        textTransform: 'capitalize',
                        boxShadow: 'none'
                    }}>Get Started</Button>
                </div>
            </div>
        </center>
    </div>
    </>
}

function Joinwithus() {
    return <>
    <div style={{
        display: 'flex',
        paddingLeft: '15%',
        paddingRight: '15%',
        background: '#f7f8f9',
        paddingBottom: '7%'
    }}>
        <div style={{
            width: '50%'
        }}>
            <Typography variant='h4'>Join with us</Typography>
            <br />
            <Typography variant='h4'>Embark on a journey toward achieving your personal and professional aspirations through Creative skills</Typography>
            <br />
            <p style={{fontFamily: 'Regular', color: '#86868B'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente magnam tenetur culpa perspiciatis possimus accusantium impedit mollitia accusamus, ipsam ab.</p>
            <Button>Join us</Button>
        </div>
        <div style={{
            width: '50%'
        }}>
            img
        </div>
    </div>
    </>
}

function Stayinformed() {
    return <>
    <div style={{
        paddingLeft: '15%',
        paddingRight: '15%',
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
        justifyContent: 'space-between'
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