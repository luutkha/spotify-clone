import React from 'react'

const Index = () => {
    return (
        <div style={{ backgroundColor: "white" ,color:"black", height:"1000px" }}>

           <div className="toast--info">
               <div className="toast--info__icon">
               <i class="fas fa-check-circle"></i>
               </div>
               <div className="toast-custom__body">
                   <div className="toast-custom__title">Title</div>
                   <div className="toast-custom__content">Worked on </div>
               </div>
               <div className="toast-custom__icon--close"><i class="fas fa-times"></i></div>
           </div>

           {/* <div className="toast--success">
               <div className="toast--success__icon">
               <i class="fas fa-check-circle"></i>
               </div>
               <div className="toast-custom__body">
                   <div className="toast-custom__title">Title</div>
                   <div className="toast-custom__content">Worked on </div>
               </div>
               <div className="toast-custom__icon--close"><i class="fas fa-times"></i></div>
           </div>

           <div className="toast--warning">
               <div className="toast--warning__icon">
               <i class="fas fa-check-circle"></i>
               </div>
               <div className="toast-custom__body">
                   <div className="toast-custom__title">Title</div>
                   <div className="toast-custom__content">Worked on </div>
               </div>
               <div className="toast-custom__icon--close"><i class="fas fa-times"></i></div>
           </div> */}


        </div>
    )
}

export default Index
