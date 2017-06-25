# Project - *Xây dựng web Blog Tâm Trạng*

**Xây dựng web Blog Tâm Trạng** là repository cho đồ án nhóm. Nhóm tối đa 4 thành viên.

Thành viên:
* [x] **1312432** Phạm Hữu Phong (phphong257)
* [x] **1312479** Lại Trọng Sang (laitrongsang95)

URL: **https://project-1312479-1312432.herokuapp.com**
Báo cáo: **URL Github Page của đề tài**

## Yêu cầu

Trong đề tài, sinh viên cần mô tả các chức năng có thể thực hiện bên dưới. Sinh viên check vào các mục bên dưới và ghi mã sinh viên đã làm vào chức năng theo mẫu. Mục nào ko có MSSV là tính điểm theo nhóm. Cần sắp xếp các chức năng bên dưới theo thứ tự MSSV đã thực hiện.

Làm việc nhóm:
* [x] Có sử dụng GIT.
* [ ] Sử dụng GIT theo Centralized Workflow.
* [x] Sử dụng GIT theo Feature Branch Workflow.
* [ ] Sử dụng GIT theo Gitflow Workflow.

## Mô tả nghiệp vụ chung ứng dụng
Phần mô tả đặt vào đây

## Lập trình server
### MVC
* [x] MVC (**1312432-1312479**)
* [x] Config (**1312432-1312479**)
* [x] REST routing (**1312432-1312479**)
* [x] Layout & partial (**1312432-1312479**)

### Lập trình dữ liệu
* [x] Thêm (**1312432-1312479**)
* [x] Xóa (**1312432-1312479**)
* [x] Sửa (**1312432-1312479**)
* [x] Tìm kiếm (**1312432-1312479**)

### Xử lý lỗi
* [x] Xử lý lỗi trong cùng trang web (**1312432-1312479**)
* [ ] Xử lý lỗi dùng trang web riêng (**MSSV1**)
   * [x] 401 (**1312432**)
   * [ ] 404 (**MSSV1**)
   * [x] 500 (**1312432**)

### Tương tác API khác
Liệt kê các API nhóm đã sử dụng được ở đây
* [ ] Facebook API: mô tả (MSSV1)
* [ ] Google API: mô tả (MSSV1)
* [ ] ...

## Lập trình client
* [x] Kiểm tra dữ liệu (**1312479**)
* [x] Animation (**1312479**)
* [x] Thao tác DOM (**1312479**)
* [x] AJAX (MSSV1)

## Bảo mật
* [x] Chứng thực (**1312432**)
* [x] Phân quyền sử dụng một số trang web với nhiều vai trò khác nhau (**1312432-1312479**)
   * [x] Không cho phép thao tác vào trang web khi không có quyền (MSSV1)
   * [ ] Thể hiện các chức năng khác nhau trên cùng giao diện khi người dùng có quyền khác nhau (MSSV1)
   * [ ] Thể hiện lỗi khi không truy xuất được trang khi không có quyền (MSSV1)

## Nâng cao
* [ ] Yêu cầu 1. (MSSV1)


## Chức năng đã thực hiện
Các **yêu cầu chức năng** (check và ghi MSSV vào các phần chức năng đã thực hiện)

* [x] Thiết kế trang web theo responsive với bootstrap với header (navigation bar, logo), menu, footer và content. (**1312479**)
* [x] Navigation bar sẽ ẩn đi với kích thước màn hình nhỏ hơn 992px và có nút nhấn để hiển thị navigation bar. (**1312479**)
* [x] Trang web được thiết kế sẽ bao gồm các trang: trang chủ, trang cá nhân, bài viết, góc ảnh, tin nhắn, liên hệ (**1312479**)
* [x] Trang home hiển thị danh sách bài viết của nhiều người dùng đã đăng lên. (**1312432**)
* [x] Khi nhấn vào trang cá nhân sẽ thấy danh sách các bài viết của người dùng đó. (**1312432**)
* [x] Nhấn vào trang bài viết để đăng bài. Bài viết bao gồm: tiêu đề, nội dung (**1312432**)
* [x] Khi nhấn vào trang góc ảnh sẽ thấy danh sách các album đã được lưu trữ trong hệ thống. Mỗi album bao gồm: ảnh cover, tiêu đề, ngày đăng. (**1312479**)
* [x] Khi nhấn vào từng album sẽ sẽ chuyển sang danh sách các tấm ảnh trong album. (**1312479**)
* [x] Khi nhấn vào từng album có thể tìm kiếm ảnh theo tên của ảnh đó. (**1312479**)  
* [x] Khi nhấn vào trang tin nhắn sẽ thấy: danh sách người dùng, danh sách theo dõi, tạo tin nhắn, xem tin nhắn đã nhận. (**1312432**)
* [x] Khi nhấn vào danh sách người dùng sẽ hiển thị danh sách người dùng và có thể theo dõi họ. (**1312432**)
* [x] Khi nhấn vào danh sách theo dõi sẽ hiển thị danh sách bạn bè mà mình đã follow. (**1312432**)
* [x] Nhấn vào tạo tin nhắn để viết tin nhắn cho bạn bè. tin nhắn bao gồm: người nhận, tiêu đề, nội dung. (**1312432**)
* [x] Nhấn vào xem tin đã nhận để xem danh sách tin nhắn đã nhận. Bao gồm: email, tiêu đề, nội dung. (**1312432**)
* [x] Vào trang liên hệ sẽ thấy thông tin nhóm: tên nhóm, danh sách thành viên (mã sinh viên, họ tên, email), thông tin người dùng gửi (contact) và bản đồ google map hiển thị địa chỉ liên lạc của nhóm. (**1312479**)
* [x] khi người dùng gửi contact, sẽ tự động lưu vào database. (**1312479**)
* [x] Nhấn vào mỗi bài viết sẽ thấy chi tiết bài viết cùng đầy đủ nội dung của bài viết. (**1312432**)
* [x] Cho phép người dùng biết họ đang ở trang nào (sử dụng breadcrumb). (**1312479**)
* [x] Cho phép người dùng đăng nhập, đăng xuất, đăng ký thông tin tài khoản. (**1312432**)
* [x] Có thể xem danh sách các comment của từng bài viết. (**1312432**)
* [x] Cho phép người dùng đã đăng nhập đăng thêm bài viết mới. (**1312432**)
* [x] Cho phép người dùng đã đăng nhập comment cho bài viết. (**1312432**)
* [x] Website layout theo kiến trúc MVC với các thành phần được tách thành nhiều module theo hướng dẫn. (**1312432-1312479**)
* [x] Cho phép người dùng đăng ký tài khoản bằng các thông tin: email, password, name. (**1312432**)
* [x] Đăng nhập bằng email và password. (**1312432**)
* [x] Admin quản trị hệ thống có thể theo dõi danh sách người dùng, danh sách contact người dùng gửi đến. (**1312479**)
* [x] Admin quản trị hệ thống có thể thêm mới user, cập nhật thông tin, xóa user. (**1312479**)
* [x] kiểm tra dữ liệu ở phía client, hiệu ứng trang web. (**1312479**)
* [x] Báo cáo và demo. (**1312479**) 

## Demo

Link ảnh GIF demo ứng dụng:

#### Chức năng người dùng
![chức năng người dùng](https://github.com/UDPT-2017/project-1312432-1312479/blob/master/project1.gif)

#### Chức năng Admin
![chức năng admin](https://github.com/UDPT-2017/project-1312432-1312479/blob/master/project2.gif)

Tạo ảnh GIF với chương trình [LiceCap](http://www.cockos.com/licecap/).


## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
