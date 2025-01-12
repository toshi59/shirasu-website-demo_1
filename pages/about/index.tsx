export default function About() {
  const companyInfo = {
    name: "しらす株式会社",
    established: "2020年4月",
    capital: "5,000万円",
    employees: "30名",
    address: "〒100-0001 東京都千代田区1-1-1 しらすビル8F",
    business: [
      "Webアプリケーション開発",
      "AIソリューション開発",
      "業務効率化ツール開発",
      "システムコンサルティング"
    ]
  };

  const members = [
    {
      name: "山田 太郎",
      position: "代表取締役社長",
      profile: "大手IT企業でのAI開発責任者を経て、2020年にしらす株式会社を設立。AI技術を活用したビジネスソリューションの開発に従事。"
    },
    {
      name: "佐藤 花子",
      position: "取締役 最高技術責任者（CTO）",
      profile: "シリコンバレーでの開発経験を持ち、最新のWeb技術に精通。技術戦略の立案と実装を担当。"
    },
    {
      name: "鈴木 一郎",
      position: "取締役 事業開発部長",
      profile: "コンサルティングファーム出身。事業戦略の立案とクライアントとの関係構築を担当。"
    }
  ];

  return (
    <div className="py-12">
      <div className="container">
        <h1 className="heading-1 text-center mb-12">会社概要</h1>

        {/* ビジョン・ミッション */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">ビジョン</h2>
            <p className="text-xl text-gray-600 mb-12">
              テクノロジーの力で、すべての企業のデジタル革新を支援し、
              より効率的でスマートな社会を実現する
            </p>

            <h2 className="heading-2 mb-6">ミッション</h2>
            <p className="text-xl text-gray-600">
              最新のテクノロジーとクリエイティブな発想で、
              お客様のビジネス課題を解決し、
              新しい価値を創造する
            </p>
          </div>
        </section>

        {/* 会社情報 */}
        <section className="card mb-16">
          <h2 className="heading-2 mb-8">会社情報</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <dl className="space-y-4">
                <div>
                  <dt className="font-semibold text-gray-600">会社名</dt>
                  <dd>{companyInfo.name}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-600">設立</dt>
                  <dd>{companyInfo.established}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-600">資本金</dt>
                  <dd>{companyInfo.capital}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-600">従業員数</dt>
                  <dd>{companyInfo.employees}</dd>
                </div>
              </dl>
            </div>
            <div>
              <dl className="space-y-4">
                <div>
                  <dt className="font-semibold text-gray-600">所在地</dt>
                  <dd>{companyInfo.address}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-600">事業内容</dt>
                  <dd>
                    <ul className="list-disc list-inside">
                      {companyInfo.business.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* 経営陣 */}
        <section>
          <h2 className="heading-2 text-center mb-8">経営陣</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold text-indigo-600 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600">{member.profile}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
