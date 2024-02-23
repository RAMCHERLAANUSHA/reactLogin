import './details.css'

const details = () => {
    const userDataString = localStorage.getItem('userData');
    const parsedUserData = JSON.parse(userDataString);
    const signUpBtn = () => {
        window.location.href = '/signup';
    }
  return (
    <div>
        <div className='submit-containers'>
            <button className='btn' onClick={signUpBtn}>Logout</button>
        </div>
        <div className='container'>
            <div className='cards'>
                <div className='header'>
                <div className='text'>Details</div>
                <div className='underLine'></div>
                </div>
                <div className='data'>
                    <h3>Email : {parsedUserData.email}</h3>
                    <h3>Username : {parsedUserData.username}</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default details
