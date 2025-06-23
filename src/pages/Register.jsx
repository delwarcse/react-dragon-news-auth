import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const { createNewUser,setUser } = useContext(AuthContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("Name")
        const photo = form.get("PhotoUrl")
        const email = form.get("Email")
        const pass = form.get("Password")
        console.log({ name, photo, email, pass });

        createNewUser(email, pass)
            .then((result) => {
                const user = result.user;
                setUser(user)
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    
    return (
        <div className="hero min-h-screen flex justify-center items-center">
            <div className="hero-content flex-col">
                <div className="card bg-base-100 max-w-lg shrink-0 rounded-none p-12">
                    <h2 className="text-2xl font-semibold text-center">Register Your Account</h2>
                    <form onSubmit={handleSubmit} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name="Name" className="input input-bordered" placeholder="Name" />
                            <label className="label">Photo URL</label>
                            <input type="text" name="PhotoUrl" className="input input-bordered" placeholder="Photo-URL" />
                            <label className="label">Email</label>
                            <input type="email" name="Email" className="input input-bordered" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="Password" className="input input-bordered" placeholder="Type a Password" />
                            <button className="btn w-full btn-primary rounded-none mt-4">Register</button>
                        </fieldset>
                    </form>
                    <p className="font-semibold text-center">Have An Account...?
                        <Link className="text-green-600 ml-2" to='/auth/login'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;