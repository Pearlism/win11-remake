function toggleMenu(dir,menuName,margin,button,displayNonePos){

    
 if(menuPos!=displayNonePos+"px"){
  button.removeAttribute("onclick")
    var menu=document.querySelector(menuName)
    var menuPos=window.getComputedStyle(menu)[dir]
        menu.style[dir]=margin+"px"
        setTimeout(function(){
            OutsideClickFunc=function(event){
                if (!(menu.contains(event.target))) {
                  menu.style[dir] = displayNonePos+"px";
                  document.removeEventListener('click',OutsideClickFunc)
                  button.setAttribute("onclick","toggleMenu('"+dir+"','"+menuName+"',"+margin+",this,"+displayNonePos+")")
                }
              }
            document.addEventListener('click',OutsideClickFunc );
            
        },300)

        console.log()
        
    }}
var icons=[
  ["Word",`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.03 107.5"><path id="path6" fill="#2a5699" d="M57.5,0H65V10c13.37.08,26.74-.14,40.1.08a4.3,4.3,0,0,1,4.83,4.77c.21,24.63-.06,49.26.12,73.89-.12,2.52.25,5.32-1.21,7.56-1.83,1.3-4.19,1.14-6.31,1.24-12.52-.07-25,0-37.53,0v10H57.17c-19-3.47-38.1-6.66-57.16-10Q0,53.76,0,10C19.17,6.67,38.34,3.41,57.5,0Z"/><path id="path46" fill="white" d="M65,13.75h41.25v80H65v-10h32.5v-5H65V72.5h32.5v-5H65V61.25h32.5v-5H65V50h32.5V45H65V38.75h32.5v-5H65V27.5h32.5v-5H65Z"/><path id="path88" fill="white" d="M25.83,35.84c2.37-.14,4.75-.24,7.12-.36,1.67,8.43,3.37,16.86,5.17,25.26,1.41-8.68,3-17.33,4.48-26,2.5-.09,5-.23,7.49-.37-2.82,12.11-5.3,24.32-8.39,36.36-2.08,1.09-5.21,0-7.68.12-1.67-8.27-3.61-16.5-5.09-24.81-1.46,8.07-3.36,16.07-5,24.1q-3.6-.18-7.23-.44c-2.07-11-4.51-21.92-6.44-32.95,2.13-.1,4.28-.18,6.42-.26,1.29,8,2.75,15.89,3.88,23.86C22.28,52.19,24.08,44,25.83,35.84Z"/></svg>`],
  
  ["Twitter",`<svg style="enable-background:new 0 0 1000 1000;" viewBox="0 0 1000 1000"  xmlns="http://www.w3.org/2000/svg"><g><g id="Dark_Blue"><path fill="#1DA1F2" d="M500,0L500,0c276.1,0,500,223.9,500,500v0c0,276.1-223.9,500-500,500h0C223.9,1000,0,776.1,0,500v0    C0,223.9,223.9,0,500,0z"/></g><g id="Logo_FIXED"><path fill="white" d="M384,754c235.8,0,364.9-195.4,364.9-364.9c0-5.5,0-11.1-0.4-16.6c25.1-18.2,46.8-40.6,64-66.4    c-23.4,10.4-48.2,17.2-73.6,20.2c26.8-16,46.8-41.2,56.4-70.9c-25.2,14.9-52.7,25.5-81.4,31.1c-48.6-51.6-129.8-54.1-181.4-5.6    c-33.3,31.3-47.4,78-37.1,122.5c-103.1-5.2-199.2-53.9-264.3-134c-34,58.6-16.7,133.5,39.7,171.2c-20.4-0.6-40.4-6.1-58.2-16    c0,0.5,0,1.1,0,1.6c0,61,43,113.6,102.9,125.7c-18.9,5.1-38.7,5.9-57.9,2.2c16.8,52.2,64.9,88,119.8,89.1    c-45.4,35.7-101.5,55.1-159.2,55c-10.2,0-20.4-0.6-30.5-1.9C246.1,734,314.4,754,384,753.9"/><path fill="none" d="M500,0L500,0c276.1,0,500,223.9,500,500v0c0,276.1-223.9,500-500,500h0C223.9,1000,0,776.1,0,500v0    C0,223.9,223.9,0,500,0z"/></g></g></svg>`],
  ["Youtube",`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.57 20"><path fill="#ed2024" d="M28,3.12A3.56,3.56,0,0,0,25.45.6C23.22,0,14.28,0,14.28,0S5.35,0,3.12.6A3.56,3.56,0,0,0,.6,3.12,37,37,0,0,0,0,10a37,37,0,0,0,.6,6.88A3.56,3.56,0,0,0,3.12,19.4c2.23.6,11.16.6,11.16.6s8.94,0,11.17-.6A3.56,3.56,0,0,0,28,16.88a37,37,0,0,0,.6-6.88A37,37,0,0,0,28,3.12Z"/><path fill="white" d="M11.43,14.29,18.85,10,11.43,5.72Z"/></svg>`],
  ["Store",`<svg xmlns="http://www.w3.org/2000/svg" style="padding:5px" viewBox="0 -3.971 512 515.971"><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="103.581" x2="103.581" y1="41.056" y2="97.376"><stop offset="0" stop-color="#30daff"/><stop offset=".5" stop-color="#18b7ea"/><stop offset="1" stop-color="#0094d4"/></linearGradient><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="90.665" x2="90.665" y1="-4.908" y2="39.465"><stop offset="0" stop-color="#22bcff"/><stop offset=".5" stop-color="#11a2f8"/><stop offset="1" stop-color="#0088f0"/></linearGradient><path d="M.003.003h511.992v511.992H.003z" fill="none"/><path d="M0 0h512v512H0z" fill="none"/><path d="M0 0h512v512H0z" fill="none"/><path id="a" d="M0 0h512v512H0z" fill="none"/><g><path d="M398.506.295H26.453C0 .295 0 15.655 0 15.655v275.628c0 75.945 80.213 81.066 80.213 81.066H327.68c92.16 0 88.747-75.947 88.747-75.947V19.922c0-23.893-17.921-19.627-17.921-19.627z" fill="white" transform="translate(51.2 99.545)"/><path d="M249.945 191.137h-81.606v81.606h81.606z" fill="#f25022"/><path d="M349.683 191.137h-81.606v81.606h81.606z" fill="#7fba00"/><path d="M349.683 290.867h-81.606v81.606h81.606z" fill="#ffb900"/><path d="M249.945 290.867h-81.606v81.606h81.606z" fill="#00a4ef"/><path d="M0 81.599c0 10.015 8.124 18.139 18.139 18.139 10.014 0 18.13-8.124 18.13-18.139zm217.6 0c0 10.015 8.117 18.139 18.132 18.139 10.014 0 18.137-8.124 18.137-18.139zm-181.33 0V36.27H0V81.6zm0-45.329H217.6V0H36.27zm181.33 0V81.6h36.269V36.27zm0 0h36.269C253.869 16.24 237.63 0 217.6 0zm-181.33 0V0C16.24 0 0 16.24 0 36.27z" fill="url(#d)" fill-rule="evenodd" transform="translate(132.072 37.007)"/><path d="M0 0h181.33v36.263H0z" fill="url(#e)" transform="translate(168.346 37.01)"/></g></svg>`] 
]
var appCont=document.querySelector("#PinnedApps")
for(let i of icons){
  appCont.innerHTML+=`<div class="PinnedAppTile">${i[1]}<p>${i[0]}</p></div>`
}