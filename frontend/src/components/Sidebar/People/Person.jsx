import DefaultImage from '../../../assets/defaultProfile.jpg';

function Person() {
  return (
    <li>
        <img className='people-profile' src={DefaultImage} alt="A user" />
        <h5 className='spacer'>Username</h5>
    </li>
  )
}

export default Person;