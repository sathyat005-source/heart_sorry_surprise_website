/*
  ============================
  EASY PERSONALIZATION
  ============================
  Change only the values below.
*/
const SETTINGS = {
  personName: "Suhani..💎",
  senderName: "Sonu..💖",
  finalHeading: "I'm sorry ❤️, truly.",
  finalMessage: "I hope, when you are ready, you can forgive me. No pressure. I just wanted you to know that I am genuinely sorry and that you matter to me."
};

const root = document;
const screens = [...document.querySelectorAll(".screen")];
const personName = document.getElementById("personName");
const senderName = document.getElementById("senderName");
const finalHeading = document.getElementById("finalHeading");
const finalMessage = document.getElementById("finalMessage");
const music = document.getElementById("music");
const musicNote = document.getElementById("musicNote");

personName.textContent = SETTINGS.personName;
senderName.textContent = SETTINGS.senderName;
finalHeading.textContent = SETTINGS.finalHeading;
finalMessage.textContent = SETTINGS.finalMessage;

function showScreen(id){
  screens.forEach(s => s.classList.toggle("active", s.id === id));
  window.scrollTo({top:0,behavior:"smooth"});
}

document.querySelectorAll("[data-next]").forEach(button => {
  button.addEventListener("click", async () => {
    showScreen(button.dataset.next);

    try {
      await music.play();
      musicNote.textContent = "♫";
      console.log("Music started successfully");
    } catch (error) {
      musicNote.textContent = "▶";
      console.log("Music could not start:", error);
    }
  });
});
document.getElementById("restart").addEventListener("click",()=>showScreen("screen1"));

musicNote.addEventListener("click",()=>{
  if(music.paused){
    music.play().then(()=>musicNote.textContent="♫").catch(()=>{});
  }else{
    music.pause();
    musicNote.textContent="🔇";
  }
});

const hearts = document.getElementById("hearts");
function createHeart(){
  const h=document.createElement("span");
  h.className="heart";
  h.textContent=Math.random()>.25?"♥":"♡";
  h.style.left=(Math.random()*100)+"vw";
  h.style.fontSize=(12+Math.random()*20)+"px";
  h.style.animationDuration=(5+Math.random()*5)+"s";
  hearts.appendChild(h);
  setTimeout(()=>h.remove(),10000);
}
setInterval(createHeart,700);
