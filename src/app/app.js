import './app.scss';
import TopBar from '../top-bar/top-bar';
import CarsList from '../cars-list/cars-list';
import CarInfo from '../car-info/car_info';

const app = () => {
    const filter_low_btn = document.getElementById('filter-high');
    const filter_high_btn = document.getElementById('filter-low');
    fetch('http://www.cartrawler.com/ctabe/cars.json ')
        .then(res => res.json())
        .then((json_res) => {
            let data = json_res[0].VehAvailRSCore;
            if (json_res.length) {
                document.getElementById('nav_head').innerHTML = TopBar(data.VehRentalCore)
                document.getElementById('cars_list').innerHTML = CarsList(data.VehVendorAvails, 0)
                filter_high_btn.addEventListener('click', event => { document.getElementById('cars_list').innerHTML = CarsList(data.VehVendorAvails, 0) });
                filter_low_btn.addEventListener('click', event => { document.getElementById('cars_list').innerHTML = CarsList(data.VehVendorAvails, 1) });
            
            /////If there is a click on any element 
                document.addEventListener('click', function(e) {
                  let id= localStorage.getItem('vehicle_id') 
                  if(id){
                    localStorage.removeItem('vehicle_id')
                    document.getElementById('filter_btn').innerHTML = CarInfo(data.VehVendorAvails,id)
                    document.getElementById('main_content').innerHTML = CarInfo(data.VehVendorAvails,id)
                }
                }, false);

            }
            else {
                document.getElementById('main_content').innerHTML = 'No Data Found. Try again later'
            }

        }).catch(err => alert(err));


}





///App initialization
app();
