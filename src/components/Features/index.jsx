import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import Paragraph from "../Atoms/paragraph";
import FeatureItem from "./featureItem";
import { motion } from "framer-motion";

export default function Features() {
  const dataFeatures = [
    {
      id: 1,
      title: "Pilihan Barang Lengkap",
      logo: "/feature-2.png",
      content:
        "Temukan beragam pilihan barang yang lengkap untuk memenuhi kebutuhan Anda di BarKit",
    },
    {
      id: 2,
      title: "Keaslian Barang Terjamin",
      logo: "/feature-1.png",
      content:
        "Kami menjamin keaslian setiap barang yang diposting, sehingga Anda dapat menyewa dengan percaya diri.",
    },
    {
      id: 3,
      title: "Proses Sewa yang Mudah",
      logo: "/feature-3.png",
      content:
        "Nikmati pengalaman menyewa yang praktis dan cepat melalui aplikasi BarKit.",
    },
    {
      id: 4,
      title: "Transparansi dan Keamanan",
      logo: "/feature-4.png",
      content:
        "Kami menjaga transparansi dalam setiap transaksi dan memberikan keamanan dalam pembayaran.",
    },
    {
      id: 5,
      title: "Pengiriman Cepat",
      logo: "/feature-5.png",
      content:
        "Pengiriman Cepat: Dapatkan barang yang Anda sewa dengan cepat melalui pengiriman yang efisien di BarKit",
    },
    {
      id: 6,
      title: "Layanan Pelanggan Responsif",
      logo: "/feature-6.png",
      content:
        "Tim dukungan pelanggan kami siap membantu Anda dengan cepat dan ramah, memberikan pengalaman menyewa yang nyaman",
    },
  ];


  const content = {
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { y: -100, opacity: 0 },
  };

  return (
    <div className="container mx-auto max-w-[1344px]">
      <div className="flex flex-col gap-10 px-5 py-16 sm:pb-28 sm:px-10 md:pb-36">
        {/* Head Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={content}
          className="flex flex-col items-center text-center"
        >
          <Subtitle style="mb-2">Why Choose Us?</Subtitle>
          <SubHead style="mb-[18px] sm:w-8/12 md:w-9/12 lg:w-7/12">
             Aplikasi Sewa dengan Fitur Unggulan yang Mengesankan
          </SubHead>
          <Paragraph
            fontSize="text-sm"
            color="text-black-400"
            style="sm:w-3/5 md:w-7/12 lg:w-1/3"
          >Temukan fitur-fitur unggulan kami di BarKit, pilihan terbaik untuk kebutuhan sewa barang Anda. Berikut adalah beberapa fitur yang menjadikan kami pilihan yang tepat
          </Paragraph>
        </motion.div>

        {/* Feature Items */}
        <div className="grid gap-6 overflow-hidden md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dataFeatures?.map((feature, index) => (
            <FeatureItem
              key={feature.id}
              feature={feature}
              i={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
