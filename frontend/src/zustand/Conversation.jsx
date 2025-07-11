import { create } from 'zustand'

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: ((selectedConversation) =>set ({ selectedConversation })),


  message:[],
   setmessage:(msg)=>{
    if(Array.isArray(msg)){
        set({message:msg})
    }else{
        set((state)=>({
            setmessage:[...(Array.isArray(state.message)?state.message:[]),msg]
        }))
    }
   },

   userList:false,
   setUserList:(value)=>set({userList:value})
 
}))


export  default useConversation