import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Detail from './Detail'
import ToggleButton from './ToggleButton'


const Wrapper = () => {
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div>
            <ToggleButton />
            <Detail />
        </div>
    )
}

export default Wrapper