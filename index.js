//BÀI 1
function tinhDiem() {
  var diemChuan = parseFloat(document.getElementById("diemChuan").value);
  var diemMon1 = parseFloat(document.getElementById("diemMon1").value);
  var diemMon2 = parseFloat(document.getElementById("diemMon2").value);
  var diemMon3 = parseFloat(document.getElementById("diemMon3").value);
  var khuVuc = document.getElementById("khuVuc").value.toUpperCase();
  var doiTuong = parseFloat(document.getElementById("doiTuong").value);
  var diemUuTienKhuVuc = 0;
  var diemUuTienDoiTuong = 0;
  var khuVucMessage = "";
  var doiTuongMessage = "";
  if (khuVuc === "A") {
    diemUuTienKhuVuc += 2;
    khuVucMessage = "Bạn thuộc khu vực ưu tiên A và được cộng 2 điểm";
  } else if (khuVuc === "B") {
    diemUuTienKhuVuc += 1;
    khuVucMessage = "Bạn thuộc khu vực ưu tiên B và được cộng 1 điểm";
  } else if (khuVuc === "C") {
    diemUuTienKhuVuc += 0.5;
    khuVucMessage = "Bạn thuộc khu vực ưu tiên C và được cộng 0.5 điểm";
  } else if (khuVuc === "X") {
    khuVucMessage = "Bạn không ở khu vực ưu tiên";
  }
  if (doiTuong === 1) {
    diemUuTienDoiTuong += 2.5;
    doiTuongMessage = "Bạn thuộc đối tượng ưu tiên 1 và được cộng 2.5 điểm";
  } else if (doiTuong === 2) {
    diemUuTienDoiTuong += 1.5;
    doiTuongMessage = "Bạn thuộc đối tượng ưu tiên 2 và được cộng 1.5 điểm";
  } else if (doiTuong === 3) {
    diemUuTienDoiTuong += 1;
    doiTuongMessage = "Bạn thuộc đối tượng ưu tiên 3 và được cộng 1 điểm";
  } else if (doiTuong === 0) {
    doiTuongMessage = "Bạn không thuộc đối tượng ưu tiên";
  }
  var diemTongKet = diemMon1 + diemMon2 + diemMon3 + diemUuTienKhuVuc + diemUuTienDoiTuong;
  var message = "";
  if (diemTongKet >= diemChuan && diemMon1 !== 0 && diemMon2 !== 0 && diemMon3 !== 0) {
    message = "Chúc mừng, bạn đã đậu! Tổng điểm của bạn là: " + diemTongKet + " điểm";
  } else {
    message = "Rất tiếc, bạn đã rớt! Tổng điểm của bạn là: " + diemTongKet + " điểm";
  }
  alert(message + "\n" + khuVucMessage + "\n" + doiTuongMessage);
}
//BÀI 2
function tinhTienDien() {
  var ten = document.getElementById("tenChuHo").value;
  var soKw = parseFloat(document.getElementById("so_kw").value);
  var tienDien = 0;
  if (soKw <= 50) {
    tienDien = soKw * 500;
  } else if (soKw <= 100) {
    tienDien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw <= 150) {
    tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else {
    tienDien = 50 * 500 + 50 * 650 + 50 * 850 + (soKw - 150) * 1300;
  }
  var ketQua =
    "Tên chủ hộ: " +
    ten +
    "\nSố Kw tiêu thụ: " +
    soKw +
    " Kw\nTiền điện phải trả là: " +
    tienDien +
    " đồng";
  alert(ketQua);
}
//BÀI 3
function tinhThueThuNhap() {
  var hoTen = document.getElementById("ho_ten3").value;
  var tongThuNhap = document.getElementById("tong_thu_nhap").value * 1;
  var soNguoiPhuThuoc = document.getElementById("so_nguoi_phu_thuoc").value * 1;
  var thuNhapChiuThue = tongThuNhap - 4 - soNguoiPhuThuoc * 1.6;
  var thue = 0;
  var thue;

  if (thuNhapChiuThue <= 60) thue = thuNhapChiuThue * 0.05;
  else if (thuNhapChiuThue <= 120) thue = thuNhapChiuThue * 0.1;
  else if (thuNhapChiuThue <= 210) thue = thuNhapChiuThue * 0.15;
  else if (thuNhapChiuThue <= 383) thue = thuNhapChiuThue * 0.2;
  else if (thuNhapChiuThue <= 624) thue = thuNhapChiuThue * 0.25;
  else if (thuNhapChiuThue <= 960) thue = thuNhapChiuThue * 0.3;
  else thue = thuNhapChiuThue * 0.35;
  var ketQua =
    "Họ tên: " +
    hoTen +
    "\nTổng thu nhập năm: " +
    tongThuNhap +
    " triệu đồng\nSố người phụ thuộc: " +
    soNguoiPhuThuoc +
    "\nThuế thu nhập cá nhân phải trả: " +
    thue +
    " triệu đồng";
  alert(ketQua);
}
//BÀI 4
function tinhHoaDon() {
  var maKhachHang = document.getElementById("ma_khach_hang").value;
  var loaiKhachHang = document.getElementById("loai_khach_hang").value;
  var soKetNoi = parseInt(document.getElementById("so_ket_noi").value);
  var soKenhCaoCap = parseInt(document.getElementById("so_kenh_cao_cap").value);

  var phiXuLyHoaDon = 0;
  var phiDichVuCoBan = 0;
  var phiThueKenhCaoCap = 0;

  if (loaiKhachHang === "nha_dan") {
    phiXuLyHoaDon = 4.5;
    phiDichVuCoBan = 20.5;
    phiThueKenhCaoCap = 7.5 * soKenhCaoCap;
  } else if (loaiKhachHang === "doanh_nghiep") {
    phiXuLyHoaDon = 15;
    phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
    phiThueKenhCaoCap = 50 * soKenhCaoCap;
  }

  var tongHoaDon = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;

  var ketQua =
    "Mã khách hàng: " +
    maKhachHang +
    "\nLoại khách hàng: " +
    (loaiKhachHang === "nha_dan" ? "Nhà Dân" : "Doanh Nghiệp") +
    "\nPhí xử lý hóa đơn: $" +
    phiXuLyHoaDon +
    "\nPhí dịch vụ cơ bản: $" +
    phiDichVuCoBan +
    "\nPhí thuê kênh cao cấp: $" +
    phiThueKenhCaoCap +
    "\nTổng hóa đơn: $" +
    tongHoaDon;

  alert(ketQua);
}
function hienThiSoKetNoi() {
  var loaiKhachHang = document.getElementById("loai_khach_hang").value;
  var divSoKetNoi = document.getElementById("div_so_ket_noi");

  if (loaiKhachHang === "doanh_nghiep") {
    divSoKetNoi.style.display = "block";
    document.getElementById("so_ket_noi").removeAttribute("disabled");
  } else {
    divSoKetNoi.style.display = "none";
    document.getElementById("so_ket_noi").setAttribute("disabled", true);
    document.getElementById("so_ket_noi").value = "";
  }
}
  