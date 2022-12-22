import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent {

  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>();
  
  @Input()
  placeHolderTextArea: string = 'Texto';

  @Input()
  contenidoMarkdown = ''
}
