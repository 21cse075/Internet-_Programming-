function viewMaterials(unit, dropdownId) {
    var selectedTopic=document.getElementById(dropdownId).value;
    var documentFileName=unit+'_'+selectedTopic;
    var documentContainer=document.getElementById(unit+'PDF');
    documentContainer.innerHTML='<iframe src="'+documentFileName+'.pdf" width="100%" height="600px"></iframe>';
}
