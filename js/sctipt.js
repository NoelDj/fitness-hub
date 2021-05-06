const link = "https://spreadsheets.google.com/feeds/list/1xqdpfbLrugkU7uSUrQmSQ60uJkqsARoVZpEFN6JNBoo/od6/public/values?alt=json";

window.addEventListener("DOMContentLoaded", getData);
const button = document.querySelector("#one");
var text = document.querySelector("#text");

function getData() {
    fetch(link)
        .then(res => res.json())
        .then(handleData);
}

function handleData(data) {
    const myData = data.feed.entry;
    /*console.log("myData - console");
    console.log(myData);*/
    myData.forEach(showData);
}

function showData(singleRowData) {
    /*
    console.log('singleRowData - console');
    console.log(singleRowData.gsx$id.$t);*/

    const template = document.querySelector('template').content;
    const clone = template.cloneNode(true);
    const article = document.querySelector("article")

    const h3 = clone.querySelector('.name');
    h3.textContent = singleRowData.gsx$exercise.$t;

    const cat = clone.querySelector('.cate');
    cat.textContent = singleRowData.gsx$category.$t;

     const dec = clone.querySelector('.shortdescription');
    dec.textContent = singleRowData.gsx$a.$t;

    clone.querySelector('.imageExe').src= singleRowData.gsx$picture.$t;



    const shortDescription = clone.querySelector('.shortdescription');

    document.querySelector('.exercise_list').appendChild(clone);
}
/*
 button.onclick = function () {
        if (!singleRowData.gsx$category) {
            clone.querySelector("h4").remove();
        }
    }
 */
 const article = document.querySelector(".card");


//linking to subpage


    function showCities(subData) {
      console.log(subData)
      data.feed.entry.forEach(city => {
        if (city.gsx$exercise.$t == cityFromUrl) {
          const template = document.querySelector("template").content;
          const copy = template.cloneNode(true);
          copy.querySelector(".read-more").href = `exercise.html?city=${city.gsx$exercise.$t}`
          document.querySelector(".exercise_list").appendChild(copy)
        }
      })

    }


