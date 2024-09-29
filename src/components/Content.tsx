import React, { useState } from 'react'
import ContentHeader from './ContentHeader';
import "../styles/content.css"
import '../styles/teacherList.css'
import Card from './Card';
import Form from './Form'
import TeacherList from './TeacherList';
import { getAllCourse } from '../backend/get_funtions';

const Content = () => {
  const [isFormVisible, setIsFormVisble] = useState(false);

    const toggleForm = () => {
        setIsFormVisble(prev => !prev)
        getAllCourse()
    }
  return (
    <div className="content">
        <ContentHeader />
        <Card />
        <TeacherList onOpen={toggleForm} />
        { isFormVisible && <Form onClose={toggleForm}/>}
    </div>
  )
}

export default Content;