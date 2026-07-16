import { Component} from '@angular/core';
import { Header } from "./header/header";
import { Login } from "./login/login";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
