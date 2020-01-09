export default function dcopy(x) {
	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		tmp = {};
		for (k in x) {
			tmp[k] = dcopy(x[k]);
		}
		return tmp;
	}

	if (str === '[object Array]') {
		for (tmp=[],k=0; k < x.length; k++) {
			tmp[k] = dcopy(tmp[k]);
		}
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	return x;
}
