import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  username = '';
  message = '';
  messages: any[] = [];

  constructor(private chatService: ChatService, private cdr: ChangeDetectorRef) {}

ngOnInit(): void {
  this.chatService.getMessages().subscribe((msg: any) => {
    this.messages.push(msg);
    this.cdr.detectChanges();
  });
}

  sendMessage() {
    if (this.username && this.message) {
      this.chatService.sendMessage({
        username: this.username,
        message: this.message
      });

      this.message = '';
    }
  }
}
