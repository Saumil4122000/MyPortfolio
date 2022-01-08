import React from 'react'
import styled from 'styled-components'
import ProgressBar from './ProgressBar';

const SkillsStyles=styled.div`

`;
export default function Skills() {
    return (
        <SkillsStyles>
            <ProgressBar title={"HTML5"} width={"70%"} text={"70%"}/>
        </SkillsStyles>
    )
}
