import AnimateRouting from "./animateRouting";

const PageLayout = ({children}) => {
    return   <AnimateRouting classes="p-2 flex flex-col h-dvh">
        {children}
    </AnimateRouting>
}

export default PageLayout;