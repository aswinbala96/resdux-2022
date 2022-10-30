import React from 'react'
import { Icon, CloseIcon, SidebarContainer, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to ='/' onClick = {toggle}>HOME</SidebarLink>
                <SidebarLink to ='/project' onClick = {toggle}>PROJECT</SidebarLink>
                <SidebarLink to ='/calendar' onClick = {toggle}>CALENDAR</SidebarLink>
                <SidebarLink to ='/deliverables' onClick = {toggle}>DELIVERABLES</SidebarLink>
                <SidebarLink to ='/logistic' onClick = {toggle}>LOGISTICS</SidebarLink>
                <SidebarLink to ='/resources' onClick = {toggle}>RESOURCES</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar