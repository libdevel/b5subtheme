function searchPrimoEv() {
  document.getElementById("primoQueryEv").value =
    "any,contains," + 
	document.getElementById("primoQueryEvTemp").value.replace(/[,]/g, " ");
  document.forms["searchFormEv"].submit();
}

function searchPrimoArt() {
  document.getElementById("primoQueryArt").value =
    "any,contains," +
    document.getElementById("primoQueryArtTemp").value.replace(/[,]/g, " ");
  document.forms["searchFormArt"].submit();
}

function searchPrimoCat() {
  document.getElementById("primoQueryCat").value =
    "any,contains," +
    document.getElementById("primoQueryCatTemp").value.replace(/[,]/g, " ");
  document.forms["searchFormCat"].submit();
}

function searchPrimoCR() {
  document.getElementById("primoQueryCR").value =
    document.getElementById("primoSelectCR").value +
    document.getElementById("primoQueryCRTemp").value.replace(/[,]/g, " ");
  document.forms["searchFormCR"].submit();
}

function searchPrimoJR() {
  document.getElementById("primoQueryJR").value =
    "any,contains," +
    document.getElementById("primoQueryJRTemp").value.replace(/[,]/g, " ");
  document.forms["searchFormJR"].submit();
}

function searchPrimoILL() {
  document.getElementById("primoQueryILL").value =
    "any,contains," +
    document.getElementById("primoQueryILLTemp").value.replace(/[,]/g, " ");
  document.forms["searchFormILL"].submit();
}
