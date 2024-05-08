import { CommonModule } from '@angular/common';
import { HeaderComponent } from './../header/header.component';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-samplepage',
  standalone: true,
  imports: [RouterLink,RouterOutlet,HeaderComponent,CommonModule],
  templateUrl: './samplepage.component.html',
  styleUrl: './samplepage.component.css'
})
export class SamplepageComponent {
  submenuVisible1: boolean = false;
  submenuVisible2: boolean = false;

  toggleSubMenu1() {
    this.submenuVisible1 = !this.submenuVisible1;
  }
  toggleSubMenu2() {
    this.submenuVisible2 = !this.submenuVisible2;
  }
  // nếu lấy danh sách từ database

  // reportTemplates: any[]; // Mảng chứa danh sách các mẫu báo cáo
  // submenuVisible: boolean[] = []; // Mảng chứa trạng thái hiển thị của mỗi submenu

  // constructor() {
  //   // Lấy danh sách mẫu báo cáo từ cơ sở dữ liệu
  //   // Ví dụ: this.reportTemplates = ...;
  //   // Sau đó khởi tạo mảng submenuVisible với các giá trị mặc định
  //   this.reportTemplates.forEach(() => {
  //     this.submenuVisible.push(false);
  //   });
  // }

  // toggleSubMenu(index: number) {
  //   this.submenuVisible[index] = !this.submenuVisible[index];
  // }



}
