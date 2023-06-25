var CONST_ITEM_MAX = 15;
$(function(){
	for(var i = 1; i <= CONST_ITEM_MAX; i++){
		CreateInputForm(i);
	}

	$("#mainform").submit(function(){
		$("#result").html(GetItemString() + GetMoneyString());
		return false;
	});

	$("#searchform").submit(function(){
		ExecuteSearch();
		return false;
	});

	$("#insertlist").click(function(){
		var id = $("#search_result").val();
		if(id) AddToList(id);
	});
	$("#converter").submit(function(){
		var m = parseInt($("#input_cnv").val(), parseInt($("[name=intype]:checked").val(),10) );
		if(isNaN(m)){ $("#output_cnv").val("error"); }
		$("#output_cnv").val(ConvertByteToString(m,4));
		return false;
	});
});
function CreateInputForm(no){
	$("#itemlist").append('<label for="item'+no+'">道具･アイテム'+no+'</label><select id="item'+no+'"></select><br>');
	$("#item"+no).append('<option value="0">なし</option>');
	for(var i = 0; i < itemset.length; i++){
		var gname = 'list' + no + 'group' + i;
		$("#item"+no).append('<optgroup label="' + itemset[i].groupname + '" id="' + gname + '"></optgroup>');
		for(var j = 0; j < itemset[i].items.length; j++){
			$("#"+gname).append('<option value="' + itemset[i].items[j].id + '">' + itemset[i].items[j].name + '</option>');
		}
       console.log('生成完了');
	}
}
function GetMoneyString(){
	var m = parseInt($("#money").val(),10);
	if(isNaN(m)){ return "(所持金の変換に失敗)"; }
	return ConvertByteToString(m,4);
    console.log('所持金の変換に失敗');
}

function GetItemString(){
	var temp = "";
	for(var i = 1; i <= CONST_ITEM_MAX; i++){
		var m = parseInt($("#item"+i).val(),10);
		if(isNaN(m)){ temp += "道具"+i+"の変換に失敗"; }
		else{temp += ConvertByteToString(m,2);}
        console.log('道具'+i+'の変換に失敗');
	}
	return temp;
}

function ConvertByteToString(input,size){
	var temp = "";
	for(var i = 0; i < size; i++){
temp = temp + charsSet[ (input >> (i * 8)) & 0xFF ];
	}
	return temp;
}

function SearchNextUnselected(){
	for(var i = 1; i <= CONST_ITEM_MAX; i++){
		if($("#item"+i).val() == 0){
			return i;
		}
	}
	return -1;
}

function ExecuteSearch(){
	$("#search_result").html("");
	var needle = $("#search").val();
	for(var i = 0; i < itemset.length; i++){
		for(var j = 0; j < itemset[i].items.length; j++){
			if(itemset[i].items[j].name.indexOf(needle) != -1){
				$("#search_result").append( '<option value="' + itemset[i].items[j].id + '" id="sr'+ itemset[i].items[j].id +'">' + itemset[i].items[j].name + '</option>');
				$("#sr" + itemset[i].items[j].id).dblclick( (function(id){ return function(){ AddToList(id); } })(itemset[i].items[j].id));
			}
		}
	}
	return false;
}

function AddToList(id){
	var nextspace = SearchNextUnselected();
	if(nextspace != -1){
		$("#item" + nextspace).val(id);
	}
}
// majide
