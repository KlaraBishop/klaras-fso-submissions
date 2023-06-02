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

  export default Course