import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-add-article",
  templateUrl: "./add-article.component.html",
  styleUrls: ["./add-article.component.css"]
})
export class AddArticleComponent implements OnInit {
  public date: Date = new Date();
  public datePattern: RegExp = /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/i;

  formGroup = this.fb.group({
    heading: ["", [Validators.required, Validators.minLength(5)]],
    date: [
      `${this.date.toLocaleDateString()}`,
      [Validators.required, Validators.pattern(this.datePattern)]
    ],
    shortDescription: [""],
    author: ["", Validators.required],
    content: ["", [Validators.required, Validators.minLength(20)]],
    sourceURL: [""]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  save(): void {
    console.log("Saved!");
  }

  getValue(field: string): any {
    return this.formGroup.get(field);
  }

  isInvalid(field: string): boolean {
    return this.getValue(field).invalid && this.getValue(field).touched;
  }
}
