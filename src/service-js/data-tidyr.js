const DataTidyr = (data,filter_type) => {

    var veh_list = new Array();
    data.forEach(vend => {
        vend.VehAvails.forEach(veh => {
            veh_list.push(new Object({
                vend_code:vend.Vendor['@Code'],
                vend_name : vend.Vendor['@Name'],
                veh_status : veh['@Status'],
                est_amt : veh.TotalCharge['@EstimatedTotalAmount'],
                total_rate : veh.TotalCharge['@RateTotalAmount'],
                curr_code : veh.TotalCharge['@CurrencyCode'],
                veh_code: veh.Vehicle['@Code'],
                ac : veh.Vehicle['@AirConditionInd'],
                bagg_qty : veh.Vehicle['@BaggageQuantity'],
                door_cnt : veh.Vehicle['@DoorCount'],
                drv_type : veh.Vehicle['@DriveType'],
                pssg_qty : veh.Vehicle['@PassengerQuantity'],
                fuel_type : veh.Vehicle['@FuelType'],
                trsm_type : veh.Vehicle['@TransmissionType'],
                pic_url : veh.Vehicle['PictureURL'],
                veh_make : veh.Vehicle.VehMakeModel['@Name']
            }))
        })
    });
    localStorage.setItem('filter',filter_type)
    if(filter_type==0){
        veh_list.sort((veh1,veh2)=>{return veh1.total_rate-veh2.total_rate}) }
    else{
        veh_list.sort((veh1,veh2)=>{return veh2.total_rate-veh1.total_rate})}

    return veh_list
    
}



export default DataTidyr;