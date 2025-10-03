import { Link } from "react-router-dom"

export default function Home(){
    return (
        <div className="home">
            <h1> welcome to BLOOM BOARD 🌸 </h1>
            <p> Get Started by signing up</p>
            <Link to= "/signup">SIGNUP</Link>
            <p> Already have an Account? LOGIN </p>
            <Link to= "/login"> LOGIN</Link>
        </div>
    )
}