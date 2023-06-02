const Header = ({ name }) => {
  return <h1>{name}</h1>
}

const Part = ({ part }) => {
  return <p>{part.name} {part.exercises}</p>
}

const Content = ({ parts }) => {
  return <>
    {parts.map(part => <Part key={part.name} part={part} /> )} 
  </>
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, num) => sum += num.exercises, 0)

  return <h4>Number of excercises: {total}</h4>
}

const Course = ({course}) => {
  return <>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>   
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App