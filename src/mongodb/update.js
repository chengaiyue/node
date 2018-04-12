var db = connect('company');
db.workmate.update({name:'MinJie'},{$pop:{'interest':1}});
print('success');