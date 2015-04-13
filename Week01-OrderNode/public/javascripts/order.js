/**********************************************************
 storeNumber  (98053 , 98007, 98077, 98055,  98011, 98046)
 salesPersonID  (1 through 24)
 itemNumber (123456, 123654, 321456, 321654, 654123,
 654321, 543216, 354126, 621453, 623451)
 timePunch (the real time)
 pricePaid  (between $5 and $15)
 *********************************************************/

var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var http = require('http');

var Orders = new Schema({
    storeNumber    : String,
    salesPersonID    : String,
    itemNumber : String,
    timePunch : Date,
    pricePaid : String
});

mongoose.model( 'Orders', Orders );
mongoose.connect( 'mongodb://localhost/orders' );


var storeArray = [98053 , 98007, 98077, 98055,  98011, 98046];
var itemArray = [123456, 123654, 321456, 321654, 654123, 654321, 543216, 354126, 621453, 623451];

function rand(start, end){
    return Math.floor(Math.random() * end) + start;
}

var newOrder = function(){
    return {
        storeNumber : storeArray[rand(0, storeArray.length)],
        salesPersonID : rand(1,24),
        itemNumber : itemArray[rand(0, itemArray.length)],
        itemNumber : itemArray[rand(0, itemArray.length)],
        timePunch : new Date(),
        pricePaid : rand(5,15)
    }
};

console.log(newOrder());

http.request({
    path: '/orders',

})
//$.ajax({
//    type: 'POST',
//    data: newOrder(),
//    url: '/orders',
//    dataType: 'JSON'
//});
