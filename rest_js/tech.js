window.addEventListener('load',()=>{
	const accord=document.querySelector('#accord');
	const body=document.querySelector('body');
	const cont=document.querySelector('.cont');
	var slideup=document.querySelector('#slideup');

	window.addEventListener('scroll',()=>{

		if(window.pageYOffset>30){
			slideup.style.display='block';
		}
		else{
			slideup.style.display='none';
		}
	})
	slideup.addEventListener('click',()=>{
		window.scrollTo(0,0);
		slideup.style.display='none';

	})

	function NodeCreation1(item){
		let boxing=document.createElement('div');

	 	boxing.classList.add('main-box');
	 	
	 	boxing.innerHTML=
	 	`<i class="fas fa-arrow-circle-left" id="back-button"></i>
	 	</i><img class='image' src=${item['urlToImage']}>
	 	<h2 class='head'>${item['title']}</h2>
	 	<p class='des'>${item['description']} </p>
	 	<a href=${item['url']} target='_blank' class='read'>Read more here</a>
	 	<p class="source">Original source:${item['source'].name}</p>`;

	 	accord.appendChild(boxing);
	}

	

	function interactivity(slideup){
		accord.addEventListener('click',()=>{

	if(event.target.className==='main-box'){
		var yoff=window.pageYOffset;
		window.scrollTo(0,0);
		let main_div_wrapper=document.createElement('div');
		main_div_wrapper.classList.add('main-div-wrapper');
		let div_wrapper=document.createElement('div');
		div_wrapper.classList.add('div-wrapper');
		div_wrapper.innerHTML=event.target.innerHTML;
		
		main_div_wrapper.appendChild(div_wrapper);
		body.appendChild(main_div_wrapper);
		body.removeChild(accord);
		body.removeChild(cont);

		div_wrapper.children[0].id='div-wrapper-back-button';
		div_wrapper.children[1].classList.add('div-wrapper-img');
		div_wrapper.children[2].classList.add('div-wrapper-head');
		div_wrapper.children[3].classList.add('div-wrapper-des');
		div_wrapper.children[4].classList.add('div-wrapper-read');
		div_wrapper.children[5].classList.add('div-wrapper-source');
		div_wrapper.children[0].addEventListener('click',()=>{
			body.appendChild(cont);
			body.appendChild(accord);
			body.removeChild(main_div_wrapper);
			window.scrollTo(0,yoff);
		})	

	}
	else if((event.target.className==='image')||(event.target.className==='head')){
		var yoff=window.pageYOffset;
		window.scrollTo(0,0);
		let main_div_wrapper=document.createElement('div');
		main_div_wrapper.classList.add('main-div-wrapper');
		let div_wrapper=document.createElement('div');
		div_wrapper.classList.add('div-wrapper');
		div_wrapper.innerHTML=event.target.parentNode.innerHTML;

		main_div_wrapper.appendChild(div_wrapper);
		body.appendChild(main_div_wrapper);
		body.removeChild(accord);
		body.removeChild(cont);

		div_wrapper.children[0].id='div-wrapper-back-button';
		div_wrapper.children[1].classList.add('div-wrapper-img');
		div_wrapper.children[2].classList.add('div-wrapper-head');
		div_wrapper.children[3].classList.add('div-wrapper-des');
		div_wrapper.children[4].classList.add('div-wrapper-read');
		div_wrapper.children[5].classList.add('div-wrapper-source');
		div_wrapper.children[0].addEventListener('click',()=>{
			body.appendChild(cont);
			body.appendChild(accord);
			body.removeChild(main_div_wrapper);
			window.scrollTo(0,yoff);
		})
		

		
	}
})
	}

	

	function createXhrRequest(){
		const xhr = new XMLHttpRequest();

	    let url="https://saurav.tech/NewsAPI/top-headlines/category/tech/in.json";
	
        xhr.open("GET",url,true);

        xhr.onload=function(){

	    let main=JSON.parse(this.responseText);
	    let array=main['articles'];
	    let total=array.length;
	    if(array.length%4==0){
	    	total=array.length-1;

	    }
	    else{
	    	total=Math.floor(array.length/4)*4-1;
	    }
	    array.forEach((item,index)=>{

	 	
	 		if(index<=total){
	 			NodeCreation1(item);
	 		}
	 	
	 })
	
	
}
interactivity(slideup);
xhr.send();
	}

	createXhrRequest();

})

