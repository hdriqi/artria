module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "29gM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pricing; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WMMs");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8bpD");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Fl18");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);






function pricing() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "terms-of-service"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Artria - Terms of Service")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "hero section-header  flex-items"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "h3-sm h2-md fw-700 flex-items  py-4 px-md-7"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mw-4"
  }, "Terms of Service"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section container mw-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Ketentuan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Kami, PT Artria Medika Indonesia, suatu perseroan terbatas yang didirikan berdasarkan hukum negara Republik Indonesia, memiliki kantor di Komplek Villa Kencana Damai Blok F02 RT. 021 RW. 04 Kelurahan Sukamaju Kecamatan Sako, Palembang (selanjutnya disebut sebagai \u201CArtria\u201D atau \u201CKami\u201D)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Syarat dan ketentuan ini (\u201CKetentuan\u201D) merupakan suatu perjanjian hukum antara anda dan Artria, untuk mengatur mengenai syarat dan ketentuan untuk penggunaan Layanan Artria oleh anda. Dalam Ketentuan ini, Layanan Artria berarti penjualan dan penyediaan suatu fitur, teknologi, benda, produk, perangkat lunak, perangkat keras, dan produk-produk, jasa-jasa, atau fungsi lain yang diberikan oleh produk atau jasa tersebut oleh Artria, termasuk aplikasi Artria  iOS dan Android (\u201CAplikasi\u201D) dan Artria.id (\u201CWebsite\u201D) (secara bersama-sama disebut sebagai \u201CLayanan\u201D)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Individu atau organisasi yang mengikatkan diri dalam Ketentuan ini sebagai pengguna Layanan, termasuk juga seluruh pengguna individu yang mengakses Layanan atas nama individu tersebut (secara bersama-sama disebut sebagai \u201CAnda\u201D atau \u201CPengguna\u201D)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Artria memberikan kepada anda suatu lisensi terbatas, non-eksklusif, tidak dapat dialihkan, dan dapat dibatalkan, untuk menggunakan Layanan (tergantung pada jenis akun anda) sesuai dengan Ketentuan ini."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Anda diwajibkan untuk membaca Ketentuan dari waktu ke waktu. Dengan mengakses atau menggunakan layanan, tindakan tersebut dianggap sebagai persetujuan dan penerimaan anda terhadap Ketentuan kami, dengan demikian, anda setuju untuk terikat pada setiap aturan yang dituangkan dalam Ketentuan kami. Apabila anda tidak setuju dengan suatu syarat atau aturan dalam Ketentuan ini, silakan untuk menghentikan menggunakan Layanan."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Seluruh hak yang tidak secara tegas diberikan kepada Pengguna dalam Ketentuan ini dimiliki oleh Artria."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Kebijakan Privasi"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Pengunaan dan/atau akses ke Layanan akan tunduk pada segala aturan yang dituangan dalam Kebijakan Privasi dalam Website, yang dapat diakses melalui https://artria.id/privacy. Dengan menyetujui syarat dan ketentuan ini, kami mengasumsikan bahwa anda telah membaca dan menyetujui isi dari Kebijakan Privasi. Kebijakan Privasi dan syarat dan ketentuan merupakan suatu kesatuan dokumen yang perlu disetujui oleh pengguna sebelum dapat melanjutkan menelusuri Website dan menggunakan Layanan."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Amendemen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Kami memiliki hak untuk membuat suatu amendemen, revisi dan/atau memperbarui Ketentuan ini dari waktu ke waktu dan anda setuju untuk terikat dengan Ketentuan yang direvisi dan/atau diperbarui tersebut. Kami akan berusaha untuk memberitahu anda sehubungan dengan perubahan tersebut melalui email atau dengan menampilkan suatu pesan pada saat anda menggunakan Layanan pada kesempatan berikutnya. Apabila anda melanjutkan penggunaan Layanan, penggunaan anda akan diatur oleh dan tunduk pada Ketentuan yang telah diperbarui. Apabila anda tidak setuju dengan amendemen, revisi, dan/atau pembaruan kami terhadap aturan-aturan dalam Ketentuan ini, silakan menghentikan akses terhadap Layanan."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Dari waktu ke waktu, kami dapat menambahkan, melakukan perubahan terhadap, atau menghilangkan seluruh fitur atau fungsi dalam Layanan. Apabila anda menggunakan Aplikasi, anda mungkin perlu untuk memasang versi baru atau yang diperbarui sebelum anda dapat menerima manfaat atas perubahan-perubahan tersebut. Kami juga dapat memutuskan untuk menghentikan penyediaan seluruh atau sebagian Layanan pada setiap waktu, dan tidak satupun dalam Ketentuan ini yang dianggap sebagai suatu jaminan bahwa Layanan akan terus tersedia, baik dalam bentuk saat ini atau bentuk lain apapun juga, atau bahwa kami akan mendukung, memelihara atau terus menawarkan Layanan, atau versi apapun dari Layanan. Pengunaan Layanan oleh anda akan selalu diatur dan tunduk pada Ketentuan yang diperbarui, meskipun adanya penambahan, perubahan, atau penyesuaian Layanan. Untuk menghindari keraguan, tambahan, perubahan, atau penyesuaian Layanan tersebut tidak membatalkan keberlakuan Ketentuan ini, kecuali secara tegas dinyatakan oleh Artria."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Informasi Akun"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Anda harus merupakan (i) penduduk individual berusia sekurang-kurangnya 18 tahun atau pernah menikah dan memiliki kapasitas hukum untuk mengikatkan diri dalam suatu perjanjian yang sah; atau (ii) badan hukum yang didirikan secara sah berdasarkan hukum jurisdiksi terkait dan memiliki domisili hukum, yang diwakili oleh perwakilan yang sah dan memiliki kapasitas hukum untuk mengikatkan diri dalam perjanjian yang sah, khususnya terkait aturan terkait Layanan, untuk mengakses dan menggunakan Layanan. Anda setuju untuk menyediakan informasi akun yang benar, akurat, terkini, dan lengkap pada saat proses pendaftaran, dan akan tetap menjaga dan segera memperbarui informasi akun untuk memastikan bahwa informasi akun tetap benar, akurat, terkini, dan lengkap. Anda menyatakan dan menjamin bahwa anda memiliki hak yang sah untuk menggunakan suatu kartu kredit, kartu debit, atau metode pembayaran lain yang anda gunakan sehubungan dengan Layanan."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Untuk diketahui bahwa apabila anda termasuk kategori nomor (ii) dan dalam kapasitas untuk bertindak untuk dan atas nama suatu badan hukum, anda harus memperoleh persetujuan yang diperlukan dari badan hukum tersebut dan dari pihak ketiga lain yang terkait sehubungan dengan penggunaan dan tanggung jawab atas (i) tindakan anda sehubungan dengan Layanan; (ii) biaya terkait dengan penggunaan Layanan; dan (iii) penerimaan dan kepatuhan anda terhadap Ketentuan ini. Dengan melanjutkan penggunaan dan/atau menggunakan Layanan, kami mengasumsikan bahwa anda telah memperoleh segala persetujuan yang diperlukan dan berwenang untuk mengakses Layanan."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Biaya dan Pajak"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Biaya berlanganan untuk penggunaan Layanan adalah sebagaimana dicantumkan dalam Website (\u201CBiaya\u201D) dan dapat mengalami perubahan. Kami akan berusaha untuk memberikan pemberitahuan kepada anda (melalui email atau dengan menampilkan suatu pesan pada saat anda menggunakan Layanan pada kesempatan berikutnya) sekurang-kurangnya 30 hari sebelum mengubah Biaya. Biaya tidak dapat dikembalikan, termasuk jika anda hanya menggunakan sebagian dari langganan bulanan atau tahunan atas Layanan. Kecuali diwajibkan oleh hukum dan putusan pengadilan yang sah dan mengikat dalam jurisdiksi yang berwenang, kami tidak akan menyediakan pengembalian Biaya Layanan sehubungan dengan pengakhiran Layanan oleh anda atau Artria, sehubungan dengan Kententuan ini."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Apabila anda menggunakan uji coba gratis dari Layanan (sebagaimana ditawarkan dalam Websita atau Aplikasi), uji coba gratis akan dimulai pada hari akun anda dibuka dan berakhir 14 hari kemudian. Apabila anda ingin melanjutkan menggunakan Layanan setelah berakhirnya masa uji coba gratis, anda harus membayar Biaya."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Seluruh Biaya tidak termasuk pajak, dan anda menjamin dan membebaskan Artria dari segala tuntutan dari otoritas pajak manapun untuk segala kurang bayar atas pajak penjualan, penggunaan, barang dan jasa, pajak pertambahan nilai atau pajak atau pungutan lainnya, dan segala denda dan/atau bunga."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Kebijakan Penggunaan Yang Dibenarkan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Artria memiliki hak untuk menentukan apakah suatu pengguna memiliki kualifikasi dan dapat diterima untuk menggunakan Layanan. Dalam hal apapun, Artria dapat melarang, mencegah, atau membatalkan akses terhadap Layanan pada setiap waktu, kepada penggguna manapun, dengan alasan yang wajar, yang semata-mata bergantung pada kebijakan Artria tanpa kewajiban bagi Artria untuk mengungkapkan atau menjelaskan kepada pihak manapun."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Anda bertanggung jawab sepenuhnya atas penggunaan Layanan dalam cara yang wajar dan setuju untuk tidak meminta pertanggungjawaban dari Artria atas segala tuntutan, kerugian, dan/atau kehilangan sehubungan dengan penggunaan Layanan. Tanpa Batasan, anda setuju bahwa anda tidak akan mengaitkan Layanan dengan aktivitas apapun yang mungkin dianggap, termasuk namun tidak terbatas, sebagai:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    className: "list-inside"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Menyalahi atau melanggar hak kekayaan intelektual pihak lain;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Melanggar hak publikasi atau hak privasi orang lain;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Ilegal atau mendorong atau sehubungan dengan, baik secara langsung maupun tidak langsung, tindakan ilegal apapun;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Mengandung virus perangkat lunak atau kode, file, atau program computer lain apapun yang dirancang untuk menginterupsi, menghancurkan, memanipulasi, merusak, atau membatasi fungsi atas suatu perangkat lunak atau perangkat keras komputer apapun atau peralatan telekomunikasi;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Menjual penggunaan, akses, atau mereproduksi Layanan kepada pihak ketiga manapun; dan/atau"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Suatu penipuan, memperdaya, atau menyesatkan dengan cara apapun.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Dengan adanya indikasi atas pelanggaran terhadap kebijakan penggunaan yang dibenarkan, Artria memiliki hak untuk mengakhiri penyediaan Layanan dan melakukan pembatalan akun, tanpa kewajiban apapun untuk mengembalikan, mengganti, atau membayarkan kembali biaya berlangganan dan/atau untuk bertanggung jawab atas segala ganti rugi dalam bentuk apapan, atau untuk menerapkan pembatasan atas penggunaan Layanan oleh anda. Apabila memungkinkan, kami akan berusaha untuk menyediakan pemberitahuan 24 jam sebelumnya dan meminta bahwa penggunaan anda dikurangi sebelum menerapkan pembatasan apapun. Terlepas dari hal tersebut, Artria memilik hak untuk membuat laporan apapun kepada institusi pemerintah yang berwenang dan institusi penegak hukum sehubungan dengan adanya indikasi pelanggaran, sebagaimana relevan."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Pembatalan Akun"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Artria dapat membatalkan atau menangguhkan akun anda pada setiap waktu jika, berdasarkan diskresi tunggal kami, anda telah melakukan pelanggaran material atau berulang atas Ketentuan ini atau ketentuan lain manapun yang berlaku terhadap penggunaan Layanan oleh anda."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Anda berhak untuk membatalkan akun anda pada Artria pada setiap waktu. Anda dapat membatalkan akun dengan mengikuti petunjuk pada saat anda masuk ke akun anda melalui Aplikasi atau Website. Apabila anda membatalkan akun sebelum berakhirnya masa langganan bulanan atau tahunan anda, pembatalan akun anda akan berlaku seketika dan anda tidak memiliki hak atas pengembalian Biaya apapun yang telah dibayarkan di muka (kecuali Kami menyetujui sebaliknya)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Apabila Akun anda dibatalkan: (a) akun anda akan dideaktivasi atau dihapus; (b) seluruh hak yang diberikan berdasarkan Ketentuan ini akan berakhir seketika; dan (c) kami dapat (namun tidak berkewajiban untuk) menghapus informasi dan data akun yang disimpan dalam server kami. Kami juga tidak bertanggung jawab terhadap anda ataupun pihak ketiga manapun untuk kompensasi, penggantian, atau kerugian sehubungan dengan pengakhiran atau penangguhan layanan, atau untuk penghapusan informasi atau data akun anda. Anda bertanggung jawab untuk memastikan bahwa konten dan data apapun yang anda perlukah telah disimpan salinan cadangannya atau digandakan sebelum pembatalan."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Kami tidak bertanggung jawab atas segala kerugian atau kerusakan yang mengikuti, atau sebagai akibat dari, pembatalan akun anda, dan anda bertanggung jawab untuk memastikan bahwa konten dan data apapun yang anda perlukan telah disimpan salinan cadangannya atau digandakan sebelum pembatalan."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Untuk keperluan pengakhiran, anda dan Kami sepakat untuk mengesampingkan ketentuan Pasal 1266 Kitab Undang-Undang Hukum Perdata Indonesia, sehingga pengakhiran Ketentuan ini akan berlaku tanpa harus memperoleh persetujuan atau putusan pengadilan atau institusi manapun dalam wilayah Republik Indonesia."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Layanan Artria disediakan \u201CSebagaimana Adanya\u201D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Layanan diberikan dengan dasar \u201Csebagaimana adanya\u201D dan \u201Csebagaimana tersedia\u201D, dan penggunaan Layanan oleh anda adalah pada risiko tanggungan anda sendiri. Kami akan berusaha untuk memberitahukan (pada jam kerja normal) seluruh permasalahan teknis yang muncul sehubungan dengan Layanan."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Kami tidak menjamin bahwa: (a) Layanan akan memenuhi kebutuhan khusus anda; (b) Layanan akan tidak terganggu, cepat, aman, atau bebas dari kekeliruan; (c)Layanan akan akurat dan dapat diandalkan; (d) kualitas dari segala produk, layanan, informasi, atau material lain yang dibeli atau diperoleh oleh anda melalui Layanan akan memenuhi ekspektasi anda; atau (e) segala kekeliruan dalam Layanan akan diperbaiki."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Anda mengakui bahwa Artria dapat menggunakan pemasok pihak ketiga untuk menyediakan perangkat keras, perangkat lunak, jaringan, sambungan, penyimpanan, dan teknologi lain untuk dapat menyediakan Layanan. Tindakan dan kelalaian pemasok pihak ketiga tersebut mungkin di luar kendali Artria, dan Artria tidak menerima tanggung jawab atas kerugian atau kerusakan yang diderita sebagai akibat dari segala tindakan atau kelalaian oleh pemasok pihak ketiga manapun."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Atas nama diri sendiri dan pihak ketiga manapun tersebut, Artria mengecualikan segala jaminan lain yang mungkin tersirat ataupun berlaku berdasarkan peraturan atau undang-undang lain yang berlaku, sepanjang diperkenankan berdasarkan hukum."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Untuk kemudahan anda, Artria dapat mencantumkan tautan ke situs atau konten lain dalam internet yang dimiliki atau dioperasikan oleh pihak ketiga. Situs atau konten yang ditautkan tidak berada di bawah kendali Kami dan Artria tidak bertanggung jawab untuk segala kekeliruan, kelalaian, keterlambatan, penghinaan, fitnah, kebohongan, pornografi, konten asusila, ketidaktepatan, atau material lain yang dimuat dalam konten, atau konsekuensi dari mengakses website terkait manapun serta akurasi informasi, konten, produk, atau layanan yang ditawarkan oleh, atau informasi yang terdapat dalam situs yang bertautan dengan atau dari Situs. Mengingat bahwa website pihak ketiga mungkin memiliki kebijakan privasi dan/atau standar keamanan berbeda yang berlaku dalam website mereka, kami menganjurkan anda untuk memeriksa kebijakan privasi dan syarat dan ketentuan situs-situs tersebut sebelum memberikan informasi pribadi apapun."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Harap diketahui bahwa segala tautan ke situs atau konten lain manapun bukan merupakan bentuk dukungan atau verifikasi atas situs atau konten tersebut dan anda setuju bahwa risiko dari akses terhadap situs atau konten yang ditautkan tersebut sepenuhnya ada pada anda."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Tanggung Jawab Kami Terbatas"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Sepanjang diperkenankan oleh hukum, Artria tidak bertanggung jawab atas segala kerugian langsung, tidak langsung, tidak diduga, khusus, berkelanjutan, atau tipikal, termasuk namun tidak terbatas pada, kerugian atas kehilangan laba, usaha, goodwill, penggunaan, data atau kehilangan tidak berwujud lainnya (sekalipun jika Artria telah mengetahui kemungkinan atas kerugian tersebut), yang diakibatkan oleh: (a) penggunaan atau ketidakmampuan penggunaan Layanan (secara keseluruhan atau sebagian) atau malfungsi teknis apapun: (b) biaya pengadaan barang dan jasa pengganti; (c) akses yang tidak sah pada, atau perubahan dari, komunikasi atau data anda; (d) pernyataan atau tindakan pihak ketiga sehubungan dengan Layanan; (e) hal lain sehubungan dengan Layanan; (f) pelanggaran Ketentuan ini oleh anda; (g) tuntutan atas pelanggaran hak cipta, merek dagang, rahasia dagang, atau hak kekayaan intelektual pihak ketiga lainnya, hak publikasi, hak privasi, atau pencemaran nama baik; (Artria) pelanggaran oleh anda atas hukum yang ebrlaku atau perjanjian manapun terkait ketentuan dengan pihak ketiga, dalam hal mana anda terikat; dan/atau (i) hal lainnya sehubngan dengan Layanan dan akses serta penggunaan anda atas Layanan."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Dalam hal apapun, keseluruhan tanggung jawab maksimal dari Artria berdasarkan atau sehubungan dengan Ketentuan ini atau penggunaan Layanan oleh anda terbatas pada besar Biaya yang anda bayarkan dalam kurun waktu 12 bulan terakhir."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Anda Bertanggung Jawab atas Penggunaan Layanan dan Anda Akan Mengganti Rugi Kami"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Anda bertanggung jawab atas segala aktivitas yang diakibatkan oleh penggunaan Layanan melalui akun anda. Anda bertanggung jawab untuk memelihara keamanan akun dan kata sandi anda. Artria tidak bertanggung jawab atas segala kerugian atau kerusakan yang dapat diakibatkan oleh segala kegagalan untuk menjaga keamanan nama pengguna dan kata sandi."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Selanjutnya, Artria tidak bertanggung jawab atas segala risiko data pribadi dan keamanan data terkait akses situs pihak ketiga yang ditautkan ke atau dari Layanan. Dalam hal tersebut, Artria akan dibebaskan dari tanggung jawab atas segala kerusakan atau kerugian yang muncul akibat akses pada tautan tersebut, termasuk namun tidak terbatas pada segala kerusakan atau kerugian terkait dengan virus, spyware, malware, worms, trojans, kerusakan, bugs, atau kerugian lain apapun. Anda setuju bahwa Artria tidak bertanggung jawab, secara langsung maupun tidak langsung atas segala kerusakan dan kerugian yang disebabkan atau diduga disebabkan oleh atau sehubungan dengan penggunaan atau mengandalkan konten, barang, atau jasa yang tersedia dalam atau melalui situs atau sumber tersebut. Anda akan mengganti rugi Artria terhadap segala bentuk tanggung jawab, tindakan, proses hukum permintaan, biaya, beban, dan pengeluaran yang dapat dikeluarkan atau diderita Artria sebagai akibat dari penggunaan Layanan melalui akun anda atau sebagai akibat dari kegagalan anda untuk mematuhi Ketentuan ini."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Larangan Penggunaan yang Bersifat Kejahatan atau Ilegal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Anda dilarang: (a) menggunakan Layanan dengan cara yang melanggar hukum, untuk tujuan apapun yang melanggar hukum atau bersifat penipuan, atau dengan cara apapun yang tidak sesuai dengan Ketentuan ini; (b) melanggar hak kekayaan intelektual kami atau pihak ketiga manapun sehubungan dengan penggunaan Layanan oleh anda; (c) mentransmisikan material apapun yang bersifat merendahkan, menghina, atau tidak pantas sehubungan dengan penggunaan Layanan oleh anda; (d) Menggunakan Layanan dengan cara yang dapat merusak, menonaktifkan, membebani, membuat cacat atau menggangu sistem atau keamanan kami atau menggangu pengguna lain; (e) memperoleh atau mengumpulkan informasi atau data apapun dari layanan atau sistem kami atau mencoba untuk mengurai segala transmisi menuju atau dari server kami yang menjalankan Layanan apapun; (f) mengungkapkan atau mendistribusikan informasi terkait Pengguna Layanan lainnya kepada pihak ketiga manapun, atau menggunakan informasi Pengguna lain manapun untuk tujuan pemasaran kecuali anda telah memperoleh persetujuan yang lugas untuk melakukan hal tersebut; atau (g) mengakses atau mendaftarkan login Pengguna melalui bots atau metode terotomasi lainnya."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Hak Kekayaan Intelektual"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Anda setuju bahwa konten dan segala material lain yang terdapat dalam Layanan, termasuk, namun tanpa batasam hak cipta dan hak kekayaan intelektual lainnya dalam karya seni, grafis, fotografi, teks, video, dan cuplikan suara, merek dagang dan logo yang ada dalam Situs (secara bersama-sama disebut \u201CKonten\u201D) dimiliki oleh Artria. Anda setuju untuk tidak mengajukan keberatan atau melakukan apapun yang tidak sesuai dengan kepemilikan tersebut. Anda tidak diperkenankan untuk menyalin, mereproduksi, menggunakan kembali, mentransmisikan kembali, mengadaptasi, mengumukan, memajang, memuat, mengunggah, membagikan, mengubah, menyiarkan, atau membuat karya turunan dari Konten dengan cara apapun, termasuk untuk keperluan publik atau komersial apapun, tanpa persetujuan tertulis sebelumnya dari Artria. Anda tidak diberikan lisensi sehubungan dengan Konten yang terdapat dalam Situs. Berdasarkan diskresi tunggal, Artria, pihak terafiliasi Artria, atau pemberi lisensi Artria dapat melakukan upaya-upaya untuk melaksanakan hak kekayaan intelektual mereka sejauh mungkin yang diperkenankan hukum, termasuk untuk melaksanakan proses peradilan kriminal."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Anda memberikan Artria, anak perusahaan, afiliasi, dan penerus hak Artria suatu hak yang bebas royalti, tidak dapat dibatalkan, dan berlaku terus menerus (termasuk untuk keperluan komersial) untuk menggunakan informasi dan/atau data yang diperoleh Artria melalui penggunaan Layanan oleh Anda, dengan ketentuan bahwa kami akan mengaggregasi atau melakukan anonimisasi informasi atau data tersebut sebelum menggunakannya."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Selain itu, anda juga memberikan Artria, anak perusahaan, afiliasi, dan penerus hak Artria suatu hak yang berlaku di seluruh dunia, non-eksklusif, bebas royalti, telah dibayar penuh, dapat dialihkan, dan dapat disublisensikan untuk menggunakan, mereproduksi, mengubah, mengadaptasi, mengumumkan, membuat karya turunan dari, mendistribusikan, melaksanakan di muka umum, dan mengumumkan di muka umum konten anda di seluruh dunia dalam media apapun untuk menyediakan dan mempromosikan Layanan, sepanjang diperkenankan peraturan perundang-undangan."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Selain dari hak-hak tersebut, Artria tidak mengklaim hak kekayaan intelektual sehubungan dengan informasi dan konten yang anda masukkan ke dalam layanan."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Anda dapat memberikan kami komentar, tanggapan, atau saran sehubungan dengan Layanan, dan anda setuju bahwa kami bebas untuk menggunakan, mengubah, dan menuangkan saran tersebut tanpa suatu kewajiban apapun kepada anda."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Komunikasi"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Anda setuju untuk mengizinkan kami mengontak anda melalui email (atau kecuali dinyatakan lain oleh anda) dan menyampaikan iklan, material pemasaran, informasi baru, surat kabar, pemberitahuan, dan informasi lain apapun kepada anda melalui alamat kontak yang anda sampaikan kepada kami pada saat pendaftaran dan/atau alamat kontak lain dari waktu ke waktu."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Lain-lain"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Kami menyediakan fasilitas layanan pelanggan yang tersedia (harap cantumkan hari/jam) dan dapat diakses melalui:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-inside"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Call Center: +62857 5876 3112"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Email : privacy@Artria.id")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Dalam hal terdapat aturan manapun dalam Ketentuan ini yang dianggap tidak dapat dilaksanakan atau tidak sah oleh otoritas yang berwenang, ketentuan tersebut akan diubah untuk dapat dilaksanakan sehubungan dan maksud dari naskah asli sepanjang diperkenankan oleh hukum yang berlaku. Keberlakuan dan pelaksanaan aturan lain dalam Ketentuan ini tidak akan terpengaruh."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Dalam hal terdapat aturan manapun dalam Ketentuan ini yang melanggar atau bertentangan dengan perjanjian/kebijakan atau pengaturan lain manapun, aturan dalam Ketentuan ini akan berlaku dan mengesampingkan perjanjian/kebijakan atau pengaturan lain manapun yang sebelumnya ada."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Ketentuan ini diatur berdasarkan hukum negara Indonesia dan Kami dan anda telah stuju bahwa segala perselisihan mengenai keberlakuan Ketentuan ini akan diselesaikan secara musyawarah atau melalui jurisdiksi eksklusif Pengadilan Negeri Sumatera Selatan"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null));
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("29gM");


/***/ }),

/***/ "8bpD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/Navbar/ActiveLink.js

 // typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

var ActiveLink_ActiveLink = function ActiveLink(_ref) {
  var children = _ref.children,
      router = _ref.router,
      href = _ref.href;

  var _class = router.pathname === href ? 'nav-active flex-items' : 'flex-items';

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(href).then(function () {
      return window.scrollTo(0, 0);
    });
  };

  return external_react_default.a.createElement("a", {
    href: href,
    onClick: handleClick,
    className: _class
  }, children);
};

/* harmony default export */ var Navbar_ActiveLink = (Object(router_["withRouter"])(ActiveLink_ActiveLink));
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/Navbar/index.scss
var Navbar = __webpack_require__("w+rK");

// CONCATENATED MODULE: ./components/Navbar/index.js












var Navbar_Nav =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Nav, _Component);

  function Nav(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Nav);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Nav).call(this, props));

    _defineProperty(Object(assertThisInitialized["a" /* default */])(_this), "handleClick", function () {
      var html = document.querySelector('html');

      _this.setState({
        navActive: !_this.state.navActive
      }); // this.state.navActive ? html.style = '' : html.style.overflow = 'hidden'

    });

    _this.state = {
      lists: [{
        name: 'EHR',
        to: '',
        child: [{
          name: 'Introduction',
          to: '/ehr/introduction',
          child: ''
        }, {
          name: 'EHR Plugin',
          to: '/ehr/ehr-plugin',
          child: ''
        }, {
          name: 'BPJS Plugin',
          to: '/ehr/bpjs-plugin',
          child: ''
        }]
      }, {
        name: 'Homecare',
        to: '/homecare',
        child: ''
      }, {
        name: 'Pricing',
        to: '/pricing',
        child: ''
      }, {
        name: 'Lainnya',
        to: '',
        child: [{
          name: 'Dokter Umum',
          to: '/others/dokter-umum',
          child: ''
        }, {
          name: 'Dokter Gigi',
          to: '/others/dokter-gigi',
          child: ''
        }, {
          name: 'Klinink Pratama',
          to: '/others/klinik-pratama',
          child: ''
        }, {
          name: 'Puskesmas',
          to: '/others/puskesmas',
          child: ''
        }]
      }],
      navActive: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Nav, [{
    key: "showAlert",
    value: function showAlert() {
      alert("Im an alert");
    }
  }, {
    key: "render",
    value: function render() {
      var navLists = this.state.lists;
      var navRender = navLists.map(function (item, index) {
        if (item.child) {
          return external_react_default.a.createElement("div", {
            key: index * 9,
            className: "nav-parents-wrapper"
          }, external_react_default.a.createElement("div", {
            className: "nav-parents"
          }, external_react_default.a.createElement("span", {
            className: "link-text"
          }, item.name), external_react_default.a.createElement("img", {
            className: "chevron",
            src: "/static/icon/chevron.svg"
          })), external_react_default.a.createElement("div", {
            className: "nav-child-wrapper"
          }, item.child.map(function (child, index) {
            return external_react_default.a.createElement(Navbar_ActiveLink, {
              key: index * 8,
              href: child.to
            }, external_react_default.a.createElement("span", {
              className: "nav-child link-child-text"
            }, child.name));
          })));
        } else {
          return external_react_default.a.createElement(Navbar_ActiveLink, {
            key: index * 9,
            href: item.to
          }, external_react_default.a.createElement("span", {
            className: "nav-child link-text"
          }, item.name));
        }
      });
      var navMobile = navLists.map(function (item, index) {
        if (item.child) {
          return external_react_default.a.createElement("div", {
            key: index * 13,
            className: "nav-parents-wrapper"
          }, external_react_default.a.createElement("div", {
            className: "nav-parents"
          }, item.name), external_react_default.a.createElement("div", {
            className: "nav-child-wrapper"
          }, item.child.map(function (child, index) {
            return external_react_default.a.createElement(Navbar_ActiveLink, {
              key: index * 14,
              href: child.to
            }, external_react_default.a.createElement("span", {
              className: "nav-child-item"
            }, child.name));
          })));
        } else {
          return external_react_default.a.createElement(Navbar_ActiveLink, {
            key: index * 13,
            href: item.to
          }, external_react_default.a.createElement("span", {
            className: "nav-item"
          }, item.name));
        }
      });
      return external_react_default.a.createElement("nav", {
        className: "navigation "
      }, external_react_default.a.createElement("div", {
        className: "nav-desktop container"
      }, external_react_default.a.createElement(Navbar_ActiveLink, {
        href: "/"
      }, external_react_default.a.createElement("img", {
        onClick: this.handleClick,
        className: "logo",
        src: "/static/icon/logo.svg"
      })), external_react_default.a.createElement("div", {
        className: "nav-center"
      }, navRender), external_react_default.a.createElement("div", {
        className: "nav-right"
      }, external_react_default.a.createElement("button", {
        className: "btn btn--small secondary"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/sign-in"
      }, external_react_default.a.createElement("a", null, "Masuk"))), external_react_default.a.createElement("button", {
        className: "btn btn--small primary"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/register"
      }, external_react_default.a.createElement("a", null, "Daftar"))))), external_react_default.a.createElement("div", {
        className: "nav-mobile"
      }, external_react_default.a.createElement("div", {
        className: "nav-mobile-top"
      }, external_react_default.a.createElement(Navbar_ActiveLink, {
        href: "/"
      }, external_react_default.a.createElement("img", {
        onClick: this.handleClick,
        className: "logo",
        src: "/static/icon/logo.svg"
      })), external_react_default.a.createElement("img", {
        onClick: this.handleClick,
        className: "hamburger",
        src: "/static/icon/hamburger.svg"
      })), external_react_default.a.createElement("div", {
        className: this.state.navActive ? 'menu menu-active' : 'menu'
      }, navMobile, external_react_default.a.createElement(link_default.a, {
        href: "/sign-in"
      }, external_react_default.a.createElement("a", {
        className: "nav-item"
      }, "Masuk")), external_react_default.a.createElement(link_default.a, {
        href: "/register"
      }, external_react_default.a.createElement("a", {
        className: "nav-item"
      }, "Daftar")))));
    }
  }]);

  return Nav;
}(external_react_["Component"]);

/* harmony default export */ var components_Navbar = __webpack_exports__["a"] = (Navbar_Nav);

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Fl18":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("v4hW");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);




var index = function index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer pt-5 pt-md-7"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container py-5 py-md-7"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 col-12 mb-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Workshop Office"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "mt-5"
  }, "Kontak"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-1 pr-3"
  }, "Komplek Villa Kencana Damai Blok F.02 RT.021 RW.04 Kelurahan Sukamaju Kecamatan Sako Palembang, Indonesia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "mt-5"
  }, "Kontak"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-1"
  }, "cs@artria.id"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-1"
  }, "+62812345678"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "social-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/icon/instagram.svg"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/icon/facebook.svg"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/icon/twitter.svg"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/icon/youtube.svg"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/icon/linkedin.svg"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 col-12 mb-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Navigasi"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ehr/introduction"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "EHR")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/homecarae"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Homecare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/pricing"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Pricing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/others/dokter-umum"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Lainya"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 col-12 mb-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Legal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/term"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Terms")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/privacy"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Privacy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/copyright"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Copyright"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 col-12 mb-6 px-lg-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Kontak Kami"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "Nama"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    placeholder: "Email"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    placeholder: "Pesan"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn--medium primary"
  }, "Submit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app-download"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/icon/app-store.png"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/icon/app-google.png"
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-bottom"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row flex-items "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left col-md-6"
  }, "\xA9 Copyright 2019 PT Artria Medika Indonesia. All Rights Reserved."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "right col-md-6 mt-5 mt-md-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/sitemap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Sitemap")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/privacy"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Kebijakan Privasi")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/policy"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Syarat dan Ketentuan")))))));
};

/* harmony default export */ __webpack_exports__["a"] = (index);

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "WMMs":
/***/ (function(module, exports) {



/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "v4hW":
/***/ (function(module, exports) {



/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "w+rK":
/***/ (function(module, exports) {



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });