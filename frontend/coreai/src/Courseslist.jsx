import {useEffect, useState} from 'react';
import {Typography, Button, TextField} from '@mui/material'
import { courseState } from './assets/store/atoms/courses';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';


function Courseslist() {
    const courseList = useRecoilValue(courseState)
    const array = courseList.courses.slice(0,4)
    console.log(array)

    const navigate = useNavigate()

    if(array.length > 0) {
        return <>
        <div className='flexSwitch increaseHeightCourseList' style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
            {array.map(course =>{
                return <div className='courseList' onClick={() => {
                    navigate(`/course/${course._id}`)
                }}>
                <div style={{width: '100%'}}>
                    <img style={{
                        width: '80%',
                        borderRadius: 50,
                        height: 60,
                        objectFit: 'cover',
                        objectPosition: '0 1%'
                    }} src={"../src/assets/images/cover/" + course.title + '.jpeg'} alt="" />
                    <Typography variant='h6' style={{fontFamily: 'LufgaR'}}>{course.title}</Typography>
                </div>
                {/* <Typography style={{fontFamily: 'LufgaR', color:'#86868B'}}>{course.description}</Typography> */}
                <div>
                    <Typography style={{fontFamily: 'Regular', color:'#86868B'}}>&#x2713; Training + Internship</Typography>
                    <Button variant='contained' style={{
                        textTransform : 'none',
                        borderRadius : '50px',
                        background: '#fe7f21',
                        fontFamily: 'LufgaR',
                        boxShadow: 'none',
                        }}>Join now</Button>
                </div>
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