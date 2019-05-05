import Link from 'next/link';
import "./index.scss";

const index = () => (
  <div className="footer pt-5 pt-md-7">
    <div className="container py-5 py-md-7">
      <div className="row">
        <div className="col-md-4 col-12 mb-6">
          <h5 >Workshop Office</h5>
          <h5 className="mt-5">Kontak</h5>
          <p className="mb-1 pr-3">Komplek Villa Kencana Damai Blok F.02 RT.021 RW.04 Kelurahan Sukamaju Kecamatan Sako Palembang, Indonesia</p>
          <h5 className="mt-5">Kontak</h5>
          <p className="mb-1">cs@artria.id</p>
          <p className="mb-1">+62812345678</p>
          <div className="social-wrapper">
            <a href="" target="_blank">
              <img src="/static/icon/instagram.svg"/>
            </a>
            <a href="" target="_blank">
              <img src="/static/icon/facebook.svg"/>
            </a>
            <a href="" target="_blank">
              <img src="/static/icon/twitter.svg"/>
            </a>
            <a href="" target="_blank">
              <img src="/static/icon/youtube.svg"/>
            </a>
            <a href="" target="_blank">
              <img src="/static/icon/linkedin.svg"/>
            </a>
          </div>
        </div>
        <div className="col-md-2 col-12 mb-6">
          <h5 >Navigasi</h5>
          <Link href="/ehr/introduction">
            <a>
              EHR
            </a>
          </Link>
          <Link href="/homecarae">
            <a>
              Homecare
            </a>
          </Link>
          <Link href="/pricing">
            <a>
              Pricing
            </a>
          </Link>
          <Link href="/others/dokter-umum">
            <a>
              Lainya
            </a>
          </Link>
        </div>
        
        <div className="col-md-2 col-12 mb-6">
          <h5>Legal</h5>
          <Link href="/term">
            <a>
              Terms
            </a>
          </Link>
          <Link href="/privacy">
            <a>
              Privacy
            </a>
          </Link>
          <Link href="/copyright">
            <a>
              Copyright
            </a>
          </Link>
        </div>
        <div className="col-md-4 col-12 mb-6 px-lg-5">
          <h5 >Kontak Kami</h5>
          <form>
            <input type="text" placeholder="Nama" />
            <input type="email" placeholder="Email" />
            <textarea  placeholder="Pesan" />
            <button className="btn btn--medium primary">
              Submit
            </button>
          </form>
          <div className="app-download">
            <a href="" target="_blank">
              <img src="/static/icon/app-store.png"/>
            </a>
            <a href="" target="_blank">
              <img src="/static/icon/app-google.png"/>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row flex-items ">
          <div className="left col-md-6">
            © Copyright 2019 PT Artria Medika Indonesia. All Rights Reserved.
          </div>
          <div className="right col-md-6 mt-5 mt-md-0">
            <Link href="/sitemap">
              <a>
                Sitemap
              </a>
            </Link>
            <Link href="/privacy">
              <a>
                Kebijakan Privasi
              </a>
            </Link>
            <Link href="/policy">
              <a>
                Syarat dan Ketentuan
              </a>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  </div>
)

export default index