import React, {useRef, useEffect} from 'react'

const CodeRefFocus = () => {
    const focusInputRef = useRef(null);

    useEffect(()=> {
        if(focusInputRef.current) focusInputRef.current.focus();
    },[])

    return (
        <div>
            <form>
                <fieldset>
                    <label htmlFor="user">
                        <input type="text" placeholder="user" name="user" id="user" ref={focusInputRef} />
                    </label>
                    <label htmlFor="pass">
                        <input type="password" placeholder="pass" name="pass" id="pass" />
                    </label>
                </fieldset>
            </form>
        </div>
    )
}

export default CodeRefFocus