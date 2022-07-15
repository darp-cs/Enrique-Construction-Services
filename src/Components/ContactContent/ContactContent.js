import {headingStyles, pStyles, ulStyles, liStyles} from './styles'
const ContactContent = () =>{
    return (
        <div>
            <h3 style = {headingStyles}>Contact Us</h3>
            <ul style = {ulStyles}>
                <li style = {liStyles}>
                <strong>Contact Number:</strong> 828-578-2755
                </li>
                <li style = {liStyles} > 
                    <strong>Address:</strong> 1112 Shannonbrook Drive
                </li>
                <li style = {liStyles}>
                <strong>Available Hours:</strong>
                    <ul style = {ulStyles}>
                        <li style = {liStyles}>
                            Mon-Fri 9:00 AM - 5:00 PM
                        </li>
                    </ul>
                </li>
                <li style = {liStyles}>
                <strong>Let me know how we can improve your experience!</strong>
                </li>
            </ul>
        </div>
    )
}

export default ContactContent;