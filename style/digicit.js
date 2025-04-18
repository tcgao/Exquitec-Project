let head = document.getElementById("headi")
let emb = document.getElementById("emb")
let cont = document.getElementById("cont")
let reff = document.getElementById("reff")
let our = document.getElementById("our")
let text = document.getElementById("tex")
emb.style.fontWeight = "200"
emb.style.fontSize = "25px"
emb.style.fontFamily = "Courier New, Courier, monospace"
emb.style.margin = "20px"
head.style.backgroundImage = "url(/images/gallery-image-33.jpg)"
head.style.height = "400px";
head.style.top = "100%";
head.style.alignContent = "center";
head.style.backgroundSize = "cover"
head.style.justifyItems = "center"
head.style.color = "white"
// head.style.textShadow = "3px 3px black"
reff.style.color = "white"
reff.style.textDecoration = "none"
our.style.marginTop = "6%"
emb.style.justifyItems = "center"
cont.style.justifySelf = "center"
cont.style.width = "90%"
cont.style.backgroundImage = "url(/images/lady.jpg)"
cont.style.backgroundSize = "cover"
cont.style.height = "450px"
cont.style.borderRadius = "50px"
cont.style.marginBottom = "80px"
text.style.padding = "5%"
text.style.height = "60%"
cont.addEventListener("mouseenter", function(){
    cont.style.transform = "rotateY(180deg)"
    cont.style.backgroundColor = "white"
    cont.style.transition = "transform 1s"
    cont.style.transformStyle = "preserve-3d"
    text.innerHTML = "One of the most important 21st Century skills is digital citizenship.<br> All students need to develop their digital citizenship skills to fully engage in their communities and make informed decisions both online and off. Digital citizenship refers to the responsible use of technology by anyone who uses computers, the Internet, and digital devices to engage with society on any level.<br>As the rate of technological advancement continues to increase, the world as a whole is becoming more dependent on the Internet for day-to-day activities. <br><br> Good digital citizenship teaches kids how to use digital tools to communicate with one another, empathize with one another, and build long-lasting connections.<br> On the other hand, poor digital citizenship includes things like cyber bullying, careless social media use, and a general ignorance of safe Internet usage practices.<br><br> As DigCit guards, Exquitec Education Technology teaches students how to be good digital citizens. The students were shown the importance of empathy, how the Internet works, how they can secure their computers and smartphones, and ultimately, why they need to use digital devices in moderation.<br> Such a fulfilling time engaging the students on digital literacy, ethics, etiquette, online safety, norms, rights, culture and more."
    text.style.transform = "rotateY(-180deg)"
    cont.style.backgroundImage = ""
    cont.style.cursor = "pointer"
})
cont.addEventListener("mouseleave", function(){
    cont.style.transform = "rotateY(0deg)"
    cont.style.backgroundColor = ""
    text.innerHTML = ""
    cont.style.backgroundImage = "url(/images/lady.jpg)"
    text.style.transform = "rotateY(180deg)"
})