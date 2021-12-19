import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const onClick = () => {
        console.log("Click")
    }
    
    return (
        <header className='header'>
            <h1 style={headingStyle}>{props.title}</h1>
            <Button color='green' text='Hello' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Default Header is here',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS 
const headingStyle = {
    color : 'red',
    backgroundColor : 'black'
}

export default Header
