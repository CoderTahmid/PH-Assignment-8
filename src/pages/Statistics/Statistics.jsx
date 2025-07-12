import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Statistics = () => {

    const {navbarColorChanging} = useOutletContext();

    useEffect(() => {
        navbarColorChanging(true);

        return () => navbarColorChanging(true);
    }, [navbarColorChanging]);

    return (
        <div>
            Statistics
        </div>
    );
};

export default Statistics;