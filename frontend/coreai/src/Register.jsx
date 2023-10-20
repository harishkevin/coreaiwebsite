import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';
import {Typography, Button, TextField} from '@mui/material'
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option'


function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [course, setCourse] = useState('')
    const [plan, setPlan] = useState('')
    const [resetForm, setResetForm] = useState(false)
    const [regSuccess, setRegSuccess] = useState(false)
    const [regFail, setRegFail] = useState(false)

    useEffect(() => {
        if(regSuccess) {
            setName('');
            setEmail('');
            setPhone('');
            setCourse('');
            setPlan('');
            // setRegFail(false)
            // setRegSuccess(false)
            setResetForm(false)
        }
    },[resetForm])


    const sendEmail = (e) => {
    
        e.preventDefault();

        // Your Email.js service ID, template ID, and user ID
        const serviceID = 'service_cd77sil';
        const templateID = 'template_hkj6ncw';
        const userID = '8yfksu4z0DA2_KPvJ';

        emailjs.send(serviceID, templateID, {
            user_name: name,
            user_email: email,
            user_phone: phone,
            user_course: course,
            user_plan: plan
        }, userID)
            .then((response) => {
            console.log('Email sent successfully:', response);
            setRegSuccess(true)
            setResetForm(true)
            }, (error) => {
            console.error('Email could not be sent:', error);
            setRegFail(true)
            });

    }

    return <>
        <div style={{
        width: '100vw',
        background: '#0f0c20',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh'
    }}>
        <div className='enrollCard' style={{
            background: '#6837f5',
            borderRadius: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '3%',
            paddingBottom: '5%',
            height: '60%'
        }}>
            {/* <img style={{width: '30%'}} src="../assets/student3.png" alt="" /> */}
            <Typography variant='h5' style={{
                color: 'white',
                fontFamily: 'LufgaR'
            }}>Enroll now</Typography>
            <br />
                    <TextField label="name" variant='outlined' size='small' type="text" name="user_name" style={{
                        width: '85%'
                        }} InputLabelProps={{style: {fontFamily: 'LufgaR', color: 'white'}}} value={name} onChange={(e) => {
                            setName(e.target.value)
                        }}/>
                    <br />
                    <TextField label="phone" variant='outlined' size='small' type="text" name="user_phone" style={{
                        width: '85%'
                        }} InputLabelProps={{style: {fontFamily: 'LufgaR', color: 'white'}}} value={phone} onChange={(e) => {
                            setPhone(e.target.value)
                        }}/>
                    <br />
                    <TextField label="email" variant='outlined' size='small' type="text" name="user_email" style={{
                        width: '85%'
                        }} InputLabelProps={{style: {fontFamily: 'LufgaR', color: 'white'}}} value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }}/>
                    <br />
                    <Select placeholder="Choose your course" size="sm" style={{width: '85%'}} value={course} onChange={(e, newValue) => {
                        setCourse(newValue)
                    }}>
                        <Option value="Artificial Intelligence">Artificial Intelligence</Option>
                        <Option value="Data Science">Data Science</Option>
                        <Option value="Data Analytics">Data Analytics</Option>
                        <Option value="Full Stack Web Development">Full Stack Web Development</Option>
                        <Option value="Python">Python</Option>
                        <Option value="SQL">SQL</Option>
                    </Select>
                    <br />
                    <Select placeholder="Choose your plan" size="sm" style={{width: '85%'}} value={plan} onChange={(e, newValue) => {
                        setPlan(newValue)
                    }}>
                        <Option value="Basic">Basic</Option>
                        <Option value="Standard">Standard</Option>
                        <Option value="Premium">Premium</Option>
                    </Select>
                    <br />
                    <Button variant='contained' style={{
                    textTransform : 'none',
                    borderRadius : '50px',
                    background: '#fe7f21',
                    fontFamily: 'LufgaR',
                    boxShadow: 'none',
                    width: '85%'
                        }} value='Send' type='submit' onClick={sendEmail}>Confirm Registration</Button>
                    <br />
                    {regSuccess && (<Typography style={{
                        color: 'white',
                        fontFamily: 'LufgaR'
                    }}>&#x2713; Registered Successfully</Typography>)}
                    {regFail && (<Typography style={{
                        color: 'white',
                        fontFamily: 'LufgaR'
                    }}> Registration Failed</Typography>)}
        </div>

    </div>
    </>
}

export default Register