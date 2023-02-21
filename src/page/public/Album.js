import LeftAlbum from "../../components/Album/LeftAlbum";
import RightAlbum from "../../components/Album/RightAlbum";

function Album() {
    return (
        <div className="grid grid-cols-4 w-full h-full overflow-hidden pt-10">
            <LeftAlbum />
            <RightAlbum />
        </div>
    );
}

export default Album;
