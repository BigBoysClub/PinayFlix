import DefaultImage from '../../../assets/defaultProfile.jpg';
import '../../Sidebar/SideBar.css';
import AuthStore from '../../../stores/AuthStore';

const Profile = () => {

    const { user } = AuthStore()

    return (
        <div className='sections profile-section'>   
        <h2 className='section-title'>Profile</h2>
        <figure>
            <img className='profile' src={!user ? DefaultImage: user.image} alt="Default Profile" />
        </figure>

        <h3 className='userInfo'>{user.email}</h3>
        <h5 className='userCourse'>Course</h5>
        <button className='profileButton'>View Profile</button>
        </div>
    );
}

export default Profile;