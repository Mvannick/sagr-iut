import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
} from 'reactstrap';

import './header.css'

const Header = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className='container-fluid header'>
			<Navbar color="light" className='d-flex justify-content-between' light expand="md">
				<NavbarBrand href="/">SAGR - Version 1.0</NavbarBrand>

				
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
					</Nav>
				</Collapse>

				<div className='user_info row col-md-2 hidden'>
					<div className='col-5 d-flex justify-content-center' style={{height: '100%',}}>
						<span style={{width: 50,height: 50, borderRadius: 50, backgroundColor: '#a0a0a0', display: 'block'}}>
						</span>
					</div>
					<div className='col-7 d-flex flex-column justify-content-between p-0 m-0 user_zone'>
						<p className='user_name'>User Name</p>
						<p className='user_statut'>User Statut </p>
					</div>
				</div>
			</Navbar>			
		</div>
	);
}

export default Header;