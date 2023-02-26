import { useNavigate } from "react-router-dom";

function Artist({ name, id, link }) {
    const navigate = useNavigate();
    return (
        <div
            className="link-artist mr-[1px] text-xs inline whitespace-nowrap"
            onClick={() => {
                navigate(link);
            }}
        >
            {name}
        </div>
    );
}

export default Artist;
