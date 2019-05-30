const db = require ('../index.js');

const newData = [{
    _id: 1,
    pictures: ['https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409211_62.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_03.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_08.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_1.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_11.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_2.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_3.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_4.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_43.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_56.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_64.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_69.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_7.jpeg']
}]

let insertData = () => {
    db.insertMany(
        newData
    );
};

insertData();