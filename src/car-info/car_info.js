
import DataTidyr from '../service-js/data-tidyr'

const CarInfo = (cars_data, idx) => {
    let filter_type = localStorage.getItem('filter')
    let new_data = DataTidyr(cars_data, filter_type)
    const template = `
  
    <section class="info">
 
        <div class="info_card">
        <header class="navBar">
        <span onClick="window.location.href='/';"><i class="fas fa-chevron-left"></i> Back</span>
        </header>
    
        <div class="info_card--heading">  ${new_data[idx].veh_make} </div>
        <div class="info_card--subheading"> <span class="vendor">Vendor: <b>${new_data[idx].vend_name} </b></span> 
        <span class="avail"> ${new_data[idx].veh_status} </span> </div>
         <div class="info_card--img">
            <img src="${new_data[idx].pic_url}" class="card-img-top" alt="...">
         </div>
        

         <div class="row margin_top-12px" >
         <div class="col-sm-12 col-md-6"> <span><i class="fas fa-user"></i> <b>Seating Capacity:</b></span> <span>${new_data[idx].pssg_qty}</span>
         </div>
         <div class="col-sm-12 col-md-6"> <span><i class="fas fa-suitcase-rolling"></i>&nbsp;<b>Baggages Allowed: </b>
             </span><span>${new_data[idx].bagg_qty}</span></div>
         <div class="col-12 col-md-6"> <span><i class="fas fa-cog"></i> </span>
             <span><b>Transmission Type: </b> ${new_data[idx].trsm_type}</span>&nbsp;
         </div>
         <div class="col-sm-12 col-md-6">
             <span><i class="fas fa-snowflake"></i>&nbsp;</span><span><b>Air
                     Conditioning :</b> ${(new_data[idx].ac == 'true') ? 'Yes' : 'No'}</span>
         </div>
         <div class="col-sm-12 col-md-6">
             <span><i class="fas fa-car-side"></i>&nbsp;</span><span><b>Doors Count:
                 </b>&nbsp;
                 ${new_data[idx].door_cnt}</span>
         </div>
         <div class="col-sm-12 col-md-6">
             <span><i class="fas fa-gas-pump"></i>&nbsp;<b>Fuel Type:</b></span><span>
             ${new_data[idx].fuel_type}</span>
         </div>
         </div>
        <footer>
        <div >
        Est. Amount: <b>${new_data[idx].curr_code} &nbsp; ${new_data[idx].est_amt}</b>
         </div>
        <div >
        Total. Price: <b>${new_data[idx].curr_code} &nbsp; ${new_data[idx].total_rate}</b>
        </div>
        </footer>

        </div>
    </section>
   `;

    return template;
}


export default CarInfo;


{/* <div class="card info_card"  style="width: 18rem;">
    <img src="${new_data[idx].pic_url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div> */}