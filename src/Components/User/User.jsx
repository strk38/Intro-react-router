import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { id, phone, name, email } = user;

    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }

    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>{phone}</p>
            <p>{email}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;