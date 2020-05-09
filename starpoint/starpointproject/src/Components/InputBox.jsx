import React, {useState} from 'react'

export default function InputBox() {
    const [checkbox1, setCheckbox1] = useState("")
    console.log(checkbox1.length)

    return (
        <div id="inputbox-section">
        <div>
            <textarea 
                    type="text" 
                    cols="50" 
                    rows="5" 
                    value={checkbox1} 
                    onChange={e=>setCheckbox1(e.target.value)} 
                    placeholder="  내용이 있을 수 있습니다." 
                    maxLength="10"
            />
            {checkbox1 && <button>Save</button>}
        </div> 
        <div>
            <textarea type="text" cols="50" rows="5" disabled/> 
        </div>
        <div>
            <textarea type="text" cols="50" rows="5" readOnly/>
        </div>
            
        </div>
    )
}
