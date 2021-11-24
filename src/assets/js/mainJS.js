var product;

function createTable(type){
		
		var Product_container=document.getElementsByClassName('Product_container');
		var Row=document.getElementsByClassName('productRow');
		var product =document.getElementsByClassName('product');
		var productName=document.getElementsByClassName('productName');
		var price=document.getElementsByClassName('productPrice');
		var img=document.getElementsByClassName('productIMG');
		var info=document.getElementsByClassName('productInfo');
		var button = document.getElementsByClassName('ViewBtn');
		for(let x=0;x<product.length;x++){
			productName[x].innerHTML=type[x].productName;
			price[x].innerHTML=type[x].productPrice+"$";
			img[x].src="assets/images/"+type[x].productImg;
			button[x].addEventListener('click',function setProduct(){
				localStorage.setItem('theProduct',JSON.stringify(type[x]));
				createProductPage(type[x]);
			});
	} 
}

 function createProductPage(myProduct){
	 var Img1=document.getElementById('img1');
	 var Img2=document.getElementById('img2');
	 var Img3=document.getElementById('img3');
	 var productTitle=document.getElementById('Title');
	 var Info=document.getElementsByClassName('info');
	 Img1.src="assets/images/"+myProduct.productImg;
	 Img2.src="assets/images/"+myProduct.productImg2;
	 Img3.src="assets/images/"+myProduct.productImg;
	 productTitle.innerHTML=myProduct.productName;
	 Info[0].innerHTML=myProduct.productSummery;
	 Info[1].innerHTML=myProduct.productInfo;
	 Info[2].innerHTML=myProduct.productInfo2;
	 
 }
		


	