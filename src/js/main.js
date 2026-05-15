import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import JustValidate from 'just-validate';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '/src/sass/style.scss';


const burger = document.querySelector('.burger'),
			close = document.querySelector('.header__menu-close'),
			menu = document.querySelector('.header__menu');

	burger.addEventListener("click", () =>{
		menu.classList.add("header__menu_active");
		document.body.style.overflow = "hidden";
});

close.addEventListener("click",() =>{
	menu.classList.remove("header__menu_active");
	document.body.style.overflow = "";
})











try {
new Swiper('.swiper', {
	slidesPerView: 1,
	loop:true,
	mousewheel: true,
  keyboard: true,
  pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
			 navigation: {
        nextEl: ".icon-right-open",
        prevEl: ".icon-left-open",
      },
	breakpoints: {
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
		1920: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
	},
  modules: [Navigation, Pagination],
});
}catch(e){}

try{
	const tabs = document.querySelectorAll(".catalog__tab");
	const contents = document.querySelectorAll(".catalog__content-item");

	tabs.forEach((tab, index) => {
		tab.addEventListener("click", () => {
			tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
			contents.forEach((c) => (c.style.display = "none"));
	
			tab.classList.add("catalog__tab_active");
			contents[index].style.display = "flex";
		});
	});
 
	contents.forEach((c,i) => (c.style.display = i === 0 ? "flex":"none"));
} catch(e){}

try{
const validatorTouch = new JustValidate(".touch__subline-form");
validatorTouch
  .addField('#name', [
    {
      rule: 'required',
			errorMessage: 'Please write your name!',
    },
    {
      rule: 'minLength',
      value: 2,
			errorMessage: 'Write more than two characters!',
    },
		 {
      rule: 'maxLength',
      value: 12,
			errorMessage: 'Write less than 10 characters!',
    },
  ],
		{
			errorsContainer: document
			.querySelector("#name")
			.parentElement.querySelector(".name-error-massage"),
		}
)
	 .addField('#email', [
    {
      rule: 'required',
			errorMessage: 'Please enter the correct email!',
    },
    {
      rule: 'email',
			errorMessage: 'Please enter the correct email!',
    },
  ],
		{
			errorsContainer: document
			.querySelector("#email")
			.parentElement.querySelector(".email-error-massage"),
		}
)
	.addField('#question', [
    {
      rule: 'required',
			errorMessage: 'Please ask your question!',
    },
    {
      rule: 'minLength',
			value: 10,
			errorMessage: 'The question must be more than 10 characters long!',
    },
  ],
		{
			errorsContainer: document
			.querySelector("#question")
			.parentElement.querySelector(".question-error-massage"),
		}
)
	.addField('#checkbox', [
    {
      rule: 'required',
			errorMessage: 'Please confirm!',
    },
  ],
		{
			errorsContainer: document
			.querySelector("#checkbox")
			.parentElement.parentElement.querySelector(".checkbox-error-massage"),
		}
)
.onSuccess((event)=>{
	const form = event.currentTarget;
	const formData = new FormData(form);

		fetch("https://httpbin.org/post", {
			method:"POST",
			body: formData,
		}).then(res => res.json()).then(data =>{
			console.log("Success", data);
			alert("Success");
			form.reset();
		});

});

}catch(e){}



try {
	const validatorFooter = new JustValidate(".footer__form");

	validatorFooter
		.addField(
			"#footer__email",
			[
				{
					rule: "required",
					errorMessage: 'Please enter the correct email!',
				},
				{
					rule: "email",
				},
			],
			{
				errorsContainer: document
					.querySelector("#footer__email")
					.parentElement.querySelector(".footer__input-error-massage"),
			}
		)
		.addField(
			"#footer__checkbox",
			[
				{
					rule: "required",
					errorMessage: 'Please confirm!',
				},
			],
			{
				errorsContainer: document
					.querySelector("#footer__checkbox")
					.parentElement.parentElement.querySelector(".footer__checkbox-error-massage"),
			}
		);
} catch (e) {}
