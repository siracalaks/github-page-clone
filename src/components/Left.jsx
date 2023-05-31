import React from 'react'
import { MdInsertEmoticon } from 'react-icons/md'

const Left = () => {
  return (
    <div className='left'>
        <div className="image">
            <img src="https://avatars.githubusercontent.com/u/102253572?v=4" alt="" />
            <div className="emoticonBox">
                <MdInsertEmoticon className='emoticon' />
            </div>
        </div>

        <div className="leftDetails">
            <h2>Muhammed Siraç Alakuş</h2>
            <button>Edit Profile</button>
        </div>
    </div>
  )
}

export default Left