import { Component } from '@angular/core';
import { ExampleForm } from '../../components/example-form/example-form';

@Component({
  imports: [ExampleForm],
  selector: 'app-start-page',
  styleUrl: './start-page.css',
  templateUrl: './start-page.html',
})
export class StartPage {}
