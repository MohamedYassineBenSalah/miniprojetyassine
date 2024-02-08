var navigation=document.querySelector('nav');

window.addEventListener('scroll',()=>{
if(window.scrolly>500)
{navigation.classList.add('scroll-nav');}
else 
{navigation.classList.remove('scroll-nav');}
})

function validForm() {
// var name=document.getElementById('name')
// var name=document.querySelector('#name')
var nom=document.forms ['contact-form']['name']
var email=document.forms ['contact-form']['email']
var msg=document.forms ['contact-form']['message']

var errorname=document.getElementById('name-error')
var erroremail=document.getElementById('email-error')
var errormsg=document.getElementById('message-error')

if (nom.value.trim()==" ")
{errorname.textcontent="Merci de remplir le champ";
test=false }
else{errorname.textcontent=" ";}

if(email.value=="" || email.indexOf(('@',0)<0))
{erroremail.textcontent="Merci de remplir le champ";
test=false}
else{erroremail.textcontent=" ";}

if(msg.value=="")
{errormsg.textcontent="Merci de remplir le champ";
test=false}
else{errormsg.textcontent=" ";}

return test


}