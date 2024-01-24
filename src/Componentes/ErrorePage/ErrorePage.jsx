import { Link } from "react-router-dom";


const ErrorePage = () => {
    return (
        <div className="text-center my-32">
            <h2 className="text-5xl text-center font-bold mb-16">Ooops sorry !!!</h2>
            <Link className="btn bg-blue-600 text-white font-bold" to="/">Go back to home</Link>



            
        </div>
    );
};

export default ErrorePage;