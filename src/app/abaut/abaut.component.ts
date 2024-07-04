import { Component } from '@angular/core';

@Component({
  selector: 'app-abaut',
  templateUrl: './abaut.component.html',
  styleUrl: './abaut.component.css'
})
export class AbautComponent {

  myBio = [
    {
      description: `Mening ismim Azizbek Sharipov, men dinamik va foydalanuvchilarga qulay veb-ilovalarni yaratish ishtiyoqiga ega
      bo'lgan veb-dasturchiman. Sohada bir necha yillik tajribam bilan men turli texnologiyalar, jumladan Angular,
      React va Node.js bo'yicha ko'nikmalarimni oshirdim.
      Men veb-ishlab chiqish bo'yicha sayohatimni talabalik kunlarimda boshladim, u erda kodlash va muammolarni hal
      qilishga bo'lgan muhabbatimni kashf etdim. O'shandan beri men kichik veb-saytlardan tortib keng ko'lamli
      ilovalargacha bo'lgan ko'plab loyihalar ustida ishladim.
      Kodlash bilan shug‘ullanmasam, oilam bilan vaqt o‘tkazish, sayr qilish va yangi texnologiyalarni o‘rganish menga
      yoqadi. Men har doim o'rganishga va yangi vazifalarni bajarishga intilaman.`
    },
    {
      BioTitle: "Qo'shimcha ma'lumot",
      description: `Muvaffaqiyatli: Angular, React, Node.js, HTML, CSS, SASS, JavaScript, Typescript, Tailwind Css, Bootstrap
        Tajriba: RESTful API, Git, Agile metodologiyalari
        Xobbi: sayr qilish, kitob o'qish, futbol o'ynash, video oyinlarni o'ynash`
    },
  ]


}
