import DefaultImage from '../../assets/defaultProfile.jpg';
function People() {
  return (
    <div className="sections people-section">
        <h2>People</h2>
        <ul className='list-ul'>
            <li>
                <img className='people-profile' src={DefaultImage} alt="A user" />
                <h5 className='spacer'>Username</h5>
            </li>
            <li>
                <img className='people-profile' src={DefaultImage} alt="A user" />
                <h5 className='spacer'>Username</h5>
            </li>
            <li>
                <img className='people-profile' src={DefaultImage} alt="A user" />
                <h5 className='spacer'>Username</h5>
            </li>
            <li>
                <img className='people-profile' src={DefaultImage} alt="A user" />
                <h5 className='spacer'>Username</h5>
            </li>
        </ul>
    </div>
  );
}

export default People;