import { useEffect } from "react";
import * as apis from "../../apis";

function Home() {
    useEffect(() => {
        const getHome = async () => {
            const dataHome = await apis.getHome();
            console.log(dataHome);
        };
        getHome();
    }, []);

    return <div>Home</div>;
}

export default Home;
