
import DataTidyr from '../service-js/data-tidyr'

const CarsList = (cars_data,filter_type) => {
    let new_data = DataTidyr(cars_data,filter_type)

    ///Initializing a parent div into which all the child elements were appended through loop
    const cards = document.createElement('div');
    new_data.forEach((res,veh_indx)=>{
        const template = `
        <section class="cards"  onClick="localStorage.setItem('vehicle_id', ${veh_indx});">
        <div class="cards_img" >
            <img src="${res.pic_url}"
                height="100%" width="100%" >
        </div>
        <div class="cards_info">
            <header class="cards_info--h1">${res.veh_make} &nbsp;<span>${res.veh_status} </span>
            </header>
            <section class="cards_info--content">
                <div class="row">
                    <div class="col-4 col-md-2"> <span><i class="fas fa-user"></i></span> <span>${res.pssg_qty}</span>
                    </div>
                    <div class="col-4 col-md-2"> <span><i class="fas fa-suitcase-rolling"></i>
                        </span><span>${res.bagg_qty}</span></div>
                    <div class="col-auto col-md-auto"> <span><i class="fas fa-cog"></i> </span>
                        <span>${res.trsm_type}</span>&nbsp;
                    </div>
                    <div class="col-12 margin_top-12px">
                    <span><i class="fas fa-dharmachakra"></i>&nbsp;</span><span><b>Drive
                            Type :</b> ${res.drv_type}</span>
                    </div>
                    <div class="col-12 ">
                        <span><i class="fas fa-snowflake"></i>&nbsp;</span><span><b>Air
                                Conditioning :</b> ${(res.ac=='true')?'Yes':'No'}</span>
                    </div>
                    <div class="col-12">
                        <span><i class="fas fa-car-side"></i>&nbsp;</span><span><b>Doors Count:
                            </b>&nbsp;
                            ${res.door_cnt}</span>
                    </div>
                    <div class="col-12">
                        <span><i class="fas fa-gas-pump"></i>&nbsp;<b>Fuel Type:</b></span><span>
                        ${res.fuel_type}</span>
                    </div>
                </div>
                <div class="cards_info--footer">Vendor Name:<b> ${res.vend_name}</b></div>
                <footer>
                    <div class="estimated-amount">
                        Est. Amount: <b>${res.curr_code} &nbsp; ${res.est_amt}</b>
                    </div>
                    <div class="total-amount">
                        Total. Price: <b>${res.curr_code} &nbsp; ${res.total_rate}</b>
                    </div>
                </footer>
            </section>
        </div>
    </section>`;
    cards.innerHTML += template;
    })

    return cards.innerHTML;
}


export default CarsList;