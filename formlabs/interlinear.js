
var posit;
var posit2;
var valor;
var amostra;
var numval;
var labs = "Labs ";

function formatar2 (){
	//window.location.href = "exames.html";
	//result = document.documentElement.innerHTML
//result = "exames.html".innerHTML;
var raw = document.getElementById('lingua1').value;

//data
posit = raw.search("Atendimento: ");
labs += raw.substring(posit+13, posit+23) + ": ";

//TGO
posit = raw.search("TGO");
if(posit > 0){
	numval = raw.substring(posit+24, posit+28);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "TGO " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+3, raw.length);
}

//TGP
posit = raw.search("TGP");
if(posit > 0){
	numval = raw.substring(posit+34, posit+38);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "TGP " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+3, raw.length);
}

//fosfatase alcalina
posit = raw.search("FOSFATASE ALCALINA");
if(posit > 0){
	numval = raw.substring(posit+19, posit+24);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "FA " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+18, raw.length);
}

//sódio (sérico e urinário) [REVISAR URINÁRIO + 24h]
for (i=0; i<2; i++){
	posit = raw.search("SÓDIO");
	if(posit > 0){
		amostra = raw.substring(posit, posit+200);

		if(amostra.search("Urina") > 0){
			numval = raw.substring(posit+6, posit+10);
			numval = numval.replace(/[^0-9,]/g, "");
			labs += "Na urina " + numval + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+5, raw.length);
		}
		else{
			numval = raw.substring(posit+6, posit+10);
			numval = numval.replace(/[^0-9,]/g, "");
			labs += "Na " + numval + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+5, raw.length);
		}
	}
}

//potássio (sérico e urinário) [REVISAR URINÁRIO + 24h]
for (i=0; i<2; i++){
	posit = raw.search("POTÁSSIO");
	if(posit > 0){
		amostra = raw.substring(posit, posit+200);

		if(amostra.search("Urina") > 0){
			numval = raw.substring(posit+9, posit+14);
			numval = numval.replace(/[^0-9,]/g, "");
			labs += "K urina " + numval + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+8, raw.length);
		}
		else{
			numval = raw.substring(posit+9, posit+14);
			numval = numval.replace(/[^0-9,]/g, "");
			labs += "K " + numval + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+8, raw.length);
		}
	}
}

//proteína urinária [INCLUIR 24h]
posit = raw.search("PROTEÍNA URINÁRIA");
if(posit > 0){
	numval = raw.substring(posit+38, posit+43);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "prot. urina " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+17, raw.length);
}

//complemento C3
posit = raw.search("COMPLEMENTO - C3");
if(posit > 0){
	numval = raw.substring(posit+34, posit+39);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "C3 " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+16, raw.length);
}

//complemento C4
posit = raw.search("COMPLEMENTO -  C4");
if(posit > 0){
	numval = raw.substring(posit+35, posit+40);
	numval = numval.replace(/[^0-9,]/g, "");

	//se 15,0 então 15 etc.
	if( parseFloat(numval.replace(',', '.')) == parseFloat(parseInt(numval)) ){
		numval = parseInt(numval);
	}

	labs += "C4 " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+17, raw.length);
}

//anti-DNA
posit = raw.search("ANTI - DNA");
if(posit > 0){
	amostra = raw.substring(posit, posit+200);
	posit2 = amostra.search("Título");

	if(posit2 > 0){
		numval = amostra.substring(posit2+8, posit2+15);
		numval = numval.replace(/[^0-9:]/g, "");
	}
	else{
		numval = "NR";
	}

	labs += "anti-DNA " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+10, raw.length);
}

//PCR
posit = raw.search("PROTEINA C REATIVA");
if(posit > 0){
	numval = raw.substring(posit+44, posit+50);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "PCR " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+35, raw.length);
}

//creatinina (sérica e urinária) [INCLUIR 24h]
for (i=0; i<2; i++){
	posit = raw.search("CREATININA");
	if(posit > 0){
		amostra = raw.substring(posit, posit+200);

		if(amostra.search("Urina") > 0){
			labs += "creat urina " + raw.substring(posit+55, posit+59) + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+10, raw.length);
		}
		else{
			labs += "creat " + raw.substring(posit+28, posit+32) + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+10, raw.length);
		}
	}
}

//ureia (sérica e urinária) [REVISAR URINÁRIA]
for (i=0; i<2; i++){
	posit = raw.search("UREIA");
	if(posit > 0){
		amostra = raw.substring(posit, posit+200);

		if(amostra.search("Urina") > 0){
			labs += "ureia urinária " + raw.substring(posit+55, posit+59) + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+5, raw.length);
		}
		else{
			labs += "ureia " + raw.substring(posit+28, posit+30) + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+5, raw.length);
		}
	}
}

//VSG
posit = raw.search("VELOCIDADE DE SEDIMENTAÇÃO GLOBULAR");
if(posit > 0){
	numval = raw.substring(posit+60, posit+68);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "VSG " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+36, raw.length);
}

//HDL
posit = raw.search("HDL COLESTEROL");
if(posit > 0){
	numval = raw.substring(posit+43, posit+51);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "HDL " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+14, raw.length);
}

//Colesterol total
posit = raw.search("COLESTEROL");
if(posit > 0){
	numval = raw.substring(posit+36, posit+46);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "colesterol total " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+10, raw.length);
}

//Triglicerídeos
posit = raw.search("TRIGLICERÍDEOS");
if(posit > 0){
	numval = raw.substring(posit+30, posit+40);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "triglic " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+14, raw.length);
}

//HbA1c
posit = raw.search("HEMOGLOBINA GLICADA");
if(posit > 0){
	numval = raw.substring(posit+38, posit+48);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "HbA1c " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+14, raw.length);
}

//TSH
posit = raw.search("TIREOTROFINA - TSH Ultrassensível");
if(posit > 0){
	numval = raw.substring(posit+58, posit+73);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "TSH " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+33, raw.length);
}

//T4 livre
posit = raw.search("T4 LIVRE");
if(posit > 0){
	numval = raw.substring(posit+24, posit+35);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "T4 livre " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+8, raw.length);
}

//TP INR
posit = raw.search("RNI ");
if(posit > 0){
	numval = raw.substring(posit+10, posit+20);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "TP INR " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+3, raw.length);
}

//Hemograma
posit = raw.search("HEMOGRAMA");
if(posit > 0){
	amostra = raw.substring(posit, posit+2600);

	if(amostra.search("Hemoglobina") > 0){
		posit2 = amostra.search("Hemoglobina");
		numval = amostra.substring(posit2+13, posit2+22);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += "Hb " + numval;
	}

	if(amostra.search("Hematócrito") > 0){
		posit2 = amostra.search("Hematócrito");
		numval = amostra.substring(posit2+13, posit2+20);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += "; HT " + numval;
	}

	if(amostra.search("V.C.M.") > 0){
		posit2 = amostra.search("V.C.M.");
		numval = amostra.substring(posit2+25, posit2+29);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += "; VCM " + numval;
	}

	if(amostra.search("C.H.C.M") > 0){
		posit2 = amostra.search("C.H.C.M");
		numval = amostra.substring(posit2+42, posit2+52);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += "; CHCM " + numval;
	}

	if(amostra.search("R.D.W.") > 0){
		posit2 = amostra.search("R.D.W.");
		numval = amostra.substring(posit2+8, posit2+16);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += "; RDW " + numval;
	}

	if(amostra.search("Leucócitos") > 0){
		posit2 = amostra.search("Leucócitos");
		numval = amostra.substring(posit2+13, posit2+24);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += " / Leuco " + numval;
	}

	if(amostra.search("Linfócitos") > 0){
		posit2 = amostra.search("Linfócitos");
		numval = amostra.substring(posit2+24, posit2+33);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += "; L:" + numval;
	}

	if(amostra.search("Plaquetas") > 0){
		posit2 = amostra.search("Plaquetas");
		numval = amostra.substring(posit2+35, posit2+48);
		numval = numval.replace(/[^0-9.]/g, "");
		labs += " / plaq " + numval;
	}

	labs += " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+35, raw.length);
}

//EQU
posit = raw.search("EXAME QUALITATIVO DE URINA");
if(posit > 0){
	labs += "EQU! ";
}

//Urocultura
posit = raw.search("UROCULTURA");
if(posit > 0){
	labs += "Urocultura! ";
}

//FAN
posit = raw.search("PESQUISA DE ANTICORPOS CONTRA ANTÍGENOS CELULARES - FAN");
if(posit > 0){
	labs += "FAN! ";
}


	// prints result
	document.getElementById('resultado').value = labs;



	}
