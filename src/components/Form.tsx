import React, { useState } from 'react'
import '../styles/form.css'
import { addCourse, addGame } from '../backend/get_funtions'
import { spaces } from './TeacherList'

import Image1 from '../assets/edu_person_6.jpeg'

const Form = ({ onClose }: { onClose: () => void}) => {
    const [formData, setFormData] = useState<{name: string; description: string; category: string}>({name: '', description: '', category: 'game'})

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevData => ({ ...prevData, name: event.target.value }))
    }
    const handleChangeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData(prevData => ({ ...prevData, description: event.target.value }))
    }
    const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData(prevData => ({ ...prevData, category: event.target.value }))
    }

    const cancel = () => {
        setFormData({name: '', description: '', category: 'game'})
        onClose()
    }

    const done = () => {
        console.log(formData)
        if (formData.name && formData.description) {
        
            // if (formData.category === 'game'){
            //     addGame({name: formData.name, description: formData.description, address: '0x0'})
            // } else if (formData.category === 'learn') {
            //     addCourse({name: formData.name, description: formData.description, address: '0x1'})
            // }
            const newFormData = {address: "0x0", image: Image1, ...formData}
            spaces.push(newFormData)
            cancel()
        }
    }

  return (
    <div className='form-container'>
        <div className='form-inputs'>
        <input type="text" value={formData.name} onChange={handleChangeName} />
        <textarea name="description" value={formData.description} onChange={handleChangeDescription}></textarea>
        <select name="category" value={formData.category} onChange={handleChangeCategory}>
            <option value="game">Game</option>
            <option value="earn">Earn</option>
            <option value="learn">Learn</option>
        </select>
        </div>
        <div className="form-button">
            <input type="button" value="Cancel" onClick={cancel}/>
            <input type="button" value="Done" onClick={done}/>
            
        </div>
    </div>
  )
}

export default Form