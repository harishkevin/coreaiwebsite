import { useEffect } from 'react';
import { courseState } from './assets/store/atoms/courses';
import { useSetRecoilState } from 'recoil';
import { userState } from './assets/store/atoms/user';

// const host = window.location.host
const host = 'localhost:3000'

function Init() {
    const setCourse = useSetRecoilState(courseState)
    const setUser = useSetRecoilState(userState)

    const init = async() => {
        try{
            const res = await fetch(`http://${host}/user/courses`,{
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            })

        const data = await res.json()

        if(data) {
            setCourse({
                courses: data.courses
            })
        }
        } catch(e) {
            console.log(e)
        }
    }

    const me = async() => {
        try{
            const res = await fetch(`http://${host}/user/me`,{
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization' : 'Barer ' + window.localStorage.getItem('token')
                }
            })

            const data = await res.json()
            
            if(data) {
                setUser({
                    isLoading: false,
                    userEmail: data
                })
            } else {
                setUser({
                    isLoading: false,
                    userEmail: null
                })
            }
        } catch (e) {
            setUser({
                isLoading: false,
                userEmail: null
            })
        }
    }

    useEffect(() => {
        init()
        me()
    },[])


    return <></>
}

export default Init

