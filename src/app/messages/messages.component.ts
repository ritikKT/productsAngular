import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../services/message-service.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService:MessageServiceService) { }

  ngOnInit(): void {
  }

}
