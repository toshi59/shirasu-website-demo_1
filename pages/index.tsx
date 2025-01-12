import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      title: "Webアプリケーション開発",
      description: "最新のフレームワークを使用した、高性能で拡張性の高いWebアプリケーションを開発します。",
      image: "/images/1_service/service_1.png"
    },
    {
      title: "AI導入支援",
      description: "ビジネスプロセスの効率化のため、最適なAIソリューションの選定から導入までサポートします。",
      image: "/images/1_service/service_2.png"
    },
    {
      title: "業務効率化ツール",
      description: "業務に特化したカスタムツールの開発により、作業効率を大幅に改善します。",
      image: "/images/1_service/service_3.png"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Key Visual"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative text-white text-center">
          <h1 className="text-6xl font-bold mb-6 tracking-wider">
            最新のWeb技術で、
            <br />
            ビジネスの未来を創造する
          </h1>
          <p className="text-xl mb-12 tracking-wide">
            AIとWeb技術を組み合わせた革新的なソリューションで、
            <br />
            お客様のビジネスの成長をサポートします。
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all"
          >
            お問い合わせ
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4">主要サービス</h2>
          <p className="text-gray-600 text-center mb-16">
            最新のテクノロジーを活用し、お客様のビジネスに最適なソリューションを提供します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">選ばれる理由</h2>
            <p className="text-gray-600">
              私たちは最新のテクノロジーと豊富な経験を活かし、
              お客様のビジネスの成長を支援します。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-4">最新技術の活用</h3>
              <p className="text-gray-600">
                Next.js、React、TypeScriptなど、最新のWeb技術を活用し、
                高品質なソリューションを提供します。
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4">迅速な開発</h3>
              <p className="text-gray-600">
                アジャイル開発手法により、素早くプロトタイプを作成し、
                継続的な改善を実現します。
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-4">セキュリティ重視</h3>
              <p className="text-gray-600">
                セキュリティを最優先し、安全なシステム開発と
                運用を実現します。
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-4">豊富な実績</h3>
              <p className="text-gray-600">
                様々な業界での開発実績があり、業界特有の課題に
                対する深い理解があります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/4_key_visual/key_visual_1.png"
            alt="CTA Background"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-indigo-900/80"></div>
        </div>
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              お客様のビジネスの成長をサポートします
            </h2>
            <p className="text-xl mb-12">
              まずはお気軽にご相談ください
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
