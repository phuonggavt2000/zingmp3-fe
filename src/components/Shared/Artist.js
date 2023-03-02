import { useNavigate } from "react-router-dom";

function Artist({ name, link, playlist }) {
    const navigate = useNavigate();
    return (
        <div
            className={`link-artist mr-1 ${
                playlist ? "" : " whitespace-nowrap"
            }  inline `}
            onClick={() => {
                navigate(link);
            }}
        >
            {name}
        </div>
    );
}

export default Artist;
