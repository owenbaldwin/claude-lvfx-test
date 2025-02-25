import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navItems = [
    { label: 'MAIN', link: '/main' },
    { label: 'PORTFOLIO', link: '/portfolio' },
    { label: 'PRESS RELEASES', link: '/press' },
    { label: 'ABOUT', link: '/about' },
    { label: 'LVFX', link: '/lvfx', active: true },
    { label: 'LIAISUN', link: '/liaisun' },
    { label: 'LOGOUT', link: '/logout' }
  ];
}
