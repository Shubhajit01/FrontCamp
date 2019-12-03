import { MasterService } from "./../services/master.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public sourceName: string = "News Headlines";

  constructor(private master: MasterService) {}

  ngOnInit() {
    this.master.sourceName$.subscribe((source: string) => {
      this.sourceName = (source === 'All' ? 'News Headlines - India' : source);
    });
  }
}
