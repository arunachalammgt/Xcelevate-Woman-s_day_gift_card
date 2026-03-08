const giftData = {
"Baby":"Happy Women’s Day ! Your journey from North India to South India shows your courage, dedication, and adaptability. It is truly inspiring how you embraced a new place, a new culture, and still made all of us feel comfortable and connected.What makes you special is the way you stay with us, eat with us, and interact with us like a family member rather than just a program coordinator. At such a young age, the courage, responsibility, and leadership you show is something we truly admire.Because of you, the campus feels open, friendly, and welcoming. You created an environment where we feel free to express ourselves and build a strong bond with you. Your support and understanding mean a lot to all of us.Thank you for being such a supportive mentor and for guiding us with kindness and confidence. Wishing you a very Happy Women’s Day filled with happiness, respect, and continued success.",
"Salas":"Happy Women’s Day, Ma’am. You are not only an excellent teacher but also a truly kind-hearted and compassionate person. Your constant care, encouragement, and unwavering support mean so much to all of us. Over the past eight months, we have been fortunate to travel on this learning journey with you, and every moment has been inspiring and meaningful.Your patience, dedication, and guidance have shaped us in many ways. You always motivate us to believe in ourselves and to improve every day. To us, you are not just a teacher—you are like a mother who always wishes the best for her students.Thank you for your endless support, wisdom, and kindness. We are truly grateful to have a mentor like you. Wishing you a wonderful Women’s Day filled with happiness, respect, and appreciation.",
"Nishtha":"Happy Women’s Day, Ma’am. You are a teacher with a truly respectful and professional mindset. What makes you special is that you never treated us like ordinary students; instead, you treated us like corporate employees and prepared us for the professional world. Your high expectations and insistence on perfection have helped us develop discipline, confidence, and a strong work ethic.Over the past four months, we have been fortunate to learn and grow under your guidance. Your mentoring has helped us understand what it means to be professional and responsible in our careers.Thank you for guiding us with such dedication and professionalism. We are truly grateful for your support and encouragement. Wishing you a very Happy Women’s Day filled with respect, success, and appreciation.",
"Akshaya":"Happy Women’s Day!Your helpful, supportive, and easy-going nature makes our team stronger and more positive every day.Wishing you continued success, happiness, and many great achievements ahead!",
"Charumathi":"Happy Women’s Day!Your leadership and supportive nature inspire everyone around you and make our team stronger.Wishing you continued success, happiness, and many wonderful achievements ahead!",
"Keerthana":"Happy Women’s Day! Your innocent and kind nature brings joy, warmth, and positivity to everyone around you.May your beautiful spirit always stay the same, and may you continue to spread happiness wherever you go. Wishing you lots of success and happiness ahead!",
"Keerthika":"Happy Women’s Day! Your responsible nature and the way you take care of everything show your dedication and strength. Your discipline and strictness at work help keep everything organized and running smoothly.Wishing you continued success, happiness, and many achievements ahead!",
"Rashmi":"Happy Women’s Day! Your initiative and proactive nature always bring positive energy to the team. Your friendly and free-spirited attitude makes everyone feel comfortable and encouraged to share ideas.Wishing you continued success, happiness, and many wonderful achievements ahead!",
"Ratna":"Happy Women’s Day! You may be the youngest in the cohort, but your bright smile and joyful nature bring so much positivity to everyone around you. Your cheerful energy makes the whole environment more lively and happy.Wishing you lots of success, happiness, and beautiful achievements ahead!",
"Sakthisri":"Happy Women’s Day! You have faced many challenges in life, yet your strength and determination never let you give up. Your resilience and courage are truly inspiring to everyone around you.Wishing you happiness, success, and many brighter days ahead!",
"Srimathi":"Happy Women’s Day! Your helping nature and selfless dedication truly reflect the spirit of a Karma Yogi in your work. The sincerity and commitment you bring every day inspire everyone around you.Wishing you continued success, happiness, and many meaningful achievements ahead!",
"Eram":"Happy Women’s Day! Your supportive nature and lively, talkative personality bring great energy to the team. You always encourage others and make every moment more engaging and enjoyable.Wishing you continued happiness, success, and many wonderful achievements ahead!",
"Sana":"Happy Women’s Day! Your supportive nature and the way you actively engage with the team make a big difference in creating a positive and collaborative environment. Your encouragement and teamwork inspire everyone around you.Wishing you continued success, happiness, and many wonderful achievements ahead!",
"Aritri":"Happy Women’s Day! Your strong character and values truly reflect the kind of person who inspires trust and respect from everyone around you. Your positive attitude and integrity make you a wonderful presence in the team.Wishing you continued happiness, success, and many great achievements ahead!",
"Anubha":"Happy Women’s Day, Ma’am.Even though we may not always see you directly, your hard work and dedication are clearly visible through the wonderful way our digital media is managed. Your creativity, commitment, and professionalism play an important role in presenting our work to the outside world.Behind every successful digital platform, there is a person who works with passion and responsibility, and you are that person for us. We truly appreciate the effort, innovation, and consistency you bring to managing our digital presence.Thank you for your valuable contribution and for doing such a wonderful job. Wishing you a very Happy Women’s Day filled with appreciation, success, and happiness."
};
function findCard(){

let name=document.getElementById("username").value.trim();

let message=giftData[name];

if(message){

document.getElementById("card").style.display="block";

document.getElementById("cardName").innerText="Dear "+name+" 🌸";

document.getElementById("cardMessage").innerText=message;

document.getElementById("notfound").innerText="";

/* Play music */
document.getElementById("giftMusic").play();

/* Confetti popper */
confetti({
particleCount:150,
spread:90,
origin:{y:0.6}
});

}
else{

document.getElementById("card").style.display="none";

document.getElementById("notfound").innerText="No gift found for this name.";

}


}
