
let xmlDoc;
let request;
let docname = "https://itunes.apple.com/us/rss/customerreviews/page=1/id=360593530/sortby=mostrecent/xml?urlDesc=/customerreviews/page=1/id=360593530/sortby=mostrecent/xml";
let doctype= "unknown";

function loadXML() {
  try {
    request = new window.XMLHttpRequest();
    request.open("GET", docname, true);
    request.send(null);
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        showFeed(this);

      };
    }
  } catch (err) {
    alert("Error!" + err.message);
  }
}

function showFeed() {
  xmlDoc = request.responseXML.documentElement;
  let maxitems = 30;
  let feedBody = "";
  let titlelist = xmlDoc.getElementsByTagName("name");
  let datelist = xmlDoc.getElementsByTagName("updated")
  let contentlist = xmlDoc.getElementsByTagName("content")
  const browsername = navigator.appName;

  for (i = 1; i < maxitems; i++) {
    if (titlelist[i].firstChild !== "undefined") {
      feedBody = feedBody + `<div>Reviewer:  ${titlelist[i].firstChild.nodeValue} <br/> Date: ${datelist[i].firstChild.nodeValue}</div>` + `<div>${contentlist[i].firstChild.nodeValue}</div>` + "<br />"
    }
  }

  document.getElementById("reviews").innerHTML = feedBody;
}

loadXML();
