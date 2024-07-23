import Button from "../button/Button";
import "./Transaction.scss";

export default function Transaction(children) {
    return (
        <section className="transaction">
            <div className="transaction-content-wrapper">
                <h3 className="transaction-title">{children.title}</h3>
                <p className="transaction-amount">{children.amount}</p>
                <p className="transaction-amount-description">{children.description}</p>
            </div>
            <Button>View transactions</Button>
        </section>
    );
}
