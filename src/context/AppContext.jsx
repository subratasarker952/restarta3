import { createContext, useState, useEffect, useContext } from "react";
import useData from "../hooks/useData";
const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const { data, setData } = useData()
    const [savedApps, setSavedApps] = useState([]); // localStorage saved apps

    // 🔹 Load saved apps from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem("savedApps");
        if (saved) setSavedApps(JSON.parse(saved));
    }, []);

    // 🔹 Save updated savedApps to localStorage
    useEffect(() => {
        localStorage.setItem("savedApps", JSON.stringify(savedApps));
    }, [savedApps]);

    // 🔹 Add an app to savedApps
    const addSavedApp = (app) => {
        // prevent duplicates
        console.log(app);
        if (!savedApps.find(a => a.id === app.id)) {
            setSavedApps(prev => [...prev, app]);
        }
    };

    // 🔹 Remove an app from savedApps
    const removeSavedApp = (appId) => {
        setSavedApps(prev => prev.filter(a => a.id !== appId));
    };

    // 🔹 Check if app is saved
    const isSaved = (appId) => {
        console.log(appId);
        return savedApps.some(a => a.id === appId);
    };

    const value = {
        data,
        setData,
        savedApps,
        addSavedApp,
        removeSavedApp,
        isSaved
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom Hook
const useAppsContext = () => useContext(AppContext);

// eslint-disable-next-line react-refresh/only-export-components
export default useAppsContext;