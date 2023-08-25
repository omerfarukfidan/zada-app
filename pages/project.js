import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/project.module.css";
import { Link as ScrollLink, Element } from "react-scroll"; // react-scroll'den gerekli bileşenleri ekleyin

export default function Project() {
  return (
    <div>
      <Head>
        <title>Projemiz</title>
        <meta name="description" content="Projemiz hakkında bilgi." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={styles.container}>
        <main>
          <h1 className={styles.heading}>Projemiz</h1>

          {/* İçerik başlıklarını liste şeklinde oluşturun */}
          <div className={styles.content}>
            <ul className={styles.contentList}>
              <li>
                <ScrollLink to="section1" smooth={true} duration={500}>
                  Proje Özeti
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="section2" smooth={true} duration={500}>
                  Çözüm Ürettiği Sorun / İhtiyaç
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="section3" smooth={true} duration={500}>
                  Yerlilik ve Özgünlük Tarafı
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="section4" smooth={true} duration={500}>
                  Hedef Kitle
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="section5" smooth={true} duration={500}>
                  Kullanılacak Yöntem
                </ScrollLink>
              </li>
            </ul>

            {/* İçerik bölümlerini oluşturun */}
            <Element name="section1" className={styles.contentSection}>
              <h2>1. Proje Özeti</h2>
              <p>
                Günümüzde enerji ihtiyacında kullanılan fosil yakıtlar çevreye
                zarar vermektedir. Bu enerji kaynakları aynı zamanda fazla
                maliyet olarak da yansımaktadır. Projemizde fosil yakıt
                tüketimini azaltarak doğayı korumayı ve maliyetleri azaltmayı
                amaçladık. Bu doğrultuda rüzgâr ve güneş enerjisinden
                faydalanarak yüksek verimlilikli, yenilikçi ve akıllı bir
                elektrik direği tasarladık. Akıllı Elektrik Direği, enerjisini 1
                adet özgün rüzgâr türbini ve 1 adet güneş panelinden almaktadır.
                Bu enerji kullanılarak, ortam aydınlatması ve cihaz şarj desteği
                sağlanmaktadır. Akıllı Elektrik Direği üzerinde bulunan karekod,
                mobil uygulamamızdan ya da internet sitemizden, yanında
                bulunduğunuz Akıllı Elektrik Direği'nin şu ana kadar doğaya ne
                kadar faydalı olduğuna, elde edilen kazanca ve bunun gibi birçok
                veriye ulaşma imkânı sağlayacaktır. Aynı zamanda kullanıcılar
                kendilerine ait olan Akıllı Elektrik Direkleri hakkında da
                verileri mobil uygulamamız ve internet sitemiz sayesinde
                görebilecek ve sistemindeki Akıllı Elektrik Direkleri’nin şarj,
                ışık miktarı ve benzeri özelliklerini kontrol edebileceklerdir.
              </p>
            </Element>

            <Element name="section2" className={styles.contentSection}>
              <h2>2. Çözüm Ürettiği Sorun / İhtiyaç</h2>
              <p>
                Ülkemizdeki enerji ihtiyacının çoğunlukla fosil yakıtlardan
                karşılanması çevre kirliliğine yol açmaktadır. Aynı zamanda
                fosil yakıtlar kısıtlı kaynaklardır ve yüksek maliyetlidir. Bu
                yüzden çevreye zarar vermeyen, kısıtlı olmayan ve maliyetleri
                düşürebilecek enerji kaynaklarına ihtiyaç duyulmaktadır.
                Yenilenebilir enerji kaynaklarının kullanımının
                yaygınlaştırılması enerji problemine çözüm olacaktır. Yapılan
                araştırmalara göre Türkiye güneş enerjisi potansiyeli bakımından
                çok iyi bir konumda bulunmaktadır. Aynı zamanda uzaydan alınan
                meteorolojik verilere göre Türkiye yüksek rüzgâr potansiyeline
                sahiptir (1). Ülkemizde kullanılabilecek en uygun doğal enerji
                kaynaklarının rüzgâr ve güneş olması sebebiyle güneş paneli ve
                rüzgâr türbini entegreli bir elektrik direği tasarımı yaptık.
                Panel ve türbinden elde edilen enerjiyle elektrik direğinin
                aydınlatması sağlanacak ve üzerindeki prizle şarj işlemi
                gerçekleşecektir. Geleneksel elektrik direkleri yerine
                kullanılacak olan projemizle hem enerji maliyeti azaltılacak hem
                de temiz enerji açığa çıkacaktır.
              </p>
            </Element>

            <Element name="section3" className={styles.contentSection}>
              <h2>3. Yerlilik ve Özgünlük Tarafı</h2>
              <p>
                Projemizin tasarımı başından sonuna kadar Zada Enerji ekibi
                tarafından yapılmıştır. Tasarımda kullanılan malzemeler %70
                oranında yerli imkanlardan faydalanılarak temin edilmiştir. Güç
                dağıtım ve kontrol kartları elektronik ekibimiz, mobil uygulama
                ve internet sitesi ise yazılım ekibimiz tarafından
                geliştirilmektedir.
              </p>
              <p>
                İki kanatlı Savonius ile düz tip Darrieus entegreli bir rüzgar
                türbini tasarımı yapılmıştır (Şekil 1.1). Bu rüzgar türbini
                elektrik direği ile de birleştirilerek tamamen özgün bir tasarım
                ortaya çıkmıştır (Şekil 1). Elektrik direğinin çalışma sistemi
                yapay zeka ile desteklenmektedir. Elde edilen enerji kontrol
                mekanizmasına ulaştıktan sonra yapay zeka tarafından ihtiyaca
                göre aydınlatma, priz, batarya veya şebekeye aktarılır.
                Enerjinin şebekeye aktarılmasından dolayı maddi kazanç da
                sağlanmış olur. Projemizi mobil uygulama ve internet sitesi ile
                desteklemeyi hedeflemekteyiz. Mobil uygulama sayesinde anlık
                ortaya çıkan enerji miktarı uzaktan takip edilecek ve bu
                enerjiyle elde edilen kazanç tespit edilecektir. Ayrıca direğin
                üstünde bulunan karekod sistemi ile kullanıcı, internet sitemize
                yönlendirilecek ve yakından veri takibini gerçekleştirecektir.
                Akıllı Elektrik Direkleri’nin şarj, ışık miktarı ve benzeri
                özellikleri yine kullanıcılar tarafından kontrol
                edilebilecektir.
              </p>
            </Element>

            <Element name="section4" className={styles.contentSection}>
              <h2>4. Hedef Kitle</h2>
              <p>
                Açık alana sahip olan ve yenilenebilir enerji kaynaklarından
                faydalanmak isteyen tüm özel ve devlet kurumları hedef kitlemizi
                oluşturmaktadır. Kurumlara ek olarak, kendi temiz enerjisini
                kullanmak isteyen özel mülk sahipleri de Akıllı Elektrik
                Direğinden faydalanacaktır.
              </p>
            </Element>

            <Element name="section5" className={styles.contentSection}>
              <h2>5. Kullanılacak Yöntem</h2>
              <p>
                Proje ekibimizde; mekanik tasarım, yazılım ve elektrik
                elektronik birimleri bulunmaktadır...
              </p>
            </Element>
          </div>
        </main>
      </div>
    </div>
  );
}
