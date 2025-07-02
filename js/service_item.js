
$(function (){
    const swiper = new Swiper('.index_swiper_4', 
        {
        // Optional parameters
        slidesPerView: 1,
        direction: 'horizontal',        
        loop: true,
        spaceBetween : 32,  
        // centeredSlides: true,   // 當前 slide 置中
        

        // // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },

        breakpoints: { 
          //當寬度 >= 768
          768: { 
            slidesPerView: 2,
            spaceBetween : 16,
          }, 
          1366: { 
            slidesPerView: 2,
            spaceBetween : 16,
          },         
        },

        }
    );

    //調整文字顯示
    /* 
    1.判斷現在畫面尺寸，做相對應的呈現
    2.監聽畫面尺寸變化
    3.根據不同尺寸取不同字數長度 + ...
        logic : 先判斷有沒有超過字數，若有再根據不同尺寸進行字數擷取+...
          768px:actual text = 38
          1366px:actual text = 60
          P.S.有先留小尺寸的設定區塊
    */

    //先判斷現在畫面尺寸
    const windowWidth = window.innerWidth;
    //根據畫面相對應的尺寸設定相對應顯示的字數
    setSlideContentTextLength(windowWidth);

    //監聽畫面尺寸變化
    window.addEventListener('resize', function() {
      //取得視窗尺寸
      const newWidth = window.innerWidth;
      setSlideContentTextLength(newWidth);

    });

});

const setSlideContentTextLength = function (windowWidth){

  //console.log('新的視窗尺寸-width:', windowWidth);
  
  var pElements = document.querySelectorAll('.index_swiper_4 .slide_body p');
  //console.log(pElements);
  
  //取得服務項目輪播的文字內容字數
  pElements.forEach(function(p, index) {

    // 取得原始文字內容（如果沒有儲存過的話）
    if (!p.dataset.originalText) {
      p.dataset.originalText = p.textContent; //將原始資料儲存在 data-original-text 的自創 data tag 裡，確保原始資料的不流失
    }

    var originalText = p.dataset.originalText;//從儲存的原始資料進行處理
    var actualText = originalText.replace(/\s+/g, ''); // 不包含空白字數
    var subStringLen = 38; // 預設擷取長度
    var displayText = originalText; // 預設顯示原始文字


    // 判斷畫面尺寸（先判斷大尺寸）
    if(windowWidth >= 1366){
      subStringLen = 58;
      //console.log('windowWidth:', windowWidth, '第' + (index + 1) + '個 p 標籤實際字數:', actualText.length);
      
      // 判斷輪播字數長度
      if(actualText.length > subStringLen){
        // 找到第58個實際字符在原始文字中的位置
        displayText = getSubstringWithActualLength(originalText, subStringLen) + '...';
      }
      
    } else if(windowWidth >= 768){
      subStringLen = 38;
      //console.log('windowWidth:', windowWidth, '第' + (index + 1) + '個 p 標籤實際字數:', actualText.length);
      
      // 判斷輪播字數長度
      if(actualText.length > subStringLen){
        // 找到第38個實際字符在原始文字中的位置
        displayText = getSubstringWithActualLength(originalText, subStringLen) + '...';
      }
      
    } 
    // else {// 手機版本或更小尺寸的處理
    //   
    //   subStringLen = 26;
    //   if(actualText.length > 26){
    //     displayText = getSubstringWithActualLength(originalText, subStringLen) + '...';
    //   }
    // }

    // 更新顯示的文字內容
    p.textContent = displayText;

  });
}


// 輔助函數：根據實際字符數（不含空白）來擷取文字
function getSubstringWithActualLength(text, targetLength) {
  let actualCount = 0;
  let result = '';
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    result += char;
    
    // 如果不是空白字符，計入實際字數
    if (!/\s/.test(char)) {
      actualCount++;
    }
    
    // 達到目標長度就停止
    if (actualCount >= targetLength) {
      break;
    }
  }
  
  return result;
}