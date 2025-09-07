import { Link } from "react-router";


const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-5xl text-center">oppss!!!!</h1>
            <button><Link to='/'>Go Back</Link></button>
        </div>
    );
};

export default ErrorPage;