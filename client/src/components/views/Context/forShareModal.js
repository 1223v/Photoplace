import { createContext, useContext } from "react";

export const ShareContext = createContext({
    Appear: false,
    setAppear: () => {},
	Title: "",
	Num: 0,
	Description: "",
	Img: "",
	setTitle: () => {},
	setNum: () => {},
	setDesc: () => {},
	setImg: () => {}
})

export const useShare = () => useContext(ShareContext)