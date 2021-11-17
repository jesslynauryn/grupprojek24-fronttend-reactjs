import Carousell from "../components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../styles/wisata1.css";

const dataWisata = [
  {
    content: (
      <>
        <video
          style={{ height: "800px", width: "100%", objectFit: "cover" }}
          autoPlay
          loop
          muted
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-happy-woman-runs-on-bali-beach-at-sunset-13003-large.mp4"
            type="video/mp4"
          ></source>
          Sorry, your browser doesn't support videos.
        </video>
      </>
    ),
    title: "Nusa Penida"
  },
  {
    content: (
      <>
        <img
          style={{ height: "800px", objectFit: "cover" }}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1555433258-d095529cd481?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80"
          alt="Nusapenida"
        />
      </>
    ),
    title: ""
  },
  {
    content: (
      <>
        <img
          style={{ height: "800px", objectFit: "cover" }}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1515932600702-e7937d80ed22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1163&q=80"
          alt="Nusapenida"
        />
      </>
    ),
    title: ""
  }
];

const Wisata1 = () => (
  <>
    <div>
      <Carousell carouselData={dataWisata} />
    </div>
    <div>
      <h3 className="card__title" style={{ padding: "80px 60px 30px" }}>
        REGULASI KEDATANGAN
      </h3>

      <Tabs
        defaultActiveKey="wni"
        id="uncontrolled-tab-example"
        className="mb-3"
        style={{ padding: "0 60px" }}
      >
        <Tab eventKey="wni" title="WNI" style={{ padding: "20px 60px 30px" }}>
          <Card className="text-white">
            <Card.Img
              src="https://images.unsplash.com/photo-1615561916422-7014e1078997?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title className="card-title">
                Syarat Masuk Bali untuk WNI
              </Card.Title>
            </Card.ImgOverlay>
          </Card>

          <p>
            <br />
            <h5>
              Syarat Perjalanan Dari Pulau Jawa ke Pulau Bali (dan sebaliknya)
            </h5>
            <br />
            Wajib menunjukkan kartu vaksin minimal dosis pertama
            <br />
            Tes PCR negatif berlaku 2 x 24 jam.
            <br />
            Tes Antigen negatif berlaku 1 x 24 jam (hanya berlaku jika memiliki
            sertifikat vaksin dosis kedua)
            <br />
            Surat keterangan hasil negatif tes RT-PCR/Rapid Antigen harus
            dilengkapi dengan barcode/ QRCode
            <br />
            Catatan: Hasil tes Rapid Antigen hanya berlaku jika penumpang
            memiliki sertifikat vaksin dosis kedua, jika hanya memiliki
            sertifikat vaksin dosis pertama maka hasil tes COVID-19 yang berlaku
            adalah hasil tes RT-PCR.
            <br />
            <br />
            <br />
            <h5>Syarat Perjalanan Dari/Ke Pulau Bali (selain Pulau Jawa)</h5>
            <br />
            Wajib menunjukkan kartu vaksin minimal dosis pertama
            <br />
            Tes PCR negatif berlaku 2 x 24 jam.
            <br />
            Tes Antigen tidak berlaku, kecuali jika diizinkan oleh KKP bandara
            keberangkatan dan dilengkapi sertifikat vaksin COVID-19 dosis
            lengkap (dosis kedua). Jika KKP bandara keberangkatan mengizinkan,
            maka tes antigen berlaku 1 x 24 jam.
            <br />
            Surat keterangan hasil negatif tes RT-PCR harus dilengkapi dengan
            barcode/ QRCode
            <br />
            Peserta vaksin di Bandar Udara Internasional I Gusti Ngurah Rai
            (DPS) Bali tidak dapat terbang di hari yang sama dengan vaksinasi
            <br />
            Penumpang yang pernah terpapar COVID-19 tiga bulan terakhir dapat
            membawa Surat Keterangan Penyintas COVID-19 sebagai referensi tidak
            dapat vaksinasi
            <br />
            Khusus keberangkatan dari Bali ke daerah asal penumpang: WNA yang
            berangkat dari Bali dengan tujuan internasional melalui penerbangan
            domestik dan transit tidak lebih dari 24 jam di bandara transit,
            tidak wajib menunjukkan kartu vaksinasi
          </p>
        </Tab>
        <Tab eventKey="wna" title="WNA" style={{ padding: "20px 60px 30px" }}>
          <Card className="text-white">
            <Card.Img
              src="https://images.unsplash.com/photo-1532968899863-5b52ef155913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title className="card-title">
                Syarat Masuk Bali untuk WNA
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
          <br />
          <p>
            <h5>
              Selama masa PPKM, Bali ditutup untuk kunjungan wisatawan asing.
            </h5>
            <br />
            Namun pada 14 Oktober 2021 pemerintah telah membuka perjalanan bagi
            WNA untuk masuk bali dengan ketentuan yang berlaku. Menurut situs
            CovidControl, semua wisatawa internasional hanya dpat masuk ke
            Indoneisa melalui Bali ( Bandara International Ngurah Rai) dan
            Kepulauan Riau ( Bandra Internasional Raja Haji Fisabillah).
            <br />
            <br />
            Pembukaan bali pada 14 Oktober 2021 lalu, Indonesia hanya
            mengizinkan 19 negara yang dipilih sesuai standar Badan Kesehatan
            Dunia (WHO) karena angka kasus terkonfirmasi Covid-19nya berada pada
            level 1 dan 2 dengan angka positivity rate yang rendah. Negara yang
            diizinkan tersebut yaitu Saudi Arabia, United Arab Emirates,
            Selandia Baru, Kuwait, Bahrain, Qatar, China, India, Jepang, Korea
            Selatan, Liechtenstein, Italia, Prancis, Portugal, Spanyol, Swedia,
            Polandia, Hungaria, dan Norwegia.
            <br />
            <br />
            <br />
            <h5>Persyaratan Dokumen dan Protokol Kesehatan</h5>
            <br />
            Menunjukkan hasil negatif melalui tes RT-PCR di negara asal yang
            diambil dalam kurun waktu maksimal 3 x 24 jam sebelum keberangkatan
            dan dilampirkan saat pemeriksaan kesehatan atau e-HAC Internasional
            Indonesia melalui aplikasi PeduliLindungi (download di Android /
            iOS)
            <br />
            Menunjukkan kartu sertifikat vaksinasi COVID-19 lengkap (seluruh
            dosis) sebagai bukti telah menerima vaksin Covid-19 dosis lengkap
            minimal 14 hari sebelum keberangkatan. Kartu atau sertifikat vaksin
            harus berbahasa Inggris, selain bahasa asal
            <br />
            Pelaku perjalanan wajib menggunakan penerbangan langsung (direct
            flight) dari negara asalnya
            <br />
            Jika WNA dengan kondisi komorbid wajib menunjukkan surat keterangan
            dari Rumah Sakit Pemerintah negara keberangkatan, dalam Bahasa
            Inggris selain bahasa asal negaranya.
            <br />
            Bagi WNA wajib menunjukkan bukti kepemilikan asuransi
            kesehatan/asuransi perjalanan yang mencakup pembiayaan kesehatan
            dengan nilai pertanggungan minimal 100.000 dolar Amerika Serikat
            (AS) atau sekitar Rp 1,4 miliar dalam melakukan karantina dan
            pengobatan jika terpapar COVID-19
            <br />
            Pada saat kedatangan, dilakukan tes molekular isotermal (NAAT/jenis
            lainnya) atau tes RT-PCR bagi pelaku perjalanan internasional dan
            diwajibkan menjalani karantina terpusat selama 5 x 24 jam
            <br />
            Pada hari ke-7 karantina, bagi WNI dan WNA dilakukan pemeriksaan
            ulang RT-PCR
            <br />
            Jika WNA belum mendapat vaksin di negara asal akan divaksinasi di
            tempat karantina setibanya di Indonesia setelah dilakukan
            pemeriksaan RT-PCR kedua dengan hasil negatif
          </p>
        </Tab>

        <Tab
          eventKey="selengkapnya"
          style={{ padding: "20px 60px 30px" }}
          // href="https://travel.kompas.com/read/2021/04/01/101000127/aturan-perjalanan-dari-dan-ke-bali-terbaru-berlaku-mulai-1-april-2021?page=all"
          // target="blank_"
          title="Selengkapnya"
        >
          <a
            href="https://travel.kompas.com/read/2021/04/01/101000127/aturan-perjalanan-dari-dan-ke-bali-terbaru-berlaku-mulai-1-april-2021?page=all"
            taget="_blank"
          >
            <h3>Klik disini</h3>
          </a>
        </Tab>
      </Tabs>
    </div>
  </>
);
export default Wisata1;
