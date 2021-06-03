//Filtro de itens do portfolio

const filterContainer=document.querySelector(".portfolio-filtro"),
    filterBTns=filterContainer.children,
    totalFilterBtn=filterBTns.length,
    portfolioItems=document.querySelectorAll(".portfolio-item"),
    totalPortfolioItem=portfolioItems.length; 

    for (let i=0; i<totalFilterBtn; i++){
        filterBTns[i].addEventListener("click", function(){
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");
            
            const filterValue=this.getAttribute("data-filter"); 
            for(let k=0; k<totalPortfolioItem; k++){
                if(filterValue === portfolioItems[k].getAttribute("data-category")){
                    portfolioItems[k].classList.remove("hide"); 
                    portfolioItems[k].classList.add("show");
                }
                else{
                    portfolioItems[k].classList.remove("show")
                    portfolioItems[k].classList.add("hide");
                }
                if(filterValue === "all"){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
            }
        })
    }

    
//Portfolio Lighbox
const lightbox=document.querySelector(".lightbox"),
lightboxImg=lightbox.querySelector(".lightbox-img"),
lightboxClose=lightbox.querySelector(".lightbox-close"),
lightboxText=lightbox.querySelector(".lightbox-legenda"),
lightboxCounter=lightbox.querySelector(".lightbox-contador");
let itemIndex=0;

for(let i=0; i<totalPortfolioItem; i++){
portfolioItems[i].addEventListener("click", function(){
  itemIndex=i;
  changeItem();
  toggleLightbox();
})
}

function prevItem(){
if(itemIndex === 0){
  itemIndex=totalPortfolioItem-1;
}
else{
  itemIndex--
}
changeItem();
}

function nextItem(){
if(itemIndex === totalPortfolioItem-1){
  itemIndex=0;
}
else{
  itemIndex++
}
changeItem();
}

function toggleLightbox(){
lightbox.classList.toggle("open");
}

function changeItem(){
imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
lightboxImg.src=imgSrc;
lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
lightboxCounter.innerHTML= (itemIndex+1) + " of " + totalPortfolioItem;
}

// Close Lightbox
lightbox.addEventListener("click", function(event){
if(event.target === lightboxClose || event.target === lightbox){
  toggleLightbox();
}
})


