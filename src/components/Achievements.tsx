import React from 'react'
import Fade from 'react-reveal/Fade';



let AchievementCard = ({type, records, achievements, title, text}) => {

  const totalStudy = records.reduce((acc, record) => {
    return acc + record.study;
  }, 0);

  const totalExercise = records.reduce((acc, record) => {
    return acc + record.exercise;
  }, 0); 

  const totalLeisure = records.reduce((acc, record) => {
    return acc + record.leisure;
  }, 0);

  console.log(type)

  //let cardstyle = `${totalStudy > 100 && type == 'study' : 'border border-green-500' : 'border border-stone-200' } transition mt-2 mr-2 text-sm px-2 py-1 rounded`
  let cardstyle1 = 'mt-2 mr-2 text-sm px-2 py-1 rounded bg-stone-800 font-regular hover:scale-105 transition'
  return(
    <div className={cardstyle1}>
      <div className='font-bold mb-1'>{title}</div>
      <div>{text}</div>
    </div>
  )
}



export const Achievements = ({records}) => {

  let achievements = [
    {type: 'achivevement', text: 'Complete 100 hours of study', title: 'Study beginner', completed: false},
    {type: 'achivevement', text: 'Complete 200 hours of study', title: 'Study novice', completed: false},
    {type: 'achivevement',text: 'Complete 400 hours of study', title: 'Study pro', completed: false},
    {type: 'achivevement',text: 'Complete 800 hours of study', title: 'Study master', completed: false},
  ]

  let exerciseachievements = [
    {type: 'exercise', text: 'Complete 100 hours of exercise', title: 'Exercise beginner', completed: false},
    {type: 'exercise',text: 'Complete 200 hours of exercise', title: 'Exercise novice', completed: false},
    {type: 'exercise', text: 'Complete 400 hours of exercise', title: 'Exercise pro', completed: false},
    {type: 'exercise',text: 'Complete 800 hours of exercise', title: 'Exercise master', completed: false}
  ]

  let leisureachievements = [
    {text: 'Complete 100 hours of exercise', title: 'Exercise beginner', completed: false},
    {text: 'Complete 200 hours of exercise', title: 'Exercise novice', completed: false},
    {text: 'Complete 400 hours of exercise', title: 'Exercise pro', completed: false},
    {text: 'Complete 800 hours of exercise', title: 'Exercise master', completed: false}
  ]

  let rewards = [
    {coins: 10}, {coins: 20}, {coins: 40}, {coins: 80},
  ]

  return (
    <Fade>
      <div className='h-screen text-4xl px-5 py-5 text-white'>
        <div className=''>
          <div className='flex font-bold mb-4' >Achievements</div>

          <div className='grid grid-cols-2'>
          <div>
          {
            achievements.map((task)=>{
              return(
                <AchievementCard text={task.text} title={task.title} achievements={achievements} records={records}/>
              )
            })
          }
          </div>

          <div className=''>
          {
            exerciseachievements.map((task)=>{
              return(                
                <AchievementCard type={task.type} text={task.text} title={task.title} achievements={achievements} records={records}/>
              )
            })
          }
          </div>
          </div>

        </div>
        
        <div className='mt-6 font-bold text-4xl'>
          Rewards
        </div>

      </div>
    </Fade>
  )
}
