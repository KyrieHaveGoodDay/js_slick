// 輪播圖的編號
var index = 0;
// 下一頁
var nextBtn= document.querySelector("#slider-next");
// 上一頁
var nextPrev= document.querySelector("#slider-prev");
// 取得輪播總共的長度
var item = document.getElementsByClassName("slider-item")



function next() {
    index++;
    if(index ==item.length)
    {
        index=0;
    }
    console.log("下一頁編號"+index)
}
function prev() {
    index++;
    if(index ==item.length)
    {
        index=0;
    }
    console.log("上一頁編號"+index)
}

nextBtn.onclick= next;
nextPrev.onclick=prev;