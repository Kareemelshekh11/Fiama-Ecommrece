import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit{

  ngOnInit(): void {
    const btn1 = document.querySelector("#btn1") as HTMLElement;
    const btn2 = document.querySelector("#btn2") as HTMLElement;
    const btn3 = document.querySelector("#btn3") as HTMLElement;
    const btn4 = document.querySelector("#btn4") as HTMLElement;
    const btn5 = document.querySelector("#btn5") as HTMLElement;
    const divlist1 = document.querySelector("#liton_tab_1_1") as HTMLElement;
    const divlist2 = document.querySelector("#liton_tab_1_2") as HTMLElement;
    const divlist3 = document.querySelector("#liton_tab_1_3") as HTMLElement;
    const divlist4 = document.querySelector("#liton_tab_1_4") as HTMLElement;
    const divlist5 = document.querySelector("#liton_tab_1_5") as HTMLElement;

    
    btn1.onclick = function(){
      btn1?.classList.add("active");
      btn2?.classList.remove("active");
      btn3?.classList.remove("active");
      btn4?.classList.remove("active");
      btn5?.classList.remove("active");
      divlist1?.classList.add("active","show");
      divlist2?.classList.remove("active","show");
      divlist3?.classList.remove("active","show");
      divlist4?.classList.remove("active","show");
      divlist5?.classList.remove("active","show");
    }

    btn2.onclick = function(){
      btn1?.classList.remove("active");
      btn2?.classList.add("active");
      btn3?.classList.remove("active");
      btn4?.classList.remove("active");
      btn5?.classList.remove("active");
      divlist1?.classList.remove("active","show");
      divlist2?.classList.add("active","show");
      divlist3?.classList.remove("active","show");
      divlist4?.classList.remove("active","show");
      divlist5?.classList.remove("active","show");
    }

    btn3.onclick = function(){
      btn1?.classList.remove("active");
      btn2?.classList.remove("active");
      btn3?.classList.add("active");
      btn4?.classList.remove("active");
      btn5?.classList.remove("active");
      divlist1?.classList.remove("active","show");
      divlist2?.classList.remove("active","show");
      divlist3?.classList.add("active","show");
      divlist4?.classList.remove("active","show");
      divlist5?.classList.remove("active","show");
    }

    btn4.onclick = function(){
      btn1?.classList.remove("active");
      btn2?.classList.remove("active");
      btn3?.classList.remove("active");
      btn4?.classList.add("active");
      btn5?.classList.remove("active");
      divlist1?.classList.remove("active","show");
      divlist2?.classList.remove("active","show");
      divlist3?.classList.remove("active","show");
      divlist4?.classList.add("active","show");
      divlist5?.classList.remove("active","show");
    }

    btn5.onclick = function(){
      btn1?.classList.remove("active");
      btn2?.classList.remove("active");
      btn3?.classList.remove("active");
      btn4?.classList.remove("active");
      btn5?.classList.add("active");
      divlist1?.classList.remove("active","show");
      divlist2?.classList.remove("active","show");
      divlist3?.classList.remove("active","show");
      divlist4?.classList.remove("active","show");
      divlist5?.classList.add("active","show");
    }
  }
}
