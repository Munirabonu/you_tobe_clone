import React, { createContext, useState } from 'react';
import {content} from './mock/content'
export const ContextApi = createContext()

function Context({children}) {
    const [data, setData] = useState(content)


    return (
        <ContextApi.Provider value={[data,setData]}>
            {children}
        </ContextApi.Provider>
    )
}

export default Context
