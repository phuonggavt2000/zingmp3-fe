import { useSelector } from "react-redux";

function Slider() {
    const { banner } = useSelector((state) => state.app);
    console.log(banner);

    return <div className=""></div>;
}

export default Slider;
