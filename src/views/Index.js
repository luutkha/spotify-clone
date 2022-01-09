import React from 'react'
import { toast } from 'react-toastify';  
const Index = () => {
    const notify = () => {
        // toast("Default Notification !");
        
        // toast.success("Success Notification !", {
        //   position: toast.POSITION.TOP_CENTER
        // });
  
        // toast.error("Error Notification !", {
        //   position: toast.POSITION.TOP_LEFT
        // });
  
        // toast.warn("Warning Notification !", {
        //   position: toast.POSITION.BOTTOM_LEFT
        // });
  
        // toast.info("Info Notification !", {
        //   position: toast.POSITION.BOTTOM_CENTER
        // });
  
        toast(<div >
        <div className="toast-custom__body">
            <div className="toast-custom__title">Vui lòng đăng nhập để nghe!</div>
            <div className="toast-custom__content">Do chính sách của spotify, không thể nghe nhạc lúc chưa đăng nhập!</div>
        </div></div>, {
          position: toast.POSITION.TOP_RIGHT,
          hideProgressBar: true,
          className: 'toast-custom toast--danger',
          bodyClassName:'toast-custom__body',
          autoClose: 3000,
        });
      };
    return (
        <div style={{ backgroundColor: "white" ,color:"black", height:"1000px" }}>
            <button className='btn__primary' onClick={notify}>Notify</button>
           {/* <div className="toast--info">
               <div className="toast--info__icon">
               <i class="fas fa-check-circle"></i>
               </div>
               <div className="toast-custom__body">
                   <div className="toast-custom__title">Title</div>
                   <div className="toast-custom__content">Worked on </div>
               </div>
               <div className="toast-custom__icon--close"><i class="fas fa-times"></i></div>
           </div> */}

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
