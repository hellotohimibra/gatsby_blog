import React from 'react'
import { Link } from 'gatsby'

const Menu = () =>  (
        <div style={{
            background: '#011627',
            paddingTop: '10px'
        }}>

        <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly',
            textDecoration: 'none'
        }}>
        
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/about'>About</Link></li>
        
    
        </ul>
            
        </div>
    )

export default Menu;