import React from 'react'
import "../SidebarRow.css"

function SidebarRow({ title, icon, src }) {
    return (
        <div className="sidebarRow">
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
