import Navbar from "./Navbar.jsx";

function Dashboard(number) {
    // console.log(number);
    let val = number.count;
    // console.log(val);


    return (
        <div>
            <hr />
            <h1>The num is Dashboard is : {val}</h1>
            <Navbar number={val}/>
        </div>
    )
}

export default Dashboard
