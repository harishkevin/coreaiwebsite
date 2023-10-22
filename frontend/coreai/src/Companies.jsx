import {Typography, Button, TextField} from '@mui/material'


function Companies() {
    return <>
    <br />
    <div>
    <Typography variant='h4' style={{fontFamily: 'Regular', color: 'black', textAlign: 'center'}}>Our student placed at</Typography>
    <div className='flexSwitch webCompany'>
        <img style={{
            height: '30%',
            width: 'auto'
        }} src="./public/images/tcs.png" alt="" />
        <img style={{
            height: '30%',
            width: 'auto'
        }} src="./public/images/zf.png" alt="" />
        <img style={{
            height: '30%',
            width: 'auto'
        }} src="./public/images/cts.png" alt="" />
        <img style={{
            height: '30%',
            width: 'auto'
        }} src="./public/images/capgemini.png" alt="" />
        <img style={{
            height: '30%',
            width: 'auto'
        }} src="./public/images/walmart.png" alt="" />
    </div>
    <div className='flexSwitch mobileCompany'>
        <img style={{
            height: '10%',
            width: 'auto'
        }} src="./public/images/tcs.png" alt="" />
        <img style={{
            height: '10%',
            width: 'auto'
        }} src="./public/images/zf.png" alt="" />
        <img style={{
            height: '10%',
            width: 'auto'
        }} src="./public/images/cts.png" alt="" />
        <img style={{
            height: '10%',
            width: 'auto'
        }} src="./public/images/capgemini.png" alt="" />
        <img style={{
            height: '10%',
            width: 'auto'
        }} src="./public/images/walmart.png" alt="" />
    </div>
    </div>
    </>
}

export default Companies