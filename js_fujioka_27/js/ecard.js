function ecard(){
    var list = document.getElementsByName("cardlist");
    var mine = document.getElementById("mine");
    var yours = document.getElementById("yours");
    var result = document.getElementById("result");
    var mine_img = document.getElementById("mine_img");
    var yours_img = document.getElementById("yours_img");
    for (i=0;i<list.length;i++){
      if(list[i].checked){
        var m = list[i];
        break;
      }
    }
    var array = ["市民","皇帝"];
    var y = array[Math.floor(Math.random() * array.length)];
  
    if (y == m.value){
      var message = "引き分けです"
    } else if(m.value == "奴隷" && y == "皇帝"){
      var message = "ヘビでいてくれて…ありがとうっ！<br>あなたの勝ち"
    } else{
      var message = "どうしてだよぉおおおぉぉぉ！<br>あなたの負け"
    }
    mine.innerHTML = "あなたは、" + m.value + "です。";
    yours.innerHTML = "利根川は、" + y + "です。";
    result.innerHTML = message;
    if (m.value == "市民"){
      mine_img.innerHTML = '<img src="/img/citizen.jpeg" width="200" height="300" />';
    } else if (m.value == "皇帝"){
      mine_img.innerHTML = '<img src="/img/emperor.jpeg" width="200" height="300" />';
    } else {
      mine_img.innerHTML = '<img src="/img/slave.jpeg" width="200" height="300" />';
    }
    if (y == "市民"){
      yours_img.innerHTML = '<img src="/img/citizen.jpeg" width="200" height="300" />';
    } else {
      yours_img.innerHTML = '<img src="./img/emperor.jpeg" width="200" height="300" />';
    }
  }