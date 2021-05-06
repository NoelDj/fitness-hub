 fetch("https://spreadsheets.google.com/feeds/list/1xqdpfbLrugkU7uSUrQmSQ60uJkqsARoVZpEFN6JNBoo/od6/public/values?alt=json")
     .then(res => res.json())
      .then(showCities)

    function showCities(data) {
  console.log(data)
      data.feed.entry.forEach(ex => {
        if (ex.gsx$exercise.$t == "Skipping") {
                console.log(ex)
          const template = document.querySelector("template").content;
          const copy = template.cloneNode(true);
          copy.querySelector("h1").textContent = ex.gsx$exercise.$t;
            copy.querySelector(".diff").textContent = ex.gsx$difficulty.$t;
              copy.querySelector(".loc").textContent = ex.gsx$location.$t;
              copy.querySelector(".bod").textContent = ex.gsx$body.$t;
              copy.querySelector(".equi").textContent = ex.gsx$equipment.$t;
          document.querySelector(".sub-page").appendChild(copy);
        }
      })

    }
