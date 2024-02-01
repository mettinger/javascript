
function markToggle() {
    var status = document.getElementById("mark-status").innerHTML;
    if (status == 'awake'){
        document.getElementById("mark-status").innerHTML = "asleep";
    }
    else {
        document.getElementById("mark-status").innerHTML = "awake";
    }
  }

  function cathyToggle() {
    var status = document.getElementById("cathy-status").innerHTML;
    if (status == 'awake'){
        document.getElementById("cathy-status").innerHTML = "asleep";
    }
    else {
        document.getElementById("cathy-status").innerHTML = "awake";
    }
  }