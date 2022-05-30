import React, { useEffect } from "react";
import About from "./About";

const FireFoxPages = ({ pages, projectsData, setisScreenLoading }) => {
    console.log(pages.selectedPage);

    const handleFireFoxComponents = () => {
        switch (pages.selectedPage) {
            case "about":
                return <About />;
            case "projects":
                console.log("FireFox Does Not Support This Feature. Try use chrome, opera or edge");
            case "blog":
                console.log("FireFox Does Not Support This Feature. Try use chrome, opera or edge");
            default:
                console.log("FireFox Does Not Support This Feature. Try use chrome, opera or edge");
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setisScreenLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="w-full h-screen flex items-center">
            <div>{handleFireFoxComponents(pages)}</div>
        </div>
    );
};

export default FireFoxPages;
