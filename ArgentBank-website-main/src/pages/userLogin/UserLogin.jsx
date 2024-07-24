import Transaction from "../../components/transaction/Transaction";
import UserWelcom from "../../components/userWelcom/userWelcom";
import { transaction } from "../../constants/constants";

import "./UserLogin.scss";

export default function UserLogin() {
    return (
        <main className="bg-dark">
            <UserWelcom />
            <h2 className="sr-only">Accounts</h2>
            {transaction.map((transaction, index) => (
                <Transaction
                    key={index}
                    title={transaction.title}
                    amount={transaction.amount}
                    description={transaction.description}
                />
            ))}
        </main>
    );
}
