import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { name: '会社概要', href: '/about' },
      { name: '実績紹介', href: '/works' },
      { name: 'ツール', href: '/tools' },
      { name: 'お問い合わせ', href: '/contact' }
    ],
    service: [
      { name: 'Webアプリケーション開発', href: '/works' },
      { name: 'AI導入支援', href: '/works' },
      { name: '業務効率化ツール開発', href: '/works' },
      { name: 'システムコンサルティング', href: '/works' }
    ],
    social: [
      { name: 'Twitter', href: '#' },
      { name: 'LinkedIn', href: '#' },
      { name: 'GitHub', href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900">
      <div className="container">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">しらす株式会社</h3>
            <p className="text-gray-400 text-sm mb-4">
              最新のWeb技術とAIを活用した
              ソリューションを提供
            </p>
            <div className="flex space-x-4">
              {links.social.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4">リンク</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4">サービス</h4>
            <ul className="space-y-2">
              {links.service.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4">お問い合わせ</h4>
            <div className="text-gray-400 space-y-2 text-sm">
              <p>
                〒100-0001<br />
                東京都千代田区1-1-1<br />
                しらすビル 8F
              </p>
              <p>
                Tel: 03-1234-5678<br />
                Email: info@shirasu.co.jp
              </p>
              <p className="text-sm">
                受付時間: 平日 9:00〜18:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} しらす株式会社 All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
