export default function Works() {
  const projects = [
    {
      title: "大手企業向けAIシステム開発",
      client: "製造業A社",
      description: "上場企業向けにAIを活用した業務効率化システムを開発。月間100万件以上の処理を自動化し、作業時間を60%削減しました。",
      technologies: ["Python", "TensorFlow", "React", "AWS"],
      results: ["処理時間60%削減", "年間コスト4000万円削減", "人的ミス98%削減"]
    },
    {
      title: "金融機関向けAI予測システム",
      client: "大手銀行B社",
      description: "主要銀行向けに市場予測AIを開発。予測精度90%以上を達成し、投資判断の精度を大幅に向上させました。",
      technologies: ["Python", "PyTorch", "Next.js", "GCP"],
      results: ["予測精度90%達成", "投資収益率15%向上", "分析時間80%削減"]
    },
    {
      title: "小売業向け需要予測システム",
      client: "小売チェーンC社",
      description: "大手小売チェーン向けにAI需要予測システムを開発。在庫最適化により20%のコスト削減を実現しました。",
      technologies: ["Python", "scikit-learn", "Vue.js", "Azure"],
      results: ["在庫コスト20%削減", "欠品率65%削減", "発注作業時間75%削減"]
    }
  ];

  return (
    <div className="py-12">
      <div className="container">
        <h1 className="heading-1 text-center mb-12">実績紹介</h1>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-indigo-600 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">クライアント: {project.client}</p>
                <p className="paragraph mb-4">{project.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">使用技術</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">成果</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-600 mb-8">
            お客様のビジネスに最適なソリューションを提供いたします。
            <br />
            まずはお気軽にご相談ください。
          </p>
          <a href="/contact" className="button-primary">
            お問い合わせ
          </a>
        </div>
      </div>
    </div>
  );
}
