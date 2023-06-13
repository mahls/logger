import React from 'react'
import Fade from 'react-reveal/Fade';



let AchievementCard = ({records, achievements, title, text}) => {
  
  console.log(records)

  return(
    <div className='mt-2 text-sm px-2 py-1 rounded bg-stone-800 font-regular hover:scale-105 transition'>
      <div className='font-bold mb-1'>{title}</div>
      <div>{text}</div>
    </div>
  )
}



export const Achievements = ({records}) => {

  let achievements = [
    {text: 'Complete 100 hours of study', title: 'Study beginner'},
    {text: 'Complete 200 hours of study', title: 'Study novice'},
    {text: 'Complete 300 hours of study', title: 'Study advanced'},
    {text: 'Complete 400 hours of study', title: 'Study pro'},
    {text: 'Complete 500 hours of study', title: 'Study master'},
  ]

  return (
    <Fade>
      <div className='h-screen text-4xl px-5 py-5 text-white'>
        <div className=''>
          <div className='font-bold mb-4' >Achievements</div>

          {
            achievements.map((task)=>{
              return(
                <AchievementCard text={task.text} title={task.title} achievements={achievements} records={records}/>
              )
            })
          }

        </div>
      </div>
    </Fade>
  )
}
