import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections-psychopaths',
  templateUrl: './psychopaths.component.html',
  styleUrls: ['./psychopaths.component.scss']
})
export class PsychopathsComponent implements OnInit {
  clowns = [
    "https://fckr.cloud/wp-content/uploads/2022/10/harari.jpeg",
    "https://fckr.cloud/wp-content/uploads/2022/10/6NSB7EVM64I6XAWBRFVMVFK3XE-scaled.jpeg",
    "https://fckr.cloud/wp-content/uploads/2022/10/gates-schwab.jpeg",
    "https://fckr.cloud/wp-content/uploads/2022/10/trump-schwab-2.jpeg",
    "https://fckr.cloud/wp-content/uploads/2022/10/biden-schwab.jpeg",
    "https://fckr.cloud/wp-content/uploads/2022/10/clinton-schwab-2.webp",
    "https://fckr.cloud/wp-content/uploads/2022/10/putin-schwab.jpeg",
    "https://fckr.cloud/wp-content/uploads/2022/10/klaus-schwab-xi-jinping.webp",
    "https://fckr.cloud/wp-content/uploads/2022/10/zelensky-schwab.jpeg",
    "https://fckr.cloud/wp-content/uploads/2022/10/hollande-schwab.jpeg",
    "https://fckr.cloud/wp-content/uploads/2022/10/macron-schwab.jpg",
  ]
  current :number = 0;
  interval :any;

  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      if (this.current < this.clowns.length) {
        this.current += 1;
      } else {
        this.current = 0;
      }
    }, 6000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
