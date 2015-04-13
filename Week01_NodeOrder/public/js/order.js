/**********************************************************
storeNumber  (98053 , 98007, 98077, 98055,  98011, 98046)
 salesPersonID  (1 through 24)
 itemNumber (123456, 123654, 321456, 321654, 654123,
 654321, 543216, 354126, 621453, 623451)
 timePurch (the real time)
 pricePaid  (between $5 and $15)
 *********************************************************/

var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    assert = require('assert');

var mongoclient = new MongoClient(new Server("localhost", 27017), {native_parser :true});

var storeArray = [98053 , 98007, 98077, 98055,  98011, 98046];
var itemArray = [123456, 123654, 321456, 321654, 654123, 654321, 543216, 354126, 621453, 623451];

function rand(start, end){
    return Math.round(Math.random()*end) + start;
}

var newOrder = function(){
    return {
        storeNumber : storeArray[rand(0, storeArray.length)],
        salesPersonID : rand(1,24),
        itemNumber : itemArray[rand(0, itemArray.length)],
        timePunch : time,
        pricePaid : rand(5,15)
    }
};

console.log(newOrder());