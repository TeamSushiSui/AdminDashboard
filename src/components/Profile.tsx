import React from 'react'
import ProfileHeader from './ProfileHeader'
import '../styles/profile.css'
import UserImage from '../assets/edu_person_6.jpeg'
import { BiBook, } from 'react-icons/bi'

const courses = [
  {
    title: 'Number of visits',
    duration: '2',
    icons: <BiBook />,
  },
  {
    title: 'Items sold',
    duration: '6',
    icons: <BiBook />,
  },
  {
    title: 'revenue',
    duration: '$800',
    icons: <BiBook />,
  },
]

const Profile = () => {
  return (
    <div className="profile">
      <ProfileHeader />

      <div className='user--profile'>
        <div className='user--detail'>
          <img src={UserImage} alt='' />
          <h3 className='username'>Art Gallery</h3>
          <span className='profession'>Earn</span>
        </div>

        <div className='user--courses'>
          {courses.map((courses) => (
            <div className='course'>
              <div className="course-detail">
              <div className='course-cover'>{courses.icons}</div>
              <div className='course-name'>
                <h5 className='title'>{courses.title}</h5>
                <span className="duration">{courses.duration}</span>
              </div>
              <div className="action">:</div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile