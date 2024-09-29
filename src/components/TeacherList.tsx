import React, { useState } from 'react'; // Add useState import
import Image1 from '../assets/edu_person_6.jpeg'
import { BiPlus, BiTrashAlt } from 'react-icons/bi';


// eslint-disable-next-line react-refresh/only-export-components
export let spaces = [
    {
        image: Image1,
        name: 'chemistry lab',
        description: 'A vitual chemistry lab',
        address: '0X0',
        category: 'learn'
    },
    {
        image: Image1,
        name: 'chess',
        description: 'Play a nice game of chess with fellow eduers',
        address: '0x0',
        category: 'game'
    },
    {
        image: Image1,
        name: 'Art gallery',
        description: 'Support creator by purchasing their art',
        address: '0x0',
        category: 'earn'
    },
    {
        image: Image1,
        name: 'chess',
        description: 'Play a nice game of chess with fellow eduers',
        address: '0x0',
        category: 'game'
    },
];

const handleDelete = (idx: number) => {
    spaces = spaces.filter((_, i) => i !== idx)
}
const TeacherList = ({ onOpen }: {onOpen: () => void }) => {
  const [selectedOption, setSelectedOption] = useState('game'); // Add state for selected option

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='teacher--list'>
        <div className='list--header'>
            <h2>Spaces</h2>
            <div>
                <button onClick={onOpen}><BiPlus/>Add</button>
            <select name='options' value={selectedOption} onChange={handleOptionChange}> // Update select element
                <option value='game'>Game</option>
                <option value='learn'>Learn</option>
                <option value='earn'>Earn</option>
            </select>
            </div>
        </div>

        {/* Conditional rendering based on selected option */}
        <div className='list--container'>
            {spaces.map((space, idx) => ( // Filter spaces based on selected option
                space.category === selectedOption ? (
                <div className="list" key={idx}>
                    <div className="teacher--detail">
                        <img className='image' src={space.image} alt={space.name} />
                        <h2>{space.name}</h2>
                    <div className='middle-row'>{space.description.slice(0, 50)}</div>
                    <div className='address-row'>{space.address}</div>
                    <div className='delete' onClick={ () => handleDelete(idx)}><BiTrashAlt/></div>
                    </div>
                </div>
                ) : null
            ))}
        </div>
    </div>
  )
}

export default TeacherList;