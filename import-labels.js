/**
 * Import script for Github labels
 * 
 * Please change the lists of labels.
 * 
 * Exmaple:
 *   labels = 
 *     [
 *       {
 *         'name' : 'label-1',
 *         'color' : '#123456'
 *       },
 *       {
 *         'name' : 'label-2',
 *         'color' : '#123456'
 *       }
 *       ,,,
 *     ]
 */
// TODO: impelemts to update labels

var btnNew, btnCreate;
[].slice.call(document.querySelectorAll('.btn-primary')).forEach(function(element) {
  var btn = element.textContent.trim();
  if (btn == 'New label') {
    btnNew = element;
  } else if (btn == 'Create label') {
    btnCreate = element;
  }
});

var labels = []; 
[].slice.call(labels).forEach(function(element){
  var name  = element.name;
  var color = element.color;
  btnNew.click();
  document.getElementById('label-').value=name;
  document.getElementById('edit-label-color-new').value=color;
  btnCreate.click();
});
