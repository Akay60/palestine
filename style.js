let st = document.getElementById("st");
let st1 = document.getElementById("st1");
let r = document.getElementById('lo');
let v = [
	"hp",
    "cocacola",
    "pepsi",
    "mcDonald's",
    "starbucks",
    "HP",
    "nike",
    "adidas",
    "danone",
    "nestlé",
    "puma",	
    "estée Lauder",
    "loréal",
    "microsoft",
    "intel",
    "IBM",
    "Google",
    "amazon","whatsApp","instagram","facebook",
    "Meta",
    "apple",
    "motorola Solutions",
    "siemens",
    "general Electric (GE)",
    "caterpillar",
    "volvo",
    "hyundai",
    "samsung",
    "LG",
    "sony",
    "philips",
    "reebok",
    "under Armour",
    "Procter & Gamble (P&G)", // Includes brands like Gillette, Pampers, Head & Shoulders
    "unilever", // Includes brands like Dove, Lipton, Knorr
    "kimberly-Clark", // Includes brands like Kleenex, Huggies
    "johnson & Johnson",
    "colgate-Palmolive",
    "hewlett Packard Enterprise (HPE)",
    "dell Technologies",
    "cisco",
    "oracle",
    "SAP",
    "volkswagen",
    "mercedes-Benz (Daimler AG)",
    "BMW",
    "ford",
    "general Motors (GM)",
    "boeing",
    "lockheed Martin",
    "raytheon Technologies",
    "gorthrop Grumman",
    "elbit Systems"
];
let val ;
let fg;
function va(value){
	val = value;
	fg = v.includes(val);
}
function n1(){
		
	if(fg == true){
		st.style = 'display:none;'
		st1.style = 'display:block;'
	}
}


function n2(){
	
		st.style = 'display:block;'
		st1.style = 'display:none;'
}
















