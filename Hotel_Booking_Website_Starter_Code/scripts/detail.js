let urlParams=new URLSearchParams(window.location.search);const API_URL="https://travel-advisor.p.rapidapi.com/",travelAdvisorHost="travel-advisor.p.rapidapi.com",travelAdvisorKey="1a90fa908dmsh68c2ea5a219f7bap1540d6jsnbe88f669414e",PRICE_PER_ROOM=1e3;let updatePrice=()=>{let e=document.getElementById("adult"),t=document.getElementById("price"),a=document.getElementById("toDate"),d=document.getElementById("fromDate"),s=new Date(a.value),l=new Date(d.value);a.min=d.value;let n=(s-l)/864e5;e.value&&a.value&&d.value?t.value="Rs. "+1e3*parseInt(e.value)*n:t.value="Rs.0"},fetchHotelDetailAPI=()=>{let e=new XMLHttpRequest;e.addEventListener("readystatechange",function(){if(this.readyState===this.DONE){let e=JSON.parse(this.responseText).data[0];document.getElementById("hotel-name").innerText=e.name;let t=e.amenities,a=0;for(;a<Math.min(t.length,10);a++){let e=document.createElement("li");e.innerText=t[a].name,document.getElementById("amenities").appendChild(e)}let d=document.createElement("h6");d.innerHTML=e.description,document.getElementById("description").appendChild(d);let s=parseInt(e.rating);for(a=1;a<=s;a++)document.getElementById(a).classList.add("checked")}}),e.open("GET",API_URL+"hotels/get-details?lang=en_US&location_id="+urlParams.get("id")),e.setRequestHeader("x-rapidapi-host",travelAdvisorHost),e.setRequestHeader("x-rapidapi-key",travelAdvisorKey),e.send()},fetchHotelPhotosAPI=()=>{let e=new XMLHttpRequest;e.addEventListener("readystatechange",function(){if(this.readyState===this.DONE){let e=document.getElementById("carousel-parent"),t=JSON.parse(this.responseText).data,a=Math.min(t.length,5),d=0;for(;d<a;d++){let a=document.createElement("div");a.classList.add("carousel-item"),0==d&&a.classList.add("active");let s=document.createElement("img");s.setAttribute("class","carousel-image"),s.classList.add("d-block"),s.classList.add("w-100"),s.src=t[d].images.large.url,a.appendChild(s),e.appendChild(a)}disableLoader()}}),e.open("GET",API_URL+"photos/list?lang=en_US&location_id="+urlParams.get("id")),e.setRequestHeader("x-rapidapi-host",travelAdvisorHost),e.setRequestHeader("x-rapidapi-key",travelAdvisorKey),e.send()},idElement=document.getElementById("id");idElement.value=urlParams.get("id"),fetchHotelDetailAPI(),fetchHotelPhotosAPI();