import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const ToggleButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const handleToggle = (e) => {
        if (e?.target?.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    console.log({ button: theme })
    return (
        <div>
            <div className="toggle-theme-wrapper">
                <span>☀️</span>
                <label className="toggle-theme" htmlFor="checkbox">
                    <input
                        type="checkbox"
                        id="checkbox"
                        onChange={(e) => handleToggle(e)}
                        checked={theme === "dark"}
                    />
                    <div className="slider round"></div>
                </label>
                <span>🌒</span>
            </div>
        </div>
    )
}

export default ToggleButton