import './Header.css'
import profileImg from './assets/passport.jpg'

function Header() {
    const details = [{
        name: "Rohit Singh",
        email: "rohitsingh888399@outlook.com",
        phoneNo: "+91 9693376562",
    }]

    return (
        <div className="container">
            <img src={profileImg} alt="Profile" className="profile-img" />
            <div className="detail">
                {details.map((item, index) => (
                    <div key={index}>
                        <h2>{item.name}</h2>
                        <h2>{item.email}</h2>
                        <h2>{item.phoneNo}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header
