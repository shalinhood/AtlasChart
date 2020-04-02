function addItem(items, description, helpIndex, frequencyIndex) {
	let newItems = {...items};
	newItems[helpIndex][frequencyIndex].push(description);
	return newItems;
}

function deleteItem(items, descriptionIndex, helpIndex, frequencyIndex) {
	let newItems = {...items};
	newItems[helpIndex][frequencyIndex].splice(descriptionIndex, 1);
	return newItems;
}

function editItem(items, description, descriptionIndex, helpIndex, frequencyIndex) {
	let newItems = {...items};
	newItems[helpIndex][frequencyIndex][descriptionIndex] = description;
	return newItems;
}

function exportToJson(items) {
	let filename = "Care-Chart-data.json";
	let contentType = "application/json;charset=utf-8;";
	var a = document.createElement('a');
	a.download = filename;
	a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(items));
	a.target = '_blank';
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

export {addItem, deleteItem, editItem, exportToJson};