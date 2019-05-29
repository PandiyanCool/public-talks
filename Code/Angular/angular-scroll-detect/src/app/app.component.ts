import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('scroll', { read: ElementRef }) public scroll: ElementRef<any>;



  list = [{ name: 'Nam porta orci sed enim imperdiet, et vulputate erat luctus. Integer a tortor blandit, eleifend velit id, eleifend libero. Quisque quis congue ex, vitae suscipit ipsum. Aliquam felis enim, bibendum vel dolor et, dapibus fringilla felis. Sed magna ipsum, congue molestie nisl non, commodo pellentesque felis. Mauris hendrerit rhoncus turpis, at lacinia metus finibus eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ligula risus, tincidunt ac diam vehicula, fringilla blandit sapien. Ut dictum a nunc id tempus. Nulla sed felis id quam hendrerit volutpat eget at velit. Praesent finibus, mauris ac molestie laoreet, erat est mattis velit, ac tincidunt nulla enim ac felis. In hac habitasse platea dictumst. Nam neque nibh, tempus a velit a, porttitor finibus quam. Nunc pharetra est eget urna mollis, sed facilisis eros pulvinar. Duis ac metus egestas, malesuada ligula eu, congue magna.Nam porta orci sed enim imperdiet, et vulputate erat luctus. Integer a tortor blandit, eleifend velit id, eleifend libero. Quisque quis congue ex, vitae suscipit ipsum. Aliquam felis enim, bibendum vel dolor et, dapibus fringilla felis. Sed magna ipsum, congue molestie nisl non, commodo pellentesque felis. Mauris hendrerit rhoncus turpis, at lacinia metus finibus eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ligula risus, tincidunt ac diam vehicula, fringilla blandit sapien. Ut dictum a nunc id tempus. Nulla sed felis id quam hendrerit volutpat eget at velit. Praesent finibus, mauris ac molestie laoreet, erat est mattis velit, ac tincidunt nulla enim ac felis. In hac habitasse platea dictumst. Nam neque nibh, tempus a velit a, porttitor finibus quam. Nunc pharetra est eget urna mollis, sed facilisis eros pulvinar. Duis ac metus egestas, malesuada ligula eu, congue magna.Nam porta orci sed enim imperdiet, et vulputate erat luctus. Integer a tortor blandit, eleifend velit id, eleifend libero. Quisque quis congue ex, vitae suscipit ipsum. Aliquam felis enim, bibendum vel dolor et, dapibus fringilla felis. Sed magna ipsum, congue molestie nisl non, commodo pellentesque felis. Mauris hendrerit rhoncus turpis, at lacinia metus finibus eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ligula risus, tincidunt ac diam vehicula, fringilla blandit sapien. Ut dictum a nunc id tempus. Nulla sed felis id quam hendrerit volutpat eget at velit. Praesent finibus, mauris ac molestie laoreet, erat est mattis velit, ac tincidunt nulla enim ac felis. In hac habitasse platea dictumst. Nam neque nibh, tempus a velit a, porttitor finibus quam. Nunc pharetra est eget urna mollis, sed facilisis eros pulvinar. Duis ac metus egestas, malesuada ligula eu, congue magna.' }];



  public Add() {
    this.list.push({ name: 'Nam porta orci sed enim imperdiet, et vulputate erat luctus. Integer a tortor blandit, eleifend velit id, eleifend libero. Quisque quis congue ex, vitae suscipit ipsum. Aliquam felis enim, bibendum vel dolor et, dapibus fringilla felis. Sed magna ipsum, congue molestie nisl non, commodo pellentesque felis. Mauris hendrerit rhoncus turpis, at lacinia metus finibus eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ligula risus, tincidunt ac diam vehicula, fringilla blandit sapien. Ut dictum a nunc id tempus. Nulla sed felis id quam hendrerit volutpat eget at velit. Praesent finibus, mauris ac molestie laoreet, erat est mattis velit, ac tincidunt nulla enim ac felis. In hac habitasse platea dictumst. Nam neque nibh, tempus a velit a, porttitor finibus quam. Nunc pharetra est eget urna mollis, sed facilisis eros pulvinar. Duis ac metus egestas, malesuada ligula eu, congue magna.' });

    console.log(this.scroll.nativeElement.offsetHeight);

  }

  ngAfterViewChecked() {
    // this.scrollToTop()
  }

  public scrollBottom() {
    console.log(this.scroll.nativeElement.scrollTop);
    this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight;

  }

  public scrollToTop() {
    this.scroll.nativeElement.scrollTop = 0;
  }
}
