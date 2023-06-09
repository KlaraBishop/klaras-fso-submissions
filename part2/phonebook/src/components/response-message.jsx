const ResponseMessage = ({ message, type }) => {
    const responseStyle = {
        fontStyle: 'italic',
        backgroundColor: 'lightgrey',
        border: '4px solid black',
        borderRadius: '5px',
        padding: '10px',
        color: 'white',
        fontSize: '32px'
    }

    const dsafklsdf = (type === 'success')
    ? responseStyle.color = 'green'
    : responseStyle.color = 'red'

    if (message === '') {
        return <div></div>
    }

    return <h3 style={responseStyle}>{message}</h3>
}

export default ResponseMessage