import { Link } from "react-router";


const ErrorPage = () => {
    return (
        <div>
            <h1 className="5xl text-center">404 Page Not Found</h1>
            <button className="flex justify-center"><Link to='/'>Go Back</Link></button>
        </div>
    );
};

export default ErrorPage;