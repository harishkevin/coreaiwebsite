import {useEffect, useState} from 'react';
import {Typography, Button, TextField} from '@mui/material'


function Courseslist() {
    const [courseList, setCourseList] = useState([])

    useEffect(() =>{
        fetch('http://localhost:3000/user/courses',{
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }).then((res) =>{
            res.json().then((data) =>{
                setCourseList(data.courses)
            })
        })
    },[])

    useEffect(() => {
        console.log(courseList);
    }, [courseList])

    if(courseList.length > 0) {
        return <>
        <div style={{
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
            {courseList.map(course =>{
                return <div style={{
                    background: '#f4f4f4',
                    borderRadius: '30px',
                    padding: '20px',
                    width: '17.5%',
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
                        <Typography variant='h6' style={{fontFamily: 'LufgaR'}}>{course.title}</Typography>
                        <Typography style={{fontFamily: 'LufgaR', color:'#86868B'}}>{course.description}</Typography>
                    </center>
                </div>
            })}
        </div>
        </>
    } else {
        return <>
    <div>
        loading...
    </div>
    </>
    }
}

export default Courseslist