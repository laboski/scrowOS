const converter = {


	convert: function(psthr) {
		if (typeof(psthr) !== 'string') {
			throw new TypeError('Invalid time');
		}
		// military time
		let mtime = '00:00';

		let gmt = '';
		// is it 12 am
		if (psthr[5] == 'A' && psthr.substring(0, 2) == '12') {
			// convert to gmt using miltary time
			gmt = parseInt(mtime, 10) + 7;

			let min = psthr.substring(2,5); 

			gmt = gmt.toString() + min;
		}

		if (psthr[5] == 'A' && parseInt(psthr.substring(0, 2), 10) < 12) {
			mtime = psthr.substring(0,2);

			gmt = parseInt(mtime, 10) + 7;

			let min = psthr.substring(2,5); 

			gmt = gmt.toString() + min;
		}

		// is it 12 pm
		if (psthr[5] == 'P' && psthr.substring(0, 2) == '12') {
			// convert to gmt using miltary time
			gmt = parseInt(mtime, 10) + 7;

			let min = psthr.substring(2,5); 

			gmt = gmt.toString() + min;
		}

		if (psthr[5] == 'P' && parseInt(psthr.substring(0, 2), 10) < 12) {
			mtime = parseInt(psthr.substring(0,2)) + 12;

			gmt = mtime + 7;

			let min = psthr.substring(2,5); 

			if (gmt >= 24) {
				let g = gmt - 24;
				gmt = g.toString() + min;
			}else{
				gmt = gmt.toString() + min;
			}
		}

		return gmt;

	}
}


