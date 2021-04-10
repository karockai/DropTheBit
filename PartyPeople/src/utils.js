// import { tsvParse, csvParse } from 'd3-dsv';
// import { timeParse } from 'd3-time-format';

// function parseData(parse) {
//     return function (d) {
//         d.date = parse(d.date);
//         d.open = +d.open;
//         d.high = +d.high;
//         d.low = +d.low;
//         d.close = +d.close;
//         d.volume = +d.volume;

//         return d;
//     };
// }

// const parseDate = timeParse('%Y-%m-%d');
// // const parseDate = timeParse("%Y-%m-%d-%H-%M-%S");
// //@ data 가져오는 부분
// //@ socket을 어떻게 할당하면 좋을까.

// export function getData() {
//     const promiseMSFT = fetch(
//         'https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv'
//     )
//         .then((response) => response.text())
//         .then((data) => tsvParse(data, parseData(parseDate)));
//     return promiseMSFT;
// }
import { tsvParse, csvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";

function parseData(parse) {
	return function(d) {
		d.date = parse(d.date);
		d.open = +d.open;
		d.high = +d.high;
		d.low = +d.low;
		d.close = +d.close;
		d.volume = +d.volume;

		return d;
	};
}


export function getData() {
	const promiseBarData = fetch("https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/barData.json")
		.then(response => response.json())
		.then(barData => barData.map(({ x, y }) => ({ x: y, y: x })));

    return promiseBarData;
    
}