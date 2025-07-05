let st = document.getElementById("st");
let st1 = document.getElementById("st1");
let r = document.getElementById('lo');
let v = [
	"hp",
    "Cocacola",
    "Pepsi",
    "McDonald's",
    "Starbucks",
    "HP",
    "Nike",
    "Adidas",
    "Danone",
    "Nestlé",
    "Puma",	
    "Estée Lauder",
    "L'Oréal",
    "Microsoft",
    "Intel",
    "IBM",
    "Google",
    "Amazon","WhatsApp","Instagram","Facebook",
    "Meta",
    "Apple",
    "Motorola Solutions",
    "Siemens",
    "General Electric (GE)",
    "Caterpillar",
    "Volvo",
    "Hyundai",
    "Samsung",
    "LG",
    "Sony",
    "Philips",
    "Reebok",
    "Under Armour",
    "Procter & Gamble (P&G)", // Includes brands like Gillette, Pampers, Head & Shoulders
    "Unilever", // Includes brands like Dove, Lipton, Knorr
    "Kimberly-Clark", // Includes brands like Kleenex, Huggies
    "Johnson & Johnson",
    "Colgate-Palmolive",
    "Hewlett Packard Enterprise (HPE)",
    "Dell Technologies",
    "Cisco",
    "Oracle",
    "SAP",
    "Volkswagen",
    "Mercedes-Benz (Daimler AG)",
    "BMW",
    "Ford",
    "General Motors (GM)",
    "Boeing",
    "Lockheed Martin",
    "Raytheon Technologies",
    "Northrop Grumman",
    "Elbit Systems"
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
















