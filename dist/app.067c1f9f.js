parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"b5bZ":[function(require,module,exports) {

},{}],"Oz2f":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e){var n={weekday:"long",year:"numeric",month:"long",day:"numeric"},a={pickup:new Date(e["@PickUpDateTime"]).toLocaleString("en-US",n),dropoff:new Date(e["@ReturnDateTime"]).toLocaleString("en-US",n)};return'<div class="legend_place col-sm - 6">\n        <div class="legend_place--subhead " ><span>Pick up on&nbsp;</span><span class="bold-text">'.concat(a.pickup,'</span></div >\n            <div class="legend_place--heading">').concat(e.PickUpLocation["@Name"],'</div>\n       </div >\n        <div class="legend_place col-sm-6">\n            <div class="legend_place--subhead "><span>Drop Off on&nbsp;</span><span>').concat(a.pickup,'</span></div>\n            <div class="legend_place--heading">').concat(e.ReturnLocation["@Name"],"</div>\n        </div>")},n=e;exports.default=n;
},{}],"CcGo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e,t){var a=new Array;return e.forEach(function(e){e.VehAvails.forEach(function(t){a.push(new Object({vend_code:e.Vendor["@Code"],vend_name:e.Vendor["@Name"],veh_status:t["@Status"],est_amt:t.TotalCharge["@EstimatedTotalAmount"],total_rate:t.TotalCharge["@RateTotalAmount"],curr_code:t.TotalCharge["@CurrencyCode"],veh_code:t.Vehicle["@Code"],ac:t.Vehicle["@AirConditionInd"],bagg_qty:t.Vehicle["@BaggageQuantity"],door_cnt:t.Vehicle["@DoorCount"],drv_type:t.Vehicle["@DriveType"],pssg_qty:t.Vehicle["@PassengerQuantity"],fuel_type:t.Vehicle["@FuelType"],trsm_type:t.Vehicle["@TransmissionType"],pic_url:t.Vehicle.PictureURL,veh_make:t.Vehicle.VehMakeModel["@Name"]}))})}),localStorage.setItem("filter",t),0==t?a.sort(function(e,t){return e.total_rate-t.total_rate}):a.sort(function(e,t){return t.total_rate-e.total_rate}),a},t=e;exports.default=t;
},{}],"obf2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=s(require("../service-js/data-tidyr"));function s(n){return n&&n.__esModule?n:{default:n}}var a=function(s,a){var c=(0,n.default)(s,a),t=document.createElement("div");return c.forEach(function(n,s){var a='\n        <section class="cards"  onClick="localStorage.setItem(\'vehicle_id\', '.concat(s,');">\n        <div class="cards_img" >\n            <img src="').concat(n.pic_url,'"\n                height="100%" width="100%" >\n        </div>\n        <div class="cards_info">\n            <header class="cards_info--h1">').concat(n.veh_make," &nbsp;<span>").concat(n.veh_status,' </span>\n            </header>\n            <section class="cards_info--content">\n                <div class="row">\n                    <div class="col-4 col-md-2"> <span><i class="fas fa-user"></i></span> <span>').concat(n.pssg_qty,'</span>\n                    </div>\n                    <div class="col-4 col-md-2"> <span><i class="fas fa-suitcase-rolling"></i>\n                        </span><span>').concat(n.bagg_qty,'</span></div>\n                    <div class="col-auto col-md-auto"> <span><i class="fas fa-cog"></i> </span>\n                        <span>').concat(n.trsm_type,'</span>&nbsp;\n                    </div>\n                    <div class="col-12 margin_top-12px">\n                        <span><i class="fas fa-snowflake"></i>&nbsp;</span><span><b>Air\n                                Conditioning :</b> ').concat("true"==n.ac?"Yes":"No",'</span>\n                    </div>\n                    <div class="col-12">\n                        <span><i class="fas fa-car-side"></i>&nbsp;</span><span><b>Doors Count:\n                            </b>&nbsp;\n                            ').concat(n.door_cnt,'</span>\n                    </div>\n                    <div class="col-12">\n                        <span><i class="fas fa-gas-pump"></i>&nbsp;<b>Fuel Type:</b></span><span>\n                        ').concat(n.fuel_type,'</span>\n                    </div>\n                </div>\n                <div class="cards_info--footer">Vendor Name:<b> ').concat(n.vend_name,'</b></div>\n                <footer>\n                    <div class="estimated-amount">\n                        Est. Amount: <b>').concat(n.curr_code," &nbsp; ").concat(n.est_amt,'</b>\n                    </div>\n                    <div class="total-amount">\n                        Total. Price: <b>').concat(n.curr_code," &nbsp; ").concat(n.total_rate,"</b>\n                    </div>\n                </footer>\n            </section>\n        </div>\n    </section>");t.innerHTML+=a}),t.innerHTML},c=a;exports.default=c;
},{"../service-js/data-tidyr":"CcGo"}],"rduT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=a(require("../service-js/data-tidyr"));function a(n){return n&&n.__esModule?n:{default:n}}var s=function(a,s){var c=localStorage.getItem("filter"),i=(0,n.default)(a,c);return'\n  \n    <section class="info">\n \n        <div class="info_card">\n        <header class="navBar">\n        <span onClick="window.location.href=\'/\';"><i class="fas fa-chevron-left"></i> Back</span>\n        </header>\n    \n        <div class="info_card--heading">  '.concat(i[s].veh_make,' </div>\n        <div class="info_card--subheading"> <span class="vendor">Vendor: <b>').concat(i[s].vend_name,' </b></span> \n        <span class="avail"> ').concat(i[s].veh_status,' </span> </div>\n         <div class="info_card--img">\n            <img src="').concat(i[s].pic_url,'" class="card-img-top" alt="...">\n         </div>\n        \n\n         <div class="row margin_top-12px" >\n         <div class="col-sm-12 col-md-6"> <span><i class="fas fa-user"></i> <b>Seating Capacity:</b></span> <span>').concat(i[s].pssg_qty,'</span>\n         </div>\n         <div class="col-sm-12 col-md-6"> <span><i class="fas fa-suitcase-rolling"></i>&nbsp;<b>Baggages Allowed: </b>\n             </span><span>').concat(i[s].bagg_qty,'</span></div>\n         <div class="col-12 col-md-6"> <span><i class="fas fa-cog"></i> </span>\n             <span><b>Transmission Type: </b> ').concat(i[s].trsm_type,'</span>&nbsp;\n         </div>\n         <div class="col-sm-12 col-md-6">\n             <span><i class="fas fa-snowflake"></i>&nbsp;</span><span><b>Air\n                     Conditioning :</b> ').concat("true"==i[s].ac?"Yes":"No",'</span>\n         </div>\n         <div class="col-sm-12 col-md-6">\n             <span><i class="fas fa-car-side"></i>&nbsp;</span><span><b>Doors Count:\n                 </b>&nbsp;\n                 ').concat(i[s].door_cnt,'</span>\n         </div>\n         <div class="col-sm-12 col-md-6">\n             <span><i class="fas fa-gas-pump"></i>&nbsp;<b>Fuel Type:</b></span><span>\n             ').concat(i[s].fuel_type,"</span>\n         </div>\n         </div>\n        <footer>\n        <div >\n        Est. Amount: <b>").concat(i[s].curr_code," &nbsp; ").concat(i[s].est_amt,"</b>\n         </div>\n        <div >\n        Total. Price: <b>").concat(i[s].curr_code," &nbsp; ").concat(i[s].total_rate,"</b>\n        </div>\n        </footer>\n\n        </div>\n    </section>\n   ")},c=s;exports.default=c;
},{"../service-js/data-tidyr":"CcGo"}],"OYrr":[function(require,module,exports) {
"use strict";require("./app.scss");var e=r(require("../top-bar/top-bar")),t=r(require("../cars-list/cars-list")),n=r(require("../car-info/car_info"));function r(e){return e&&e.__esModule?e:{default:e}}var a=function(){var r=document.getElementById("filter-high"),a=document.getElementById("filter-low");fetch("http://www.cartrawler.com/ctabe/cars.json ").then(function(e){return e.json()}).then(function(i){var c=i[0].VehAvailRSCore;i.length?(document.getElementById("nav_head").innerHTML=(0,e.default)(c.VehRentalCore),document.getElementById("cars_list").innerHTML=(0,t.default)(c.VehVendorAvails,0),a.addEventListener("click",function(e){document.getElementById("cars_list").innerHTML=(0,t.default)(c.VehVendorAvails,0)}),r.addEventListener("click",function(e){document.getElementById("cars_list").innerHTML=(0,t.default)(c.VehVendorAvails,1)}),document.addEventListener("click",function(e){var t=localStorage.getItem("vehicle_id");t&&(localStorage.removeItem("vehicle_id"),document.getElementById("filter_btn").innerHTML=(0,n.default)(c.VehVendorAvails,t),document.getElementById("main_content").innerHTML=(0,n.default)(c.VehVendorAvails,t))},!1)):document.getElementById("main_content").innerHTML="No Data Found. Try again later"}).catch(function(e){return alert(e)})};a();
},{"./app.scss":"b5bZ","../top-bar/top-bar":"Oz2f","../cars-list/cars-list":"obf2","../car-info/car_info":"rduT"}]},{},["OYrr"], null)
//# sourceMappingURL=app.067c1f9f.js.map