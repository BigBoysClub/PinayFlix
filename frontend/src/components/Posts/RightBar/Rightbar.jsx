import '../../Sidebar/SideBar.css';
import birthdayImage from '../../../assets/defaultProfile.jpg';

const Rightbar = () => {
return (
		<aside className="sidebar-secondary container">
			<div className='birthday-area'>
				<h2>Birthdays</h2>
				<div className='person-info'>
					<img src={birthdayImage} alt="birthday pic" />
					<h4>Username</h4>
					<h5>Date</h5>
					<p className='life-quote'></p>
				</div>
			</div>
			<div className='weather-report'>

			</div>
		</aside>
  	)
}

export default Rightbar;