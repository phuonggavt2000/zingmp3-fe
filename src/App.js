import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Public } from "./page/public";
import path from "./ultis/path";
import routes from "./routes/routes";
import "tippy.js/dist/tippy.css";
function App() {
    const { test, homeData } = useSelector((state) => state.app);
    console.log("test", homeData);
    return (
        <div className="h-screen w-screen font-inter">
            <Routes>
                <Route path={path.PUBLIC} element={<Public />}>
                    {routes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<Page />}
                            />
                        );
                    })}
                </Route>
            </Routes>
        </div>
    );
}

export default App;
