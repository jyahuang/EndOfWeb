const {body} = require('express-validator');

module.exports=body('detail_id')
			.isLength({min:11,max:11}).withMessage("detail_id長度錯誤，格式應為\'column_yymm\'")
			.matches(/^(column_[0-9]{2}(0[1-9]|1[0-2]))/).withMessage("detail_id輸入格式錯誤，格式應為\'column_yymm\'")