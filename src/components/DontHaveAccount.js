import React from 'react'
import { Link } from 'react-router-dom'
import './DontHaveAccount.scss'
function DontHaveAccount({ goTo }) {

    if (goTo === 'signin') {
        return <p className="dont_have_acc">Already have an account? <Link to="/login">Sign in</Link></p>
    }
    return <p className="dont_have_acc">Don’t have an account? <Link to="/signup">Sign Up</Link></p>

}

export default DontHaveAccount
