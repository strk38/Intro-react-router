import { Link } from "react-router-dom";


const Post = ({ post }) => {
    const { id, title } = post;

    const postStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }

    return (
        <div style={postStyle}>
            <p>Post ID: {id}</p>
            <p>Post Title: {title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
        </div>
    );
};

export default Post;