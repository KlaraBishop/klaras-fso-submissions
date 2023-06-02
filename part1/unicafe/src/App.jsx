import { useState } from 'react'

const FeedbackButton = (props) => {
  return <input type='button' value={props.text} onClick={props.onClick} />
}

const StatisticLine = (props) => {
  return <tr key={props.text}>
    <td>{props.text}</td> 
    <td>{props.value}</td>
  </tr>
}

const Statistics = (props) => {
  var good=props.good
  var bad = props.bad
  var neutral = props.neutral

  if ((good + bad + neutral) === 0) { return <div>No feedback given</div>}

  return <>    
      <h1>Statistics</h1>
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Total" value={good + bad + neutral} />
        <StatisticLine text="Average" value={(good - bad)/ (good + bad + neutral)} />
        <StatisticLine text="Positive" value={(good / (good + bad + neutral))*100 + "%"} />
      </tbody>
    </table>
  </>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <FeedbackButton text={'Good'} onClick={() => setGood(good + 1)}/>
      <FeedbackButton text={'Neutral'} onClick={() => setNeutral(neutral + 1)}/>
      <FeedbackButton text={'Bad'} onClick={() => setBad(bad + 1)}/>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App