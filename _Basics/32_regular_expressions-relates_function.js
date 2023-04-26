console.log('regular expressions');

console.log('basic sfunctions');

function regularexpressions() {
	// matches nikalne k liye

	let regul = /Einstein/g; //this is a regular expressios leteral , g = global
	// let regul = /einstein/i; //this is a regular expressios leteral , g = case insensitive

	console.log(regul);
	console.log(regul.source);

	let str = `Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten); 14 March
1879 – 18 April 1955) was a German-born theoretical physicist,[5] widely acknowledged to be one of the greatest
physicists of all time. Einstein is best known for developing the theory of relativity, but he also made important
contributions to the development of the theory of qua einstein ntum mechanics. Relativity and quantum mechanics are
together einstein the two pillars of modern physics.[3][6] His mass–energy equivalence formula E = mc2, which arises
from relativity theory, has been dubbed "the world's most famous equation".[7] His.`;

	let result = regul.exec(str);
	console.log(result);

	// ------------------------------------------------------------ test ------------------------

	let result2 = regul.test(str); //return true or false
	console.log(result2);

	// ------------------------------------------------------------ match ------------------------

	let result3 = str.match(regul); //return array of results or null
	console.log(result3);

	// ------------------------------------------------------------ search ------------------------

	let result4 = str.search(regul); //return first match or -1
	console.log(result4);

	// ------------------------------------------------------------ replac ------------------------

	let result6 = str.replace(regul, 'newton'); //return new string all the replacment , used g for global and i or
	insensitive;
	console.log(result6);
}

// _________________________________________ metacharcecter __________________________________

console.log('metacharacterhi');
function metacharacter() {
	let metC = /^f/; //starts with that elems
	let strc = `Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten); 14 March
1879 – 18 April 1955) was a German-born theoretical physicist,[5] widely acknowledged to be one of the greatest
physicists of all time. Einstein is best known for developing the theory of relativity, but he also made important
contributions to the development of the theory of qua einstein ntum mechanics. Relativity and quantum mechanics are
together einstein the two pillars of modern physics.[3][6] His mass–energy equivalence formula E = mc2, which arises
from relativity theory, has been dubbed "the world's most famous equation".[7] His.`;

	let result = metC.exec(strc);
	console.log(result);

	// ------------------------------------------------------------ replac ------------------------

	metC = /ert$/; //ends with that elems

	strc = `Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten); 14 March 1879
– 18 April 1955) was a German-born theoretical physicist,[5] widely acknowledged to be one of the greatest physicists of
all time. Einstein is best known for developing the theory of relativity, but he also made important contributions to
the development of the theory of qua einstein ntum mechanics. Relativity and quantum mechanics are together einstein the
two pillars of modern physics.[3][6] His mass–energy equivalence formula E = mc2, which arises from relativity theory,
has been dubbed "the world's most famous equation".[7] His.`;

	result = metC.exec(strc);
	console.log(result);

	// ------------------------------------------------------------ replac ------------------------

	metC = /al.ert/; //matces any one chrac

	strc = `Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten); 14 March 1879
– 18 April 1955) was a German-born theoretical physicist,[5] widely acknowledged to be one of the greatest physicists of
all time. Einstein is best known for developing the theory of relativity, but he also made important contributions to
the development of the theory of qua einstein ntum mechanics. Relativity and quantum mechanics are together einstein the
two pillars of modern physics.[3][6] His mass–energy equivalence formula E = mc2, which arises from relativity theory,
has been dubbed "the world's most famous equation".[7] His.`;

	result = metC.exec(strc);
	console.log(result);

	// ------------------------------------------------------------ replac ------------------------

	metC = /a*rt/; //matces any 0 or more chrac

	strc = `Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten); 14 March 1879
– 18 April 1955) was a German-born theoretical physicist,[5] widely acknowledged to be one of the greatest physicists of
all time. Einstein is best known for developing the theory of relativity, but he also made important contributions to
the development of the theory of qua einstein ntum mechanics. Relativity and quantum mechanics are together einstein the
two pillars of modern physics.[3][6] His mass–energy equivalence formula E = mc2, which arises from relativity theory,
has been dubbed "the world's most famous equation".[7] His.`;

	result = metC.exec(strc);
	console.log(result);

	// ------------------------------------------------------------ replac ------------------------

	metC = /all?bertr?/; //optional chrac

	strc = `Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten); 14 March 1879
– 18 April 1955) was a German-born theoretical physicist,[5] widely acknowledged to be one of the greatest physicists of
all time. Einstein is best known for developing the theory of relativity, but he also made important contributions to
the development of the theory of qua einstein ntum mechanics. Relativity and quantum mechanics are together einstein the
two pillars of modern physics.[3][6] His mass–energy equivalence formula E = mc2, which arises from relativity theory,
has been dubbed "the world's most famous equation".[7] His.`;

	result = metC.exec(strc);
	console.log(result);

	// ------------------------------------------------------------ replac ------------------------

	metC = /h\*arry/; //optional chrac
}

// _________________________________________ chracter sets __________________________________

function chracterSet() {}

// CHARCTER SETS []

let CC = /E[a-z]nstein/gi; //can be any chra from a to z
CC = /E[^abcdeefghijk]nstein/gi; //can NOT be a to k
CC = /E[a-zA-Z]nstein/gi; //can be a to z and A to Z
CC = /E[a-zA-Z]nstei[0-9]/gi; //can be 0 to 9

// QANTIFIRES

let qq = /dub{2}ed/; // b can occur exactly 2 times

qq = /dub{0,2}ed/g; // b can occur exactly 2 or 0 (0 or 1 or 2)times

// GRUOPINGS

let gg = /(ein){2}/gi; // (ein) occur exactly 2 times - ein_ein_stein

gg = /(ein){2}([0-9]s){2}/gi; // ein , 2s bar 1s jaise do bar

let strc = `Albert Einein1s2stein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten); 14
March 1879 – 18 April 1955) was a German-born theoretical physicist,[5] widely acknowledged to be one of the greatest
physicists of all time. Einstein is best known for developing the theory of relativity, but he also made important
contributions to the development of the theory of qua einstein ntum mechanics. Relativity and quantum mechanics are
together einstein the two pillars of modern physics.[3][6] His mass–energy equivalence formula E = mc2, which arises
from relativity theory, has been dubbed dued "the world's most famous equation".[7] His.`;

let result3 = strc.match(gg); //return array of results or null
console.log(result3);
