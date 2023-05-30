import { useState } from 'react'



const Statistics = (props) => {
  var good=props.good
  var bad = props.bad
  var neutral = props.neutral

  return <>    
    <h1>Statistics</h1>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {good + bad + neutral}</p>
    <p>Average: {(good - bad)/ (good + bad + neutral)}</p>
    <p>Positive: {(good / (good + bad + neutral))*100}%</p>
  </>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(6)
  const [neutral, setNeutral] = useState(2)
  const [bad, setBad] = useState(1)

  return (
    <div>
      <h1>Give Feedback</h1>
      <input type='button' value={'Good'} />
      <input type='button' value={'Neutral'} />
      <input type='button' value={'Bad'} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App