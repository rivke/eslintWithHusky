import React,{useRef,useEffect}  from 'react';
import './Index.css';

function ActionsForm({actions, children}){

    const formRef = useRef();

    useEffect(()=>{
      const input = formRef.current.querySelector('input');
      input.focus();
    },[]);

    return(
        <form className="form" ref={formRef}>
            <div className="childrenInputs">
               {children}
            </div>
            {                
                actions.map((action, i) =>{
                    return(       
                        <div className="buttons">                                                      
                         <button className={action.primary?'button1':'button2'} onClick ={action.onclick} key={i}>{action.text}</button>        
                        </div>
                                                
                    );
                }        
             ) 
            }
        
        </form>
    );

}

export default ActionsForm;

