const TopBar =(header_data) => {
    let settings = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', };
    let date={
        pickup:new Date(header_data['@PickUpDateTime']).toLocaleString('en-US', settings),
        dropoff:new Date(header_data['@ReturnDateTime']).toLocaleString('en-US', settings)
    }
    const template = `<div class="legend_place col-sm - 6">
        <div class="legend_place--subhead " ><span>Pick up on&nbsp;</span><span class="bold-text">${date.pickup}</span></div >
            <div class="legend_place--heading">${header_data.PickUpLocation['@Name']}</div>
       </div >
        <div class="legend_place col-sm-6">
            <div class="legend_place--subhead "><span>Drop Off on&nbsp;</span><span>${date.pickup}</span></div>
            <div class="legend_place--heading">${header_data.ReturnLocation['@Name']}</div>
        </div>`;

        return template;
}


export default TopBar;