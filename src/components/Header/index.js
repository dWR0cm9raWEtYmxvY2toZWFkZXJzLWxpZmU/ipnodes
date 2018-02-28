import React from 'react'
import Link from 'gatsby-link'
import logo from '../../assets/image/logo.png'

const s = {
		ctn: {
				background: 'transparent',
				position: 'absolute',
				width:'100%',
				marginBottom: '1.45rem',
		},
		hrow:{
				margin: '0 auto',
				maxWidth: 960,
				padding: '1.45rem 1.0875rem',
				display:'flex',
				justifyContent: 'space-between'
		},
		link:{
				color: 'white',
				textDecoration: 'none',
		},
		logo:{
				height: '1.3rem',
				width: '4.8rem',
		}
}

const Header = () => (
		<div style={s.ctn} >
				<div style={s.hrow} >
						<Link to="/" style={s.link}>
								<img src={logo} style={s.logo}/>
						</Link>
						<Link to="/api/login" style={s.link}>
								<text style={{fontSize:'0.85rem'}}>登录</text>
						</Link>																						
				</div>
		</div>
)

export default Header
