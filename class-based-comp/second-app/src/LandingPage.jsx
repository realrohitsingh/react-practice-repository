import Dashboard from './Dashboard.jsx';

function LandingPage(prop) {
    // console.log(prop);
    let num = prop.data;
    console.log(num);
    
    return (
        <div>
            <hr />
            <h1>The num in LandingPage is : {num}</h1>
            <Dashboard count={num} />
        </div>
    )
}

export default LandingPage
