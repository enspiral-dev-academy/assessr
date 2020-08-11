import React, { useState } from 'react'

export default function Evidence({e, i, elen}) {
    const [showNotes, setshowNotes] = useState(false)
    return (
        // allow onclick to toggle on/off previous teacher notes
        <li onClick={() => setshowNotes(!showNotes)}>
                <div>
                  {e.evidence}
                </div>
                {/* Always show the last teacher note by default */}
                {(elen - 1 == i || showNotes) && <div className="evidenceNotes yellow">{e.notes}</div>} 
        </li>
    )
}
