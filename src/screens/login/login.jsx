import { useState } from 'react';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './login.css';

export default function Login({ onLogin }) {
    const [password, setPassword] = useState('');

    const submit = () => {
        if (!password) {
            alert("you must enter a password");
            return;
        }
        if (password === "BuildR0b0$") {
            onLogin("member");
        } else if (password === "sk0v!kes") {
            onLogin("guest");
        }
    }

    return (
        <div className="container">
            <h1>Login</h1>
            <Input addonBefore="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <Button type="primary" onClick={() => submit()}>Login</Button>
        </div>
    )
}