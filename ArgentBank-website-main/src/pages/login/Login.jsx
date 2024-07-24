import Form from "../../components/form/Form";
import "./Login.scss";

export default function Login() {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <Form />
            </section>
        </main>
    );
}
