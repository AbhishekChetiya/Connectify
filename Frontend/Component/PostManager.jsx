import { useNavigate } from 'react-router-dom'
const PostManager = ({ posts }) => {
    const navigate = useNavigate();
    const handleclick = () => {
        navigate(`/Post/${posts._id}`);
        // alert("hale")
    }
    return (
        <div className="relative group" onClick={handleclick}>
            <img
                alt="Photo"
                className="w-full h-full object-cover rounded-lg"
                height={300}
                src={posts.Postimg}
                style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                }}
                width={300}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <HeartIcon className="w-4 h-4" />
                        <span>{posts.Nooflike}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <TextIcon className="w-4 h-4" />
                        <span>{posts.NoofComment}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function HeartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    )
}
function TextIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17 6.1H3" />
            <path d="M21 12.1H3" />
            <path d="M15.1 18H3" />
        </svg>
    )
}
export default PostManager