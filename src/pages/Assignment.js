import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import Layout from '../components/Layout';
import AssignmentInfo from '../components/AssignmentInfo';


const Assignment = () => {
    const [isLogged, setIsLogged] = useState(false);
    const logHandleClick = () => {
        isLogged === true ? (
            setIsLogged(false)
        ) : (
            setIsLogged(true)
        )
    }
        

    return (
        <>
        <Layout>
         <AssignmentInfo  isLogged={isLogged} onClick={logHandleClick} />
        </Layout>
        </>
    ) 
}

export default Assignment;