import { createContext, useContext } from "react";

export const ShareContext = createContext({
    Appear: false,
    setAppear: () => {}
})

export const useShare = () => useContext(ShareContext)